import React from "react";
import { Card, Col, Row, Typography } from "antd";

const { Text, Title } = Typography;

const WelcomePage: React.FC = () => {
  return (
    <Row>
      <Col span={24} style={{ textAlign: "center" }}>
        <Card style={{ width: "400px", borderRadius: "20px" }}>
          <div style={{ width: "100%", textAlign: "center" }}>
            <Title level={3}>Welcome to Admin-panel!</Title>
          </div>
          <Text italic>You can browse through &apos;Albums&apos; page</Text>
          <br />
          <Text italic>
            Feel free to use navigation buttons on the top of our site
          </Text>
        </Card>
      </Col>
    </Row>
  );
};

export default WelcomePage;
