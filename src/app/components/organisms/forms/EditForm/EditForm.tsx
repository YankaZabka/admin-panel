import React from "react";
import { Button, Form, Input, Select } from "antd";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const EditForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = () => {};

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
      initialValues={{ title: "BLabla", user: "5" }}
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[
          { required: true },
          { type: "string" },
          { min: 3 },
          { max: 64 },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="user"
        label="User"
        rules={[{ required: true }, { type: "string" }]}
      >
        <Select placeholder="Select a user" allowClear>
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" style={{ marginRight: "8px" }}>
          Submit
        </Button>
        <Button htmlType="button">Cancel</Button>
      </Form.Item>
    </Form>
  );
};

export default EditForm;
