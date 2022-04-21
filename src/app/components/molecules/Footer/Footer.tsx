import React from "react";
import { Layout, Typography } from "antd";

const { Footer: AntDFooter } = Layout;
const { Text, Link } = Typography;

const Footer: React.FC = () => {
  return (
    <AntDFooter style={{ textAlign: "center" }}>
      <Text strong>
        Admin Panel ©2022 Created by{" "}
        <Link href="https://github.com/YankaZabka">YankaZabka</Link>
      </Text>
    </AntDFooter>
  );
};

export default Footer;
