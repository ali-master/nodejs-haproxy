# nodejs-haproxy
Simple High availability load balancer in NodeJS with HaProxy 

### Requirements:
- Docker and Docker-compose
- K6(for load testing)

### Run
1. The first time you gonna run the Application:
```bash
docker-compose up --build -d
```

2. The second time:
```bash
docker-compose up -d
```

Application URI: `http://localhost`
HaProxy stats URI: `http://localhost:81`

### Shutting down the running containers
```bash
docker-compose down
```

### Logs
```bash
docker-compose logs
```
