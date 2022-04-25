import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Col, Form, Input, Row, Select, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../../../../../notify";
import { operations as albumsOperations } from "../../AlbumsTable/duck";
import { operations, Types } from "./duck";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const CreateForm: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [createAlbum, { loading: mutationLoading }] = useMutation<
    Types.CreateAlbumMutation,
    Types.CreateAlbumMutationVariables
  >(operations.createAlbum, {
    onCompleted(data) {
      navigate(-1);
      notifySuccess(`Album '${data.createAlbum?.title}' was created!`);
    },
    refetchQueries: [{ query: albumsOperations.getAlbums }],
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
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
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
          {queryData.users?.data?.map((item) => {
            return (
              <Option key={item?.id} value={item?.id}>
                {item?.username}
              </Option>
            );
          })}
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginRight: "8px" }}
          onClick={() => {}}
        >
          Submit
        </Button>
        <Button htmlType="button" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateForm;
