# Fullstack MVP

Bu dal (feature/fullstack-mvp) uygulamanın working MVP versiyonunu içerir:

- Backend: Express + Sequelize + Postgres
  - Auth (register/login)
  - Products CRUD
  - Orders (create/list)
  - Messages
- Frontend: React + Vite
  - Pages: Login, Dashboard, Products, Messages, Orders

Çalıştırma (Docker önerilir):
  docker-compose up --build

Yerel (docker yoksa):
- Backend:
  cd backend
  npm install
  cp .env.example .env
  npm run seed
  npm run dev
- Frontend:
  cd frontend-react
  npm install
  npm run dev
