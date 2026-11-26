# КТ 3. CI/CD для приложения на Node.js

Приложение отвечает на `GET /` строкой `KT3 App`, а на `GET /health` — объектом `{"status":"ok"}`. Порт по умолчанию — 3000.

## Локальный запуск

```sh
npm ci
npm run lint
npm test
npm start
```

Для интеграционного теста задайте `PGHOST`, `PGPORT`, `PGDATABASE`, `PGUSER` и `PGPASSWORD`. Jest проверяет оба HTTP-маршрута и выполняет запрос `SELECT 1` к PostgreSQL.

## Контейнер

```sh
docker build -t kt3-app:local .
docker run --rm -p 127.0.0.1:3000:3000 kt3-app:local
```

## GitHub Actions

Изменения проходят через pull request из `feature/kt3` в `develop`, затем из `develop` в `main`. Для обеих веток CI запускает ESLint и Jest на Node.js 20. Тесты используют сервис PostgreSQL 16. После успешных проверок push в `main` публикует образ `ghcr.io/aguaguagu919/devops-kt3` с тегами `latest` и полным SHA коммита.
