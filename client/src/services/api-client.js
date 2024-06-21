import { apiServerUrl } from "../../../server/config.js";

// Get all Todos from MongoDB
export const getTodos = async () => {
  const resp = await fetch(`${apiServerUrl}/todos`);
  const data = await resp.json();

  return data.todos;
};

// Add Todo
export const addTodo = async (todoTitle, id, label, dueDate, description) => {
  const todo = {
    todoTitle: todoTitle,
    id: id,
    label: label,
    dueDate: dueDate,
    description: description,
    completed: false,
  };
  const req = await fetch(`${apiServerUrl}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  const data = await req.json();
  return data.todo;
};

// Delete Todo
export const fetchDeleteTodo = async (id) => {
  await fetch(`${apiServerUrl}/todos/${id}`, {
    method: "DELETE",
  });
};
