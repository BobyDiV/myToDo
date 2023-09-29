// TODO: функция возвращает список дел Юзера (userId) из БД
export const fetchGetTodoTasks = async (userId: number) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const response = await fetch(`todo/${userId}`, { credentials: 'include' });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(new Error('400'));
  }
};




