# Fullstack MVP branch

Bu branch, temel bir fullstack MVP uygulaması içerir:
- Backend: Express + Sequelize + Postgres (auth, products, orders, messages)
- Frontend: React (Vite) temel sayfalar ve API bağlantısı
- Docker Compose: db, backend, frontend

Kullanım (Docker ile önerilir):
1. docker-compose up --build
2. Backend: http://localhost:4000/api/health
3. Frontend: http://localhost:3000

Not: JWT_SECRET ve DATABASE_URL'ı üretim için güvenli şekilde değiştirin.
