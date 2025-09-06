# 💬 Real-Time Chat Application

A **scalable real-time chat application** built with **Next.js (frontend)** and **Express.js (backend)**, featuring **Google OAuth authentication**, **JWT-based sessions**, **Socket.IO with Redis adapter** for distributed WebSocket handling, and **Kafka** for reliable message streaming and persistence.

---

## 🚀 Tech Stack

### **Frontend**
- Next.js 14 – React framework with App Router
- NextAuth.js – Authentication (Google OAuth)
- TailwindCSS – Styling
- React Context API – Session + state management

### **Backend**
- Express.js – REST API backend
- Prisma ORM – Database ORM
- PostgreSQL – Database
- Redis – Socket.IO adapter for multi-instance scaling
- Apache Kafka – Message broker for reliable chat persistence
- Socket.IO – Real-time communication

---

## ✨ Features

- 🔐 Google OAuth Authentication with NextAuth + JWT  
- 💬 Real-time messaging using Socket.IO  
- ⚡ Scalable WebSockets with Redis adapter  
- 📩 Message persistence in PostgreSQL via Prisma  
- 🔄 Kafka message streaming for reliability and async processing  
- 📱 Responsive UI with TailwindCSS  
- 🛠️ Clean architecture – controllers, routes, services separation  
- 🧩 Extensible design – easy to add features like typing indicators, reactions, or notifications  

---

## 📂 Project Structure

client/ # Next.js frontend
src/
app/ # App Router pages
components/ # Reusable UI components
providers/ # Session provider (NextAuth)
lib/ # API route definitions
fetch/ # API call wrappers
server/ # Express backend
src/
config/ # Redis, Kafka, Prisma configs
controllers/ # Auth & chat controllers
routes/ # API routes
socket.ts # Socket.IO setup

yaml
Copy code

---

## 🛠️ Setup & Installation

### 1️⃣ Clone Repository
git clone https://github.com/aryanmishra64/chat-app.git
cd chat-app

shell
Copy code

### 2️⃣ Setup Backend
cd server
npm install

markdown
Copy code

- Configure `.env` file:
PORT=7000
DATABASE_URL=your_postgres_url
REDIS_URL=your_redis_url
KAFKA_BROKER=your_kafka_broker
KAFKA_USERNAME=your_kafka_username
KAFKA_PASSWORD=your_kafka_password
KAFKA_TOPIC=chats

diff
Copy code

- Run migrations:
npx prisma migrate dev

diff
Copy code

- Start server:
npm run dev

shell
Copy code

### 3️⃣ Setup Frontend
cd client
npm install

markdown
Copy code

- Configure `.env.local`:
NEXT_PUBLIC_BACKEND_URL=http://localhost:7000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

diff
Copy code

- Start client:
npm run dev

yaml
Copy code

Frontend runs at 👉 http://localhost:3000  
Backend runs at 👉 http://localhost:7000  

---

## ▶️ How It Works

1. User logs in via Google OAuth → backend issues JWT  
2. Frontend stores JWT in session (via NextAuth)  
3. User joins a chat room → Socket.IO connection established  
4. Message flow:  
   - Socket emits message → Redis adapter distributes across instances  
   - Kafka producer publishes message → Kafka consumer stores in PostgreSQL  
   - Socket.IO broadcasts message to all users in the room  

---

## 📜 License
This project is licensed under the MIT License.

---

## 👨‍💻 Author
- Aryan Mishra  


