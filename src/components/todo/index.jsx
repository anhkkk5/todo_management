import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, deleteTodo, toggleTodo } from "../../actions/todo.jsx";
import TodoItem from "./todoItem";
import "./todo.scss";

// Mock data cho demo - chỉ sử dụng khi chưa có dữ liệu trong Redux store
// Mock data để test - sử dụng ID âm để tránh xung đột với ID dương của todo mới
const mockTodos = [
  {
    id: -1,
    title: "This is an example of task #1",
    content: "Example task content",
    status: true,
    createdAt: new Date(Date.now() - 5000).toISOString(),
    updatedAt: new Date(Date.now() - 5000).toISOString(),
  },
  {
    id: -2,
    title: "This is an example of task #2",
    content: "Example task content",
    status: false,
    createdAt: new Date(Date.now() - 4000).toISOString(),
    updatedAt: new Date(Date.now() - 4000).toISOString(),
  },
  {
    id: -3,
    title: "This is an example of task #3",
    content: "Example task content",
    status: true,
    createdAt: new Date(Date.now() - 3000).toISOString(),
    updatedAt: new Date(Date.now() - 3000).toISOString(),
  },
  {
    id: -4,
    title: "This is an example of task #4",
    content: "Example task content",
    status: false,
    createdAt: new Date(Date.now() - 2000).toISOString(),
    updatedAt: new Date(Date.now() - 2000).toISOString(),
  },
  {
    id: -5,
    title: "This is an example of task #5",
    content: "Example task content",
    status: false,
    createdAt: new Date(Date.now() - 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1000).toISOString(),
  },
];

// Component hiển thị danh sách todo
function Todo() {
  const dispatch = useDispatch();
  // Lấy todos từ Redux store thay vì local state
  const todos = useSelector(state => state.todoListReducer);
  const [newTodo, setNewTodo] = useState("");
  const [isInitialized, setIsInitialized] = useState(false);

  // Khởi tạo mock data nếu Redux store trống và chưa có dữ liệu trong localStorage
  useEffect(() => {
    // Chỉ chạy một lần khi component mount
    if (!isInitialized) {
      const hasPersistedData = localStorage.getItem('todo_app_state');
      
      if (todos.length === 0 && !hasPersistedData) {
        console.log("Initializing mock data...");
        // Sử dụng setTimeout để tránh dispatch trong quá trình render
        const timer = setTimeout(() => {
          mockTodos.forEach(todo => {
            dispatch(addTodo(todo.title, todo.content, todo.status, todo.createdAt, todo.updatedAt, todo.id));
          });
        }, 0);
        
        setIsInitialized(true);
        return () => clearTimeout(timer);
      } else {
        console.log("Skipping mock data - data already exists");
        setIsInitialized(true);
      }
    }
  }, [dispatch, isInitialized]); // Chỉ phụ thuộc vào dispatch và isInitialized

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      const currentTime = new Date().toISOString();
      dispatch(addTodo(newTodo, newTodo, false, currentTime, currentTime));
      setNewTodo("");
    }
  };

  // Hàm xử lý cập nhật todo - sử dụng Redux action
  const handleUpdateTodo = (id, updatedData) => {
    const payload = { ...updatedData, updatedAt: new Date().toISOString() };
    dispatch(updateTodo(id, payload));
  };

  // Hàm xử lý xóa todo - sử dụng Redux action
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  // Hàm xử lý toggle trạng thái todo - sử dụng Redux action
  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div className="todo-app">
      <div className="todo-container">
        <h1 className="todo-title">Your To Do</h1>
        
        {/* Form thêm todo mới */}
        <form onSubmit={handleAddTodo} className="todo-form">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new task"
            className="todo-input"
          />
          <button type="submit" className="todo-add-btn">
            +
          </button>
        </form>

        {/* Danh sách todo */}
        <div className="todo-list">
          {todos.length === 0 ? (
            <div className="empty-state">
              <h3>Your remaining todos : 0</h3>
              <p>"Doing what you love is the cornerstone of having abundance in your life." - Wayne Dyer</p>
            </div>
          ) : (
            todos.map((item) => (
              <TodoItem 
                key={item.id} 
                todo={item} 
                onUpdate={handleUpdateTodo}
                onDelete={handleDeleteTodo}
                onToggle={handleToggleTodo}
              />
            ))
          )}
        </div>
        
        {/* Todo count */}
        {todos.length > 0 && (
          <div className="todo-count">
            Your remaining todos : {todos.filter(todo => !todo.status).length}
          </div>
        )}
        
        {/* Quote */}
        <div className="todo-quote">
          <p>"Doing what you love is the cornerstone of having abundance in your life." - Wayne Dyer</p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
