import React from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons/lib";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Col, Form, Input, Row, Select, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../../../../../notify";
import { operations, Types, Constants } from "./duck";
import classes from "./CreateForm.module.css";

const { Option } = Select;

interface FormValues {
  title: string;
  user: string;
}

const CreateForm: React.FC = () => {
  const [form] = Form.useForm<FormValues>();
  const navigate = useNavigate();

  const [createAlbum, { loading: mutationLoading }] = useMutation<
    Types.CreateAlbumMutation,
    Types.CreateAlbumMutationVariables
  >(operations.createAlbum, {
    onCompleted(data) {
      navigate(-1);
      notifySuccess(`Album '${data.createAlbum?.title}' was created!`);
    },
  });

  const { data: queryData, loading: queryLoading } = useQuery<
    Types.GetUsersQuery,
    Types.GetUsersQueryVariables
  >(operations.getUsers);

  if (!queryData || queryLoading || mutationLoading) {
    return (
      <Row justify="center">
        <Col>
          <Spin size="large" />
        </Col>
      </Row>
    );
  }

  const onFinish = (values: any) => {
    createAlbum({
      variables: {
        input: {
          title: values.title,
          userId: values.user,
        },
      },
    });
  };

  return (
    <Form
      {...Constants.layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
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
        <Select placeholder="Select a user">
          {queryData.users?.data?.map((item) => {
            return (
              <Option key={item?.id} value={item?.id}>
                {item?.username}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item {...Constants.tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          className={classes.submitButton}
        >
          Submit
          <CheckOutlined />
        </Button>
        <Button htmlType="button" onClick={() => navigate(-1)}>
          Cancel
          <CloseOutlined />
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateForm;
