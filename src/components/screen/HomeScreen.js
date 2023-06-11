import React, { useState } from "react";
import { Layout } from "antd";
import SideMenu from "../common/Sidemenu";
import DashbordScreen from "./DashbordScreen";
import TeamScreen from "./TeamScreen";

const { Content, Header } = Layout;

export default function HomeScreen() {
  const [selectedMenu, setSelectedMenu] = useState("dashboard");

  const handleMenuSelect = (menuItem) => {
    setSelectedMenu(menuItem.key);
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "dashboard":
        return <DashbordScreen />;
      case "auction":
        return <div>Auction Component</div>;
      case "teams":
        return <TeamScreen />;
      case "players":
        return <div>Players Component</div>;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Header className="header">
        <div className="logo">Your Logo</div>
      </Header>
      <Layout>
        <SideMenu
          handleMenuSelect={handleMenuSelect}
          selectedMenu={selectedMenu}
        />

        <Content style={{ padding: "20px" }}>{renderContent()}</Content>
      </Layout>
    </Layout>
  );
}
