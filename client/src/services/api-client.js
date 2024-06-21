// import { apiServerUrl } from "../../../server/config.js";
const apiServerUrl = import.meta.env.VITE_API_SERVER_URL;

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

// Edit Todo
export const fetchEditTodo = async (
  _id,
  completed,
  todoTitle,
  id,
  dueDate,
  label,
  description
) => {
  const todo = {
    todoTitle: todoTitle,
    id: id,
    label: label,
    dueDate: dueDate,
    description: description,
    completed: completed,
  };
  const req = await fetch(`${apiServerUrl}/todos/${_id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  const data = await req.json();
  return data.todo;
};

export const fetchCompleteTodo = async (id, completed) => {
  const todo = {
    completed: completed,
  };

  const req = await fetch(`${apiServerUrl}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  const data = await req.json();
  return data.todo;
};
