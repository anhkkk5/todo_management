// Import file SCSS để dùng style cho layout mặc định
import "./layoutDefault.scss";

function Header() {
  return (
    <div className="Layout-default">
      <header className="layout-default__header">
        {/* Menu điều hướng chính (hiện đang để trống, có thể thêm sau) */}
        <nav className="layout-default__nav"></nav>

        {/* Khu vực tài khoản – hiển thị tuỳ theo người dùng đã đăng nhập hay chưa */}
        <div className="layout-default__account"></div>
      </header>
    </div>
  );
}

export default Header;
