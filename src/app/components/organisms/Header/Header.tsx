import React from "react";
import {
  HomeOutlined,
  PictureOutlined,
  CalendarOutlined,
  LoginOutlined,
} from "@ant-design/icons/lib";
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

  const onDateRange = () => {
    navigate("dateRange");
  };

  return (
    <PageHeader
      className="site-page-header"
      title="Admin-panel"
      extra={
        auth.loggedIn
          ? [
              <HeaderButton
                title="Home"
                key="1"
                onClick={onHome}
                icon={<HomeOutlined />}
              />,
              <HeaderButton
                title="Albums"
                key="2"
                onClick={onAlbums}
                icon={<PictureOutlined />}
              />,
              <HeaderButton
                title="DateRange"
                key="3"
                onClick={onDateRange}
                icon={<CalendarOutlined />}
              />,
              <HeaderButton
                title="Log Out"
                key="4"
                onClick={onLogout}
                icon={<LoginOutlined />}
              />,
            ]
          : null
      }
    />
  );
};

export default Header;
