export const addTodo = (title, content, status, createdAt, updatedAt, id = null) => ({
  type: "ADD_TODO",
  title,
  content,
  status,
  createdAt,
  updatedAt,
  id,
});
export const updateTodo = (id, payload) => ({
  type: "UPDATE_TODO",
  id,
  payload,
});
export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id,
});
export const readTodo = () => ({
  type: "READ_TODO",
});
export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});
