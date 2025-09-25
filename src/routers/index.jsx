// Import các components cần thiết cho routing
import React from "react";
import LayoutDefault from "../Layout/LayoutDefault";
import Home from "../pages/Home";

// Cấu hình các routes cho ứng dụng
export const routes = [
  {
    path: "/", // Route gốc
    element: <LayoutDefault />, // Layout chung cho toàn bộ ứng dụng
    children: [
      // Các routes con
      {
        path: "/", // Trang chủ
        element: <Home />, // Component trang chủ
      },
    ],
  },
];

// Giữ nguyên comment mẫu routes của bạn phía dưới
