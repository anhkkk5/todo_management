import React, { useState } from "react";

function TodoItem({ todo, onUpdate, onDelete, onToggle }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title || todo.content || "");

  const handleToggleTodo = () => {
    // Chỉ gọi onToggle để component cha xử lý việc cập nhật state
    if (onToggle) onToggle(todo.id);
  };

  const handleDeleteTodo = () => {
    if (onDelete) onDelete(todo.id);
  };

  const handleEditStart = () => {
    setIsEditing(true);
    setEditText(todo.title || todo.content || "");
  };

  const handleEditSave = () => {
    if (editText.trim()) {
      const updatedTodo = { 
        ...todo, 
        title: editText.trim(),
        content: editText.trim(),
        updatedAt: new Date().toISOString()
      };
      if (onUpdate) onUpdate(updatedTodo);
      setIsEditing(false);
    }
  };

  const handleEditCancel = () => {
    setEditText(todo.title || todo.content || "");
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEditSave();
    } else if (e.key === "Escape") {
      handleEditCancel();
    }
  };

  return (
    <div className={`todo-item ${todo.status ? "completed" : ""}`}>
      <div className="todo-item__content">
        <input
          type="checkbox"
          checked={todo.status}
          onChange={handleToggleTodo}
          className="todo-checkbox"
        />
        
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyPress}
            onBlur={handleEditSave}
            className="todo-edit-input"
            autoFocus
          />
        ) : (
          <span 
            className={`todo-text ${todo.status ? "completed" : ""}`}
            onDoubleClick={handleEditStart}
            title="Double click to edit"
          >
            {todo.title || todo.content || "Untitled"}
          </span>
        )}
      </div>
      
      <div className="todo-item__actions">
        {!isEditing && (
          <>
            <button 
              className="todo-btn todo-btn--edit" 
              onClick={handleEditStart}
              title="Edit"
            >
              ✏️
            </button>
            <button 
              className="todo-btn todo-btn--delete" 
              onClick={handleDeleteTodo}
              title="Delete"
            >
              🗑️
            </button>
          </>
        )}
        {isEditing && (
          <>
            <button 
              className="todo-btn todo-btn--save" 
              onClick={handleEditSave}
              title="Save"
            >
              ✅
            </button>
            <button 
              className="todo-btn todo-btn--cancel" 
              onClick={handleEditCancel}
              title="Cancel"
            >
              ❌
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
