import React from "react";
import { Layout, Menu, Button } from "antd";
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const SideMenu = ({ handleLogout, selectedMenu, handleMenuSelect }) => {
  return (
    <Sider
      width={200}
      theme="light"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Menu
        mode="inline"
        selectedKeys={[selectedMenu]}
        onClick={handleMenuSelect}
      >
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="auction" icon={<ShoppingCartOutlined />}>
          Auction
        </Menu.Item>
        <Menu.Item key="teams" icon={<TeamOutlined />}>
          Teams
        </Menu.Item>
        <Menu.Item key="players" icon={<UserOutlined />}>
          Players
        </Menu.Item>
      </Menu>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          marginTop: "auto",
          padding: "16px",
        }}
      >
        <Button
          type="primary"
          icon={<LogoutOutlined />}
          block
          onClick={handleLogout}
          style={{ width: 160 }}
        >
          Logout
        </Button>
      </div>
    </Sider>
  );
};

export default SideMenu;
