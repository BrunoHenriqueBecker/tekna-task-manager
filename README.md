
🚀 Tekna Task Manager
A full-stack task management application with authentication, built with:

Backend: Node.js, Express, Prisma, PostgreSQL

Frontend: Angular 19, Angular Material

Database: PostgreSQL

Containerization: Docker + Docker Compose

🗂️ Project Structure
bash
Copiar
Editar
/backend       → Node.js + Express + Prisma API
/frontend      → Angular 19 App
/docker-compose.yml
🐳 Run the project with Docker

1️⃣ Clone the repository
bash
Copiar
Editar
git clone https://github.com/BrunoHenriqueBecker/tekna-task-manager.git
cd tekna-task-manager
2️⃣ Create the .env file for backend
Create a file /backend/.env with the following content:

env
Copiar
Editar
DATABASE_URL=postgresql://postgres:postgres@db:5432/tekna?schema=public
JWT_SECRET=your_jwt_secret
3️⃣ Run the project
bash
Copiar
Editar
docker-compose up --build
This command will start:

API on http://localhost:3000

Angular app on http://localhost:4200

PostgreSQL database

🧠 API Endpoints
🔐 Authentication
POST /auth/register → Register user { email, password }

POST /auth/login → Get JWT { email, password }

✅ Tasks
GET /tasks → List tasks (JWT required)

POST /tasks → Create task { title, description, dueDate } (JWT required)

PUT /tasks/:id → Update task (JWT required)

DELETE /tasks/:id → Delete task (JWT required)

🛠️ Tech Stack
Backend
Node.js ^22

Express ^5

Prisma ^6

PostgreSQL ^17

Typescript

Frontend
Angular ^19

Angular Material ^19

🔐 Authentication
JWT-based authentication.

All /tasks endpoints require a valid token.

🎨 Frontend Features
Login and register screens

Task list with:

Title

Status (Completed/Pending)

Due date

Create / Edit / Delete tasks

Loading states and basic error handling

Angular services with JWT interceptor

🗄️ Database Schema
Users

id

email

password (hashed)

Tasks

id

title

description

dueDate

completed

userId (FK)

🐘 Database Migrations
Migrations are automatically executed on container startup via Prisma.

⚙️ Available Commands
Backend
bash
Copiar
Editar
# Run migrations
npx prisma migrate deploy

# Run seed
npx prisma db seed

# Run dev
npm run dev
Frontend
bash
Copiar
Editar
# Run locally
npm install
ng serve
🚨 Notes
Everything runs with one command via Docker Compose.

Make sure ports 3000 (API), 4200 (Frontend), and 5432 (DB) are available.

📄 License
MIT License.

💻 Author
Bruno Henrique Becker