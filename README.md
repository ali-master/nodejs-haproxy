# nodejs-haproxy
Simple High availability load balancer in NodeJS with HaProxy 

### Requirements:
- Docker and Docker-compose
- [K6](https://k6.io)(Open source load testing tool and SaaS for engineering teams)

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

### Run API Load testing:
Make sure you installed the [K6](https://k6.io/docs/getting-started/installation/) before.
```bash
k6 run load-test.js
```
