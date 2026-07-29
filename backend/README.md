Backend scaffold for NK-ERP

This branch contains a minimal Express server with:
- /api/auth routes (register/login)
- Sequelize setup for Postgres
- Dockerfile and docker-compose for local development

To run locally without docker:
1. cd backend
2. npm install
3. set DATABASE_URL env (or copy ../backend/.env.example)
4. node src/index.js

WARNING: This scaffold is a minimal prototype. Do not use in production without security hardening.
