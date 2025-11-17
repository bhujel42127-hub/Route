import { Layout, Menu } from "antd";

import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

export const AdminSider = ({ collapsed }: { collapsed: boolean }) => {
  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Users",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "Videos",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "Uploads",
    },
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={200}
      style={{ background: "blue", minHeight: "100vh" }}
      //   className="background-green"
    >
      <div className="demo-logo-vertical" />
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderInlineEnd: 0 }}
        items={items}
        theme="dark"
      />
    </Sider>
  );
};
