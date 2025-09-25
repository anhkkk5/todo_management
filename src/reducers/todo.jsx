// CRUD logic kiểm tra:

// - ADD_TODO: Thêm todo mới vào mảng state, tạo id bằng Date.now(), nhận title, content, status, createdAt, updatedAt từ action. ĐÚNG.
// - UPDATE_TODO: Tìm todo theo id, cập nhật các trường từ action.payload. ĐÚNG.
// - DELETE_TODO: Xoá todo theo id. ĐÚNG.
// - READ_TODO: Trả về state hiện tại (thường không cần action này, vì redux trả về state mặc định nếu không có action phù hợp). KHÔNG SAI nhưng có thể bỏ qua.
// - default: Trả về state hiện tại. ĐÚNG.

const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      // Thêm todo mới - sử dụng ID từ action nếu có, nếu không tạo ID mới
      return [
        ...state,
        {
          id: action.id !== null ? action.id : Date.now(),
          title: action.title,
          content: action.content,
          status: action.status,
          createdAt: action.createdAt,
          updatedAt: action.updatedAt,
        },
      ];
    case "UPDATE_TODO":
      // Cập nhật todo theo id - xử lý cả ID âm và dương
      return state.map((todo) => {
        // Đảm bảo so sánh chính xác cả ID âm và dương
        const todoId = parseInt(todo.id);
        const actionId = parseInt(action.id);
        return todoId === actionId ? { ...todo, ...action.payload } : todo;
      });
    case "DELETE_TODO":
      // Xóa todo theo id - xử lý cả ID âm và dương
      return state.filter((todo) => {
        const todoId = parseInt(todo.id);
        const actionId = parseInt(action.id);
        return todoId !== actionId;
      });
    case "READ_TODO":
      // Không thay đổi state, chỉ trả về state hiện tại
      return state;
    case "TOGGLE_TODO":
      // Toggle trạng thái todo - xử lý cả ID âm và dương
      return state.map((todo) => {
        const todoId = parseInt(todo.id);
        const actionId = parseInt(action.id);
        if (todoId === actionId) {
          return {
            ...todo,
            status: !todo.status,
            updatedAt: new Date().toISOString(),
          };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoListReducer;
