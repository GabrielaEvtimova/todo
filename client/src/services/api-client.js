import { apiServerUrl } from "../../../server/config";

export const getTodos = async () => {
  const resp = await fetch(`${apiServerUrl}/todos`);
  const data = await resp.json();

  return data.todos;
};


