# 📡 Market Radar

Monitor de mercados cripto y bolsa en **tiempo real** con alertas inteligentes.

🔗 **App en vivo:** https://clauirejor.github.io/market-radar/

---

## ✨ Características

- **WebSocket Binance** — precios tick a tick sin delay
- **2 modos de análisis:**
  - ⚡ **TRADING** — señales rápidas para corto/largo con apalancamiento
  - 🌙 **HODL** — ciclo halving Bitcoin, largo plazo 1-4 años
- **Score compuesto 0-100** basado en 9 indicadores técnicos: RSI, MACD, Bollinger Bands, Estocástico, Williams %R, CCI, ADX, Volumen, Precio 24h
- **Sistema de alertas multicapa (5 niveles):**
  - Toast en pantalla
  - Push notifications al móvil
  - Flash de pantalla
  - Vibración
  - Cascada de 3 notificaciones para eventos extremos
- **Detector de crashes en tiempo real:** alerta en segundos ante caídas del -3% en 1min
- **Portfolio tracker** con P&L en tiempo real
- **Noticias por activo** generadas con IA (Claude API)
- **PWA instalable** en iPhone y Android

---

## 📱 Instalar en iPhone

1. Abre la URL en **Safari**
2. Pulsa el icono **Compartir** (cuadrado con flecha)
3. Selecciona **"Añadir a pantalla de inicio"**
4. Abre la app desde el icono creado
5. Ve a **🔔 Alertas** y activa las notificaciones push

---

## 🚀 Subir a GitHub Pages

### Opción A — Desde GitHub.com (más fácil)

1. Ve a [github.com](https://github.com) → **New repository**
2. Nombre: `market-radar`
3. Marca **Public**
4. Sube todos los archivos de esta carpeta (drag & drop)
5. Ve a **Settings → Pages → Branch: main → / (root)**
6. Tu app estará en: `https://TU_USUARIO.github.io/market-radar/`

### Opción B — Con Git

```bash
git init
git add .
git commit -m "Market Radar v6 - Real-time WebSocket alerts"
git remote add origin https://github.com/clauirejor/market-radar.git
git push -u origin main
```

---

## 📊 Indicadores técnicos

| Indicador | Descripción |
|-----------|-------------|
| RSI | Relative Strength Index — sobrecompra/sobreventa |
| MACD | Moving Average Convergence Divergence — tendencia |
| BB | Bandas de Bollinger — volatilidad y rango |
| STOCH | Estocástico — impulso comprador/vendedor |
| W%R | Williams %R — sobrecompra/sobreventa rápido |
| CCI | Commodity Channel Index — desviación del precio medio |
| ADX | Average Directional Index — fuerza de tendencia |
| VOL | Volumen relativo — anomalías de volumen |
| 24H | Cambio porcentual en 24 horas |

---

## ⚠️ Aviso legal

Esta aplicación es **solo informativa**. Los indicadores técnicos no predicen el futuro. No constituye asesoramiento financiero. Opera siempre con capital que puedas permitirte perder, especialmente con apalancamiento.

---

## 🛠 Tecnología

- HTML/CSS/JS puro — sin frameworks, un solo archivo
- WebSocket API de Binance (gratuita)
- CoinGecko API (gratuita)
- Claude API (Anthropic) para noticias
- PWA con Service Worker para uso offline e instalación
