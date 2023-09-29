# Как это работает?

## Загрузка

<img src='./client/src/shared/image/image_0.png' alt='img0' />
<img src='./client/src/shared/image/image_1.png' alt='img1' />

## Что бы запустить приложение на своем компьютере

# 1. Скачайте приложение из репозитория, используя команду

```
git clone <SSH Key>
```

# 2. Подготовительная работа с серверной частью приложения

1. Перейдите в папку server
2. Установите node_modules в папке server

```
cd server
npm install
```

3. внесите необходимую информацию в файл '.env' по шаблону из файла '.env.example'
4. Создайте базу данных
5. Накатите миграции и сиды

```
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

6. Запустите сервер

```
npm run dev
```

# 3. Подготовительная работа с клиентской частью приложения

1. Установите node_modules в папке client

```
cd ../
cd client
npm install
```

2. Запустите приложение

```
npm start
```
