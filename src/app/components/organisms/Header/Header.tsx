import React from "react";
import { Button, PageHeader } from "antd";
import useAuth from "../../../hooks/useAuth";

const Header: React.FC = () => {
  const auth: any = useAuth();

  const onClick = () => {
    auth.logOut();
  };

  return (
    <PageHeader
      className="site-page-header"
      title="Admin-panel"
      extra={[
        auth.loggedIn ? (
          <Button
            key="1"
            shape="round"
            type="primary"
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            onClick={onClick}
          >
            Log out
          </Button>
        ) : null,
      ]}
    />
  );
};

export default Header;
