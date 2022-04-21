import React from "react";
import { Card, Divider, Typography } from "antd";

const { Text } = Typography;

const UserInfo: React.FC = () => {
  return (
    <Card style={{ width: 300, marginBottom: "20px", borderRadius: "20px" }}>
      <Divider orientation="left">
        <Text strong>Name</Text>
      </Divider>
      <Text italic>Leanne Graham</Text>
      <Divider orientation="left">
        <Text strong>Username</Text>
      </Divider>
      <Text italic>Bret</Text>
    </Card>
  );
};

export default UserInfo;
