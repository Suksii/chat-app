# Chat App project

## About

This project is a full-stack real-time Chat application built with React for the frontend and Express, Node.js, Express, Socket.io and MongoDB for the backend.</br>
The application allows users to register, login, and chat with other registered users in real time.

## Frontend:
- **React**
- **Axios**
- **React Router Dom**
- **TailwindCSS**
- **DaisyUI**
- **Socket.io Client**

## Backend:
- **Node.js**
- **ExpressJS**
- **Socket.io**
- **Cors**
- **Mongoose**
- **MongoDB**
- **Cookie Parser**
- **BcryptJS**
- **.env**
- **Multer**
- **Nodemon**

## Setup

Requires **Node 20** (`nvm use` picks it up from `.nvmrc`) and a MongoDB instance.

```bash
# Backend
npm install
cp .env.example .env      # then fill in MONGO_URI and JWT_SECRET
npm run dev

# Frontend, in a second terminal
cd client
npm install
cp .env.example .env
npm run dev
```

Generate a signing secret for `JWT_SECRET` with:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

### Environment variables

| Variable | Where | Purpose |
| --- | --- | --- |
| `PORT` | root `.env` | Port the API listens on |
| `MONGO_URI` | root `.env` | MongoDB connection string |
| `CLIENT_URL` | root `.env` | Origin allowed by CORS and the socket handshake |
| `JWT_SECRET` | root `.env` | Signs auth tokens |
| `NODE_ENV` | root `.env` | Set to `production` to enable `Secure` / `SameSite=None` cookies |
| `VITE_SERVER_URL` | `client/.env` | Base URL of the backend |

## Features

- **User Authentification:** Register, login, logout and profile management
- **Sidebar:** Displays all users except the currently logged-in user.
- **Message Window:** Allows users to view previous messages and send new messages to other users from sidebar.

## Register Page
![chat-app_register-page](https://github.com/user-attachments/assets/e11c021c-4219-40e3-a619-f4e9022a716c)

## Login Page
![chat-app_login-page](https://github.com/user-attachments/assets/a6bb6481-8bde-471e-a266-0fdfc5d00adc)

## Chat Page
![chat-app_home-page](https://github.com/user-attachments/assets/f7262b09-d49b-4f84-bac2-9c2b346debc3)




