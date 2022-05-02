import React from "react";
import { Button } from "antd";
import classes from "./HeaderButton.module.css";

interface Props {
  title: string;
  icon: JSX.Element;
  onClick(): void;
}

const HeaderButton: React.FC<Props> = ({ title, onClick, icon }) => {
  return (
    <Button
      shape="round"
      type="primary"
      className={classes.button}
      onClick={onClick}
    >
      {icon}
      {title}
    </Button>
  );
};

export default HeaderButton;
