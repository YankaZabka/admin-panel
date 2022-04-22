import React from "react";
import { PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import HeaderButton from "../../atoms/HeaderButton";

const Header: React.FC = () => {
  const auth: any = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    auth.logOut();
  };

  const onHome = () => {
    navigate("/");
  };

  const onAlbums = () => {
    navigate("albums");
  };

  return (
    <PageHeader
      className="site-page-header"
      title="Admin-panel"
      extra={
        auth.loggedIn
          ? [
              <HeaderButton title="Home" key="1" onClick={onHome} />,
              <HeaderButton title="Albums" key="2" onClick={onAlbums} />,
              <HeaderButton title="Log Out" key="3" onClick={onLogout} />,
            ]
          : null
      }
    />
  );
};

export default Header;
