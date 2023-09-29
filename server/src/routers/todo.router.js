const router = require('express').Router();
const { Todolist, Sequelize } = require('../../db/models');

// получаем все записи из списка дел
router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const response = await Todolist.findAll({
      where: { userId },
      order: [['id', 'ASC']],
      raw: true,
    });
    res.json(response);
  } catch (error) {
    console.error('Записей пользователя нет в базе!', error);
  }
});

// добавление записи в список дел
router.post('/', async (req, res) => {
  const userId = 1; // userId прописан как константа.
  const { todo, check } = req.body;
  try {
    const response = await Todolist.create({
      todo,
      check,
      userId,
    });

    return res.json(response);
  } catch (error) {
    console.error('Ошибка добавления записи в БД!', error);
  }
});

// Изменение значения статуса выполнения (поле check)
router.patch('/status/:id', async (req, res) => {
  const id = Number(req.params.id);

  try {
    const isCheck = await Todolist.update(
      { check: Sequelize.literal('NOT "check"') },
      { where: { id } },
      { raw: true }
    );
    return res.json(isCheck);
  } catch (error) {
    console.error('Ошибка изменения статуса в БД!', error);
  }
});

// Изменение формулировки записи о деле в БД
router.put('/', async (req, res) => {
  const { id, todo, check, userId } = req.body;

  try {
    const changeTodo = await Todolist.update(
      { todo, check },
      { where: { id, userId } },
      { raw: true }
    );
    return res.json(changeTodo);
  } catch (error) {
    console.error('Ошибка изменения формулировки в БД!', error);
  }
});

// удаление записи из списка дел
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  try {
    await Todolist.destroy({ where: { id } });
    res.sendStatus(200);
    res.end();
  } catch (error) {
    console.error('Ошибка добавления записи в БД!', error);
  }
});

module.exports = router;
