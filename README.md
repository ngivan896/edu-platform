# Edu Platform

## Docker 部署说明

### 前置要求
- Docker
- Docker Compose

### 快速开始

1. 构建并启动容器：
```bash
docker-compose up -d
```

2. 查看容器状态：
```bash
docker-compose ps
```

3. 查看日志：
```bash
docker-compose logs -f
```

4. 停止服务：
```bash
docker-compose down
```

### 访问服务
- 本地访问：http://localhost
- 局域网访问：http://<your-ip-address>

### 维护命令

- 重新构建镜像：
```bash
docker-compose build
```

- 重启服务：
```bash
docker-compose restart
```

- 查看容器资源使用：
```bash
docker stats
```

### 注意事项
1. 确保 80 端口未被占用
2. 首次启动可能需要等待几分钟
3. 如果遇到问题，请查看日志：`docker-compose logs -f` 