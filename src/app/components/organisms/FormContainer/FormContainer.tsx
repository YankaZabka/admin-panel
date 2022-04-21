import React from "react";
import { blue } from "@ant-design/colors";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

interface WrapperProps {
  title: string;
}

const FormContainer: React.FC<WrapperProps> = ({ children, title }) => {
  return (
    <Row
      style={{
        backgroundColor: "#f0f2f5",
        width: "500px",
        padding: "10px 20px",
        border: `1px solid ${blue[4]}`,
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <Col
        span={24}
        style={{
          textAlign: "center",
          margin: "5px 0",
        }}
      >
        <Title level={2}>{title}</Title>
      </Col>
      <Col span={24}>{children}</Col>
    </Row>
  );
};

export default FormContainer;
