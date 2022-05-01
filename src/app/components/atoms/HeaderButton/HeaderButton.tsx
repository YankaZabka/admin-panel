import React from "react";
import { Button } from "antd";
import classes from "./HeaderButton.module.css";

interface Props {
  title: string;
  onClick(): void;
}

const HeaderButton: React.FC<Props> = ({ title, onClick }) => {
  return (
    <Button
      shape="round"
      type="primary"
      className={classes.button}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default HeaderButton;
