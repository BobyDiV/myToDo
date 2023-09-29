# Как это работает?

## Загрузка

<img src='./client/src/shared/image/image_0.png' alt='img0' />
<img src='./client/src/shared/image/image_1.png' alt='img1' />

## Добавляем пункты в список дел

<img src='./client/src/shared/image/image_2.png' alt='img2' />
<img src='./client/src/shared/image/image_3.png' alt='img3' />

## Для изменения статуса кликаем ✅

<img src='./client/src/shared/image/image_4.png' alt='img4' />
<img src='./client/src/shared/image/image_5.png' alt='img5' />

## Для внесения изменений кликаем ✏️

<img src='./client/src/shared/image/image_6.png' alt='img6' />
<img src='./client/src/shared/image/image_7.png' alt='img7' />

## Для удаление записи из списка кликаем ❌

<img src='./client/src/shared/image/image_8.png' alt='img8' />
<img src='./client/src/shared/image/image_9.png' alt='img9' />

## И так далее... добавляем ... отмечаем выполение ...

<img src='./client/src/shared/image/image_10.png' alt='img10' />

# Чтобы запустить приложение на своем компьютере

## 1. Скачайте приложение из репозитория, используя команду

```
git clone <SSH Key>
```

## 2. Подготовительная работа с серверной частью приложения

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

## 3. Подготовительная работа с клиентской частью приложения

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
