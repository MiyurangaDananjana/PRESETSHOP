# PresetShop Deployment Guide

This guide covers deploying the PresetShop application to a Linux server using Docker.

## Prerequisites

- Linux server with Docker and Docker Compose installed
- Docker Hub account (for production deployment)
- SSH access to your server
- Domain name (optional, for production)

## Project Structure

```
.
├── backend/              # .NET 8.0 API
├── frontend/             # Next.js 15 application
├── nginx/                # Nginx reverse proxy config
├── docker-compose.yml    # Local development
├── docker-compose.dev.yml    # Development with hot-reload
├── docker-compose.prod.yml   # Production deployment
└── .env                  # Environment variables
```

## Local Development

### 1. Clone and Setup

```bash
git clone <your-repo>
cd PresetShop_Project
cp .env.example .env
```

### 2. Run with Docker Compose

For basic local development:
```bash
docker-compose up --build
```

For development with hot-reload:
```bash
docker-compose -f docker-compose.dev.yml up --build
```

### 3. Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:8080
- Full Application (via Nginx): http://localhost
- Database: localhost:5432

### 4. Stop Services

```bash
docker-compose down
```

To remove volumes as well:
```bash
docker-compose down -v
```

## Production Deployment

### Step 1: Prepare Your Environment

1. **Update Environment Variables**

Edit `.env` file on your server:
```bash
POSTGRES_USER=appuser
POSTGRES_PASSWORD=<strong-random-password>
POSTGRES_DB=appdb
POSTGRES_HOST=db
POSTGRES_PORT=5432

ASPNETCORE_ENVIRONMENT=Production
ASPNETCORE_URLS=http://+:8080
```

**IMPORTANT**: Change the database password to a strong, unique password.

### Step 2: Build and Push Docker Images

On your local machine or CI/CD pipeline:

```bash
# Login to Docker Hub
docker login

# Build backend image
cd backend
docker build -t your-dockerhub-username/presetshop-backend:latest .
docker push your-dockerhub-username/presetshop-backend:latest

# Build frontend image
cd ../frontend
docker build -t your-dockerhub-username/presetshop-frontend:latest .
docker push your-dockerhub-username/presetshop-frontend:latest
```

### Step 3: Update Production Compose File

Edit `docker-compose.prod.yml` and replace the image names:

```yaml
services:
  backend:
    image: your-dockerhub-username/presetshop-backend:latest
  frontend:
    image: your-dockerhub-username/presetshop-frontend:latest
```

### Step 4: Deploy to Linux Server

1. **Copy files to server:**

```bash
# From your local machine
scp -r . user@your-server:/opt/presetshop/
```

Or use git:
```bash
# On the server
cd /opt/presetshop
git pull origin main
```

2. **Deploy the application:**

```bash
# On the server
cd /opt/presetshop

# Pull latest images
docker-compose -f docker-compose.prod.yml pull

# Start services
docker-compose -f docker-compose.prod.yml up -d

# Check status
docker-compose -f docker-compose.prod.yml ps

# View logs
docker-compose -f docker-compose.prod.yml logs -f
```

### Step 5: Verify Deployment

Check service health:
```bash
# Check all services are running
docker-compose -f docker-compose.prod.yml ps

# Check individual service logs
docker-compose -f docker-compose.prod.yml logs backend
docker-compose -f docker-compose.prod.yml logs frontend
docker-compose -f docker-compose.prod.yml logs db
docker-compose -f docker-compose.prod.yml logs nginx

# Test the application
curl http://localhost/health
```

## Configuration Details

### Docker Compose Files

- **docker-compose.yml**: Basic local development with exposed ports
- **docker-compose.dev.yml**: Development with volume mounts for hot-reload
- **docker-compose.prod.yml**: Production with health checks, no exposed internal ports

### Security Features

1. **Non-root user**: Frontend runs as non-root user (nextjs)
2. **No internal port exposure**: Only nginx port 80/443 exposed in production
3. **Health checks**: All services have health check configurations
4. **Restart policies**: Services restart automatically on failure

### Networking

- All services communicate through Docker internal network
- Backend accessible at `http://backend:8080`
- Frontend accessible at `http://frontend:3000`
- Database accessible at `db:5432`
- Only nginx exposes ports to host machine

## Troubleshooting

### Container won't start

```bash
# Check logs
docker-compose -f docker-compose.prod.yml logs <service-name>

# Check container status
docker ps -a

# Restart specific service
docker-compose -f docker-compose.prod.yml restart <service-name>
```

### Database connection issues

```bash
# Verify database is running
docker-compose -f docker-compose.prod.yml exec db pg_isready -U appuser

# Check database logs
docker-compose -f docker-compose.prod.yml logs db

# Connect to database
docker-compose -f docker-compose.prod.yml exec db psql -U appuser -d appdb
```

### Frontend not building

If you get errors about missing `.next/standalone`, ensure `output: 'standalone'` is set in `next.config.js`.

### Health checks failing

Health checks require curl:
- Backend Dockerfile: Installs curl via apt-get
- Frontend Dockerfile: Installs curl via apk

## Maintenance

### Update Application

```bash
# Pull latest code
git pull origin main

# Rebuild and restart
docker-compose -f docker-compose.prod.yml up -d --build

# Or pull latest images
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml up -d
```

### Database Backup

```bash
# Create backup
docker-compose -f docker-compose.prod.yml exec db pg_dump -U appuser appdb > backup.sql

# Restore backup
cat backup.sql | docker-compose -f docker-compose.prod.yml exec -T db psql -U appuser appdb
```

### View Logs

```bash
# All services
docker-compose -f docker-compose.prod.yml logs -f

# Specific service
docker-compose -f docker-compose.prod.yml logs -f backend

# Last 100 lines
docker-compose -f docker-compose.prod.yml logs --tail=100
```

### Clean Up

```bash
# Stop and remove containers
docker-compose -f docker-compose.prod.yml down

# Remove volumes (WARNING: This deletes data)
docker-compose -f docker-compose.prod.yml down -v

# Remove unused images
docker image prune -a
```

## SSL/HTTPS Configuration (Optional)

To add SSL certificates:

1. Create nginx SSL directory:
```bash
mkdir -p nginx/ssl
```

2. Copy your SSL certificates to `nginx/ssl/`

3. Update `nginx/nginx.conf` to include SSL configuration

4. Uncomment SSL volume mount in `docker-compose.prod.yml`

## Performance Optimization

- Frontend uses standalone Next.js build (smaller image size)
- Multi-stage builds reduce final image size
- Health checks ensure service availability
- Restart policies handle failures automatically

## Support

For issues or questions:
1. Check logs: `docker-compose logs -f`
2. Verify environment variables in `.env`
3. Ensure all images are built and pushed correctly
4. Check network connectivity between containers
