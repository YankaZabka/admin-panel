import React from "react";
import { Button } from "antd";

interface Props {
  title: string;
  onClick(): void;
}

const HeaderButton: React.FC<Props> = ({ title, onClick }) => {
  return (
    <Button
      shape="round"
      type="primary"
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default HeaderButton;
