import { Button, Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import type { Collapsed } from "../Props";

const { Header } = Layout;

export const AdminHeader = ({ collapsed, setCollapsed }: Collapsed) => {
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      label: "Logout",
      href: "Route/login",
      onClick: () => {
        localStorage.removeItem("user");
      },
    },
  ];

  function onClick(e: any) {
    const item = items.find((item) => item.key === e.key);
    if (item?.href) navigate(item.href);
  }

  return (
    <Header
      className="flex items-center bg-white fixed w-full top-0"
      style={{ padding: 0 }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{ fontSize: 16, color: "#ffffff" }}
      />

      <Menu
        mode="horizontal"
        theme="dark"
        items={items}
        onClick={onClick}
        className="border-none flex gap-6"
      />
    </Header>
  );
};
