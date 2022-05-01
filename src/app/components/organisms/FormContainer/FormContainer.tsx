import React from "react";
import { Col, Row, Typography } from "antd";
import classes from "./FormContainer.module.css";

const { Title } = Typography;

interface WrapperProps {
  title: string;
}

const FormContainer: React.FC<WrapperProps> = ({ children, title }) => {
  return (
    <Row className={classes.container}>
      <Col span={24} className={classes.column}>
        <Title level={2}>{title}</Title>
      </Col>
      <Col span={24}>{children}</Col>
    </Row>
  );
};

export default FormContainer;
