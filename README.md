# Приложение для КТ 3

    GET / возвращает KT3 App. GET /health возвращает JSON со статусом ok. Запуск без контейнера: `npm ci`, затем `npm start`. Порт по умолчанию 3000. Сборка контейнера: `docker build -t kt3-app:local .`.


    Используется Node.js 20. Для локальной проверки выполните `npm ci`, `npm run lint`, `npm test`. Для интеграционного теста задайте PGHOST, PGPORT, PGDATABASE, PGUSER и PGPASSWORD. Без PGHOST запускаются только тесты HTTP-обработчиков.

    Workflow проверяет push и pull_request для main и develop. Job test выполняет SQL-запрос к PostgreSQL. После успешных проверок push в main публикует ghcr.io/<владелец>/<репозиторий> с тегами latest и полным SHA коммита.

    Для размещения на GitHub нужно создать одноимённый репозиторий, отправить main и develop, включить для main обязательные проверки lint и test и требование pull request. В локальной копии Git правила платформы и публикация Packages не применяются.
