import { get } from "../utils/request";
import { del, edit, post } from "../utils/request";

export const getTodoList = async () => {
  const result = await get("todos");
  return result;
};

export const getTodoDetail = async (id) => {
  const result = await get(`todos/${id}`);
  return result;
};

export const deleteTodo = async (id) => {
  const result = await del(`todos/${id}`);
  return result;
};

export const editTodo = async (id, options) => {
  const result = await edit(`todos/${id}`, options);
  return result;
};

export const addTodo = async (options) => {
  const result = await post("todos", options);
  return result;
};
