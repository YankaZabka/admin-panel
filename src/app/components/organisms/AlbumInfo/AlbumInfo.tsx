import React from "react";
import { Card, Divider, Typography } from "antd";

const { Text, Title } = Typography;

const AlbumInfo: React.FC = () => {
  return (
    <Card style={{ width: "100%", marginBottom: "20px", borderRadius: "20px" }}>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Title level={2}>UserInfo</Title>
      </div>
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

export default AlbumInfo;
