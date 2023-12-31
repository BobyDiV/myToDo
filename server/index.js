require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const sessions = require('./src/middlewares/sessions');
const cors = require('./src/middlewares/cors');

const ToDoRouter = require('./src/routers/todo.router');

const app = express();

const PORT = process.env.PORT ?? 6622;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);
app.use(sessions);

app.use('/todo', ToDoRouter);

app.use('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
