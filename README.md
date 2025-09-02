# Node-App - Portfolio

A simple full-stack application built with **Node.js**, **Express.js**, **React.js**, and **MongoDB**.

---

## Table of Contents

* [About](#about)
* [Features](#features)
* [Architecture](#architecture)
* [Technologies](#technologies)
* [Getting Started](#getting-started)
* [Usage](#usage)
* [Environment Setup](#environment-setup)
* [Available Scripts](#available-scripts)
* [Configuration & Environment Variables](#configuration--environment-variables)
* [Folder Structure](#folder-structure)
* [Contributing](#contributing)
* [License](#license)

---

## About

This repository houses **node-app**, a full-stack web application built using a **Node.js + Express.js** backend, a **React.js** frontend, and **MongoDB** as the database. The application is designed as a starting point for building RESTful services and rich user interfaces, showcasing practical integration between modern technologies.

---

## Features

* REST API backend built with **Express.js**
* Dynamic frontend using **React.js**, with modern UI design
* Database integration via **MongoDB** (with Mongoose)
* Fully configured `Dockerfile` and `docker-compose.yml` for easy deployment
* Built-in CI/CD support (e.g., via CircleCI and GitHub Actions)
* Coding standards enforced via **ESLint** and **Prettier**
* TypeScript for enhanced type safety

---

## Architecture

```
┌──────────────────┐         ┌──────────────────┐
│    Client        │ <──HTTP──> │    Server       │
│ (React.js SPA)   │          │ (Express.js API)│
└──────────────────┘         └──────────────────┘
           │                           │
           └─── Static Build / Dev ───┘
                   ↓
             ┌───────────────┐
             │   MongoDB     │
             │ (Mongoose ORM)│
             └───────────────┘
```

* The **frontend** (client directory) handles views, components, and user interactions.
* The **backend** (server directory) defines routes, controllers, models, and business logic.
* **MongoDB** stores application data, accessed via Mongoose schemas in the backend.

---

## Technologies

* **Node.js** – JavaScript runtime
* **Express.js** – Back-end routing and middleware
* **React.js** – Front-end UI library
* **MongoDB** – NoSQL database
* **Mongoose** – MongoDB object modeling for Node.js
* **TypeScript** – Static type checking
* **Docker** – Containerization
* **CircleCI / GitHub Actions** – Continuous integration pipelines
* **ESLint** & **Prettier** – Code formatting and linting

---

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org) (≥14.x)
* [MongoDB](https://www.mongodb.com) (local or remote)
* [Docker](https://www.docker.com) (optional, for containerized setup)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/lokeshg-sde/node-app.git
   cd node-app
   ```

2. Install dependencies for both backend and frontend

   ```bash
   cd server && npm install
   cd ../client && npm install
   ```

3. Rename `.env.example` to `.env` and populate required variables (database URI, API keys, etc.)

---

## Usage

### Running Locally

#### Backend

```bash
cd server
npm run dev
```

#### Frontend

```bash
cd client
npm start
```

### Running with Docker

To start both services via Docker:

```bash
docker-compose up --build
```

---

## Available Scripts

### Server (`server` directory)

* `npm run dev` – Starts server in development mode (with hot reload)
* `npm run build` – Builds production server (if applicable)
* `npm test` – Runs backend tests (if implemented)

### Client (`client` directory)

* `npm start` – Runs React development server
* `npm run build` – Generates optimized production build

---

## Configuration & Environment Variables

Copy `.env.example` to `.env` in the **server** directory and set:

* `PORT` – Backend server port
* `MONGO_URI` – MongoDB connection string
* Any other required API keys or secrets

You may also configure frontend environment variables under `client/.env`.

---

## Folder Structure

```
node-app/
├── server/                   # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── index.ts
├── client/                   # React frontend
│   ├── src/
│   ├── public/
│   └── ...
├── .env.example
├── Dockerfile
├── docker-compose.yml
└── README.md
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (e.g., `feature/example`)
3. Commit changes with descriptive messages
4. Open a Pull Request and describe your changes
5. Optionally, run linting and tests before submitting

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
