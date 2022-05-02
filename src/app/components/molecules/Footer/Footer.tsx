import React from "react";
import { GithubOutlined } from "@ant-design/icons/lib";
import { Layout, Typography } from "antd";
import classes from "./Footer.module.css";

const { Footer: AntDFooter } = Layout;
const { Text, Link } = Typography;

const Footer: React.FC = () => {
  return (
    <AntDFooter className={classes.footer}>
      <Text strong>
        Admin Panel ©2022 Created by{" "}
        <Link href="https://github.com/YankaZabka">
          YankaZabka
          <GithubOutlined className={classes.iconMargin} />
        </Link>
      </Text>
    </AntDFooter>
  );
};

export default Footer;
