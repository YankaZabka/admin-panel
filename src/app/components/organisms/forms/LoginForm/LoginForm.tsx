import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import { Button, Form, Input, Spin, Col, Row } from "antd";
import { notifyError } from "../../../../../notify";
import useAuth from "../../../../hooks/useAuth";
import { operations, Types } from "./duck";

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [form] = Form.useForm<FormValues>();
  const auth: any = useAuth();

  const { data, loading } = useQuery<
    Types.GetUsersUsernamesQuery,
    Types.GetUsersUsernamesQueryVariables
  >(operations.getUsersUsernames);

  if (!data || loading) {
    return (
      <Row justify="center">
        <Col>
          <Spin size="large" />
        </Col>
      </Row>
    );
  }

  const onFinish = (values: any) => {
    const emails = data.users?.data?.map((item) => {
      return item?.email;
    });

    if (emails?.includes(values.email)) {
      auth.logIn(Date.now());
    } else {
      notifyError("User with this email does not exist!");
    }
  };

  return (
    <Form
      name="normal_login"
      form={form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Please input your Username!" },
          {
            type: "email",
            message: "Please enter a valid email",
          },
        ]}
      >
        <Input
          disabled={loading}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password
          disabled={loading}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          disabled={loading}
          type="primary"
          htmlType="submit"
          style={{ width: "100%" }}
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
