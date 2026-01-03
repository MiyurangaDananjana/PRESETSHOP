# PresetShop

A full-stack web application built with Next.js 15 (frontend) and .NET 8.0 (backend), containerized with Docker.

## Quick Start

### Local Development

```bash
# Clone the repository
git clone <your-repo>
cd PresetShop_Project

# Copy environment file
cp .env.example .env

# Start all services
docker-compose up --build

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:8080
# Via Nginx: http://localhost
```

### Development with Hot-Reload

```bash
docker-compose -f docker-compose.dev.yml up --build
```

## Technology Stack

- **Frontend**: Next.js 15, React 18, TypeScript, Tailwind CSS
- **Backend**: .NET 8.0, ASP.NET Core
- **Database**: PostgreSQL 15
- **Reverse Proxy**: Nginx
- **Containerization**: Docker, Docker Compose

## Project Structure

```
PresetShop_Project/
├── backend/              # .NET 8.0 API
│   ├── src/             # Source code
│   └── Dockerfile       # Backend Docker image
├── frontend/            # Next.js application
│   ├── src/            # Source code
│   └── Dockerfile      # Frontend Docker image
├── nginx/              # Nginx configuration
│   └── nginx.conf      # Reverse proxy config
├── docker-compose.yml           # Local development
├── docker-compose.dev.yml       # Dev with hot-reload
├── docker-compose.prod.yml      # Production deployment
├── .env                # Environment variables
├── .env.example        # Environment template
├── DEPLOYMENT.md       # Detailed deployment guide
└── README.md          # This file
```

## Environment Variables

Copy `.env.example` to `.env` and update the values:

```env
POSTGRES_USER=appuser
POSTGRES_PASSWORD=your-secure-password
POSTGRES_DB=appdb
POSTGRES_HOST=db
POSTGRES_PORT=5432

ASPNETCORE_ENVIRONMENT=Production
ASPNETCORE_URLS=http://+:8080
```

## Docker Compose Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and restart
docker-compose up -d --build

# Remove everything including volumes
docker-compose down -v
```

## Production Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed production deployment instructions.

### Quick Production Deploy

1. Build and push images to Docker Hub:
```bash
docker build -t your-username/presetshop-backend:latest ./backend
docker build -t your-username/presetshop-frontend:latest ./frontend
docker push your-username/presetshop-backend:latest
docker push your-username/presetshop-frontend:latest
```

2. Update image names in `docker-compose.prod.yml`

3. Deploy on server:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## Features

- Multi-stage Docker builds for optimized image sizes
- Health checks for all services
- Automatic restart on failure
- Nginx reverse proxy for routing
- PostgreSQL database with persistent volumes
- Development mode with hot-reload support
- Production-ready configuration
- Non-root user security in containers

## Development

### Backend (.NET)

```bash
cd backend/src
dotnet restore
dotnet run
```

### Frontend (Next.js)

```bash
cd frontend
npm install
npm run dev
```

### Database

Access PostgreSQL:
```bash
docker-compose exec db psql -U appuser -d appdb
```

## API Endpoints

- Backend API: `http://localhost:8080/api`
- Frontend: `http://localhost:3000`
- Nginx (reverse proxy): `http://localhost`
  - `/` → Frontend
  - `/api/` → Backend

## Troubleshooting

### Services won't start

```bash
# Check logs
docker-compose logs -f

# Check specific service
docker-compose logs backend
```

### Database connection errors

Ensure the backend uses the correct connection string with `Host=db` (not `localhost`) when running in Docker.

### Port already in use

```bash
# Check what's using the port
netstat -ano | findstr :80
netstat -ano | findstr :3000
netstat -ano | findstr :8080

# Stop conflicting services or change ports in docker-compose.yml
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

[Add your license here]

## Support

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)
