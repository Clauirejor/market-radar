// Market Radar Service Worker v6
const CACHE = 'market-radar-v6';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// INSTALL — cache assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// ACTIVATE — clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// FETCH — network first, fallback to cache
self.addEventListener('fetch', e => {
  // Don't intercept websocket or external API calls
  if (e.request.url.includes('binance.com') ||
      e.request.url.includes('coingecko.com') ||
      e.request.url.includes('anthropic.com') ||
      e.request.url.includes('clearbit.com') ||
      e.request.url.startsWith('wss://')) {
    return;
  }
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});

// PUSH NOTIFICATIONS — receive push from server (future)
self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  const title = data.title || '📡 Market Radar';
  const opts = {
    body: data.body || 'Nueva señal detectada',
    icon: './icons/icon-192.png',
    badge: './icons/icon-192.png',
    vibrate: data.critical ? [400, 100, 400, 100, 400] : [200, 100, 200],
    requireInteraction: data.critical || false,
    data: { url: data.url || './' }
  };
  e.waitUntil(self.registration.showNotification(title, opts));
});

// NOTIFICATION CLICK — open app
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const client of list) {
        if (client.url.includes('market-radar') && 'focus' in client) return client.focus();
      }
      return clients.openWindow(e.notification.data?.url || './');
    })
  );
});
