# React Essentials

[Канал автора видео уроков Makhabat Abdisattarova](https://www.youtube.com/@developerkg).

## Часть 1

[![Основы React: Создание простого приложения с использованием MUI и react-router-dom](https://img.youtube.com/vi/XPFaB0W7L60/0.jpg)](https://youtu.be/XPFaB0W7L60)

## Часть 2

[![Все про Context. Создаем React.createContext() для удобного управления состоянием без Redux!](https://img.youtube.com/vi/RqQySHA-xSY/0.jpg)](https://youtu.be/RqQySHA-xSY)

[Оригинальный код из видео уроков](https://github.com/makhabatabdi/React.createContext).

## Создание приложения:

```bash
npx create-react-app .
```

## Установка пакетов:

```bash
npm i @mui/material @emotion/react @emotion/styled
npm i react-router-dom
npm i @mui/icons-material
npm i axios
npm i -g json-server
```

## Запуск приложения:

```bash
npm start
```

## Запуск json-server:

```bash
json-server --watch db.json --port 8000
```

## Источники:

[React.dev](https://react.dev/)

[React router DOM](https://www.npmjs.com/package/react-router-dom?activeTab=readme)

[MUI getting started](https://mui.com/material-ui/getting-started/)

[MUI icons material](https://www.npmjs.com/package/@mui/icons-material)

[MUI react app bar](https://mui.com/material-ui/react-app-bar/)

[MUI react card](https://mui.com/material-ui/react-card/)

[Scaling up with reducer and context](https://react.dev/learn/scaling-up-with-reducer-and-context)

[Context (legacy)](https://legacy.reactjs.org/docs/context.html)

## Работа с git

После того, как репозиторий, например “your_repository_name”, создан на сайте github или gitlab:

1. **Инициализация Git-репозитория**
   ```bash
   cd path/to/your_repository_name
   git init
   ```
2. **Добавление всех файлов**
   ```bash
   git add .
   ```
3. **Создание первого коммита**
   ```bash
   git commit -m "Initial commit"
   ```
4. **Связывание с удалённым репозиторием**
   ```bash
   git remote add origin https://github.com/yourusername/your_repository_name.git
   ```
5. **Отправка кода в удалённый репозиторий**
   ```bash
   git push -u origin master
   ```
