import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Cards from "./Cards";

const { Content } = Layout;

export const AdminContent = () => {
  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
        borderRadius: "8px",
      }}
    >
      <Cards />
      <Outlet />
    </Content>
  );
};
