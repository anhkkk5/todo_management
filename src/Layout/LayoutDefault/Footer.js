// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Nguyễn Tuấn Anh. All rights
          reserved.
        </p>
        <p>📞 0356 271 005 &nbsp;|&nbsp; 📧 anh271020k5@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
