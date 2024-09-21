import React, { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1100);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className={`admin-main ${isMobile ? "mobile" : ""}`}>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
