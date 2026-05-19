# 🌤️ Weather App

> A modern, responsive weather application built with **React + Vite**, delivering real-time weather data with accurate local time, sunrise/sunset info, dynamic day/night theming, a 5-day forecast, AI-generated weather tips, and optimized backend performance with Redis caching.

🔗 **Live Demo:** [weather-app-abohawa.vercel.app](https://weather-app-abohawa.vercel.app)

---

## ✨ Features

- **City search** with current temperature, feels-like, humidity, wind speed, and visibility
- **Accurate local time** per searched city, with timezone-aware sunrise & sunset display
- **5-day weather forecast** with daily max & min temperatures
- **Dynamic theming** — background shifts between day and night modes based on sun position
- **AI-powered weather tips** — contextual suggestions generated using the Gemini API
- **Redis-powered backend caching** for faster API responses and reduced redundant weather/API requests
- **Glassmorphism-inspired UI**, fully responsive across all screen sizes
- **Smooth UI animations** powered by Framer Motion with staggered transitions and animated weather panels

---

## 🧩 Backend

This project uses a separate backend service for handling weather API requests, AI processing, and caching.

**Repository:** [github.com/arkaman/weather-ai-service](https://github.com/arkaman/weather-ai-service)

---

## 🛠️ Tech Stack

| Technology      | Purpose                                    |
| --------------- | ------------------------------------------ |
| React 19        | UI & component architecture                |
| Vite            | Fast dev server & build tooling            |
| Tailwind CSS    | Utility-first styling & responsive design  |
| DaisyUI         | Prebuilt Tailwind UI components            |
| Framer Motion   | Smooth animations & transitions            |
| Lucide Icons    | Lightweight, consistent iconography        |
| OpenWeather API | Real-time weather & forecast data          |
| Gemini API      | AI-generated weather tips & insights       |
| Redis           | Backend caching & performance optimization |

---

## 📸 Screenshots

| Day Mode                           | Night Mode                             |
| ---------------------------------- | -------------------------------------- |
| ![Day Mode](./screenshots/day.png) | ![Night Mode](./screenshots/night.png) |
