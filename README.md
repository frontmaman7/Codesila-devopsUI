# CodeSila DevOps UI

A full-stack DevOps management platform with a React frontend and Node.js backend.

## Project Structure

```
├── codesila-backend/    # Node.js/TypeScript backend (Prisma, Express)
├── codesila-frontend/   # React/TypeScript frontend (Vite, Tailwind CSS)
└── docker-compose.yml   # Docker orchestration
```

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- Docker (optional)

### Installation

```bash
npm install
```

### Running with Docker

```bash
docker compose up
```

### Running Locally

```bash
# Start the backend
cd codesila-backend
npm run dev

# Start the frontend
cd codesila-frontend
npm run dev
```
