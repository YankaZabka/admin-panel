import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const AdminPage: React.FC = () => {
  return (
    <Content className="site-layout">
      <Outlet />
    </Content>
  );
};

export default AdminPage;
