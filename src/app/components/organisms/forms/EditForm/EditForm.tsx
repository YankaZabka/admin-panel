/* eslint @typescript-eslint/no-non-null-assertion: 0 */
import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Col, Form, Input, Row, Select, Spin } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { notifySuccess } from "../../../../../notify";
import {
  Types as albumTypes,
  operations as albumOperations,
} from "../../AlbumInfo/duck";
import { operations as albumsOperations } from "../../AlbumsTable/duck";
import {
  Types as usersTypes,
  operations as usersOperations,
} from "../CreateForm/duck";
import { operations, Types } from "./duck";

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
  const navigate = useNavigate();
  const { id: string } = useParams();

  const [editAlbum, { loading: mutationLoading }] = useMutation<
    Types.EditAlbumMutation,
    Types.EditAlbumMutationVariables
  >(operations.editAlbum, {
    onCompleted() {
      navigate(-1);
      notifySuccess(`Album was edited!`);
    },
    refetchQueries: [{ query: albumsOperations.getAlbums }],
  });

  const { data: usersData, loading: usersLoading } = useQuery<
    usersTypes.GetUsersQuery,
    usersTypes.GetUsersQueryVariables
  >(usersOperations.getUsers);

  const { data: albumData, loading: albumLoading } = useQuery<
    albumTypes.GetAlbumInfoQuery,
    albumTypes.GetAlbumInfoQueryVariables
  >(albumOperations.getAlbumInfo, {
    variables: {
      id: string!,
    },
  });

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
        id: string!,
        input: {
          title: values.title,
          userId: values.user,
        },
      },
    });
  };

  return (
    <Form
      {...layout}
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
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" style={{ marginRight: "8px" }}>
          Submit
        </Button>
        <Button htmlType="button" onClick={() => navigate(-1)}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditForm;
