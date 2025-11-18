// import { Outlet } from "react-router-dom";
import { AdminHeader } from "./components/Header";
import { AdminSider } from "./components/Sider";
import React from "react";
import { AdminFooter } from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <main className="flex">
      <AdminSider collapsed={collapsed} />
      <div className="w-full">
        <AdminHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Outlet />
        <AdminFooter />
        <div></div>
      </div>
      <div></div>
    </main>
  );
}
