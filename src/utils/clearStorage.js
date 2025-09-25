// Utility để clear localStorage và reset ứng dụng
export const clearAppStorage = () => {
  try {
    // Clear localStorage
    localStorage.removeItem('todo_app_state');
    console.log('✅ Đã clear localStorage');
    
    // Reload trang để reset state
    window.location.reload();
  } catch (error) {
    console.error('❌ Lỗi khi clear localStorage:', error);
  }
};

// Debug function để xem dữ liệu hiện tại
export const debugStorage = () => {
  try {
    const data = localStorage.getItem('todo_app_state');
    console.log('📊 Dữ liệu trong localStorage:', data ? JSON.parse(data) : 'Không có dữ liệu');
  } catch (error) {
    console.error('❌ Lỗi khi đọc localStorage:', error);
  }
};