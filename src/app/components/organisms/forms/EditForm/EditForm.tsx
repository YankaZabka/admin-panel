/* eslint @typescript-eslint/no-non-null-assertion: 0 */
import React from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons/lib";
import { useQuery } from "@apollo/client";
import { Button, Col, Form, Input, Row, Select, Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import useEditAlbum from "../../../../hooks/useEditAlbum";
import {
  Types as usersTypes,
  operations as usersOperations,
} from "../CreateForm/duck";
import { Constants } from "./duck";
import classes from "./EditForm.module.css";

const { Option } = Select;

interface FormValues {
  title: string;
  user: string;
}

const EditForm: React.FC = () => {
  const [form] = Form.useForm<FormValues>();
  const navigate = useNavigate();
  const { id } = useParams();
  const { editAlbum, albumData, mutationLoading, albumLoading } =
    useEditAlbum(id);

  const { data: usersData, loading: usersLoading } = useQuery<
    usersTypes.GetUsersQuery,
    usersTypes.GetUsersQueryVariables
  >(usersOperations.getUsers);

  if (
    !usersData ||
    usersLoading ||
    mutationLoading ||
    !albumData ||
    albumLoading
  ) {
    return (
      <Row justify="center">
        <Col>
          <Spin size="large" />
        </Col>
      </Row>
    );
  }

  const onFinish = (values: any) => {
    editAlbum({
      variables: {
        id: id!,
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
      initialValues={{
        title: albumData.album?.title,
        user: albumData.album?.user?.id,
      }}
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
          {usersData.users?.data?.map((item) => {
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

export default EditForm;
