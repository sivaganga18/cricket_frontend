import React from "react";
import { Input, Button, Card, Typography } from "antd";
import "./Login.css";

const { Title } = Typography;

const LoginLayout = () => {
  return (
    <div className="login-container">
      <Card className="login-card" bordered={false}>
        <Title
          level={3}
          className="login-title"
          style={{ textAlign: "center" }}
        >
          Welcome
        </Title>
        <Input
          className="login-input"
          style={{ width: 450, padding: 16, marginBottom: 16 }}
          placeholder="Username"
        />
        <br />
        <Input.Password
          className="login-input"
          style={{ width: 450, padding: 16, marginBottom: 16 }}
          placeholder="Password"
        />
        <br />
        <Button style={{ width: 450, padding: 16, height: 50 }} type="primary">
          Login
        </Button>
      </Card>
    </div>
  );
};

export default LoginLayout;
