# Arab Cup Backend

## Project

Backend for Arab Cup Web Project (Express.js + Prisma + PostgreSQL). Provides REST API for teams, players, matches, and leaderboard.

## Tech Stack

- Node.js, Express.js
- Prisma ORM
- PostgreSQL
- Docker & Docker Compose

## Setup

1. Clone repo & install dependencies:

```bash
git clone https://github.com/yasminezegaoui/ArabCupWebProject
cd backend
npm install

```

1. Create `.env` file:

```
DATABASE_URL=postgresql://postgres:postgres@db:5432/arab_cup?schema=public
PORT=3000

```


1. Run backend:

```bash
npm start

```

## Docker 

Build & start services:

```bash
docker compose up --build

```

Stop services:

```bash
docker compose down

```