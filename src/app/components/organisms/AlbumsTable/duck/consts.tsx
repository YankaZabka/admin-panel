import React from "react";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";

export const columns = (showModal: any) => [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "User name",
    dataIndex: "username",
  },
  {
    title: "Photos",
    dataIndex: "photos",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    render: (text: string, record: any) => (
      <Space size="middle">
        <Button size="small">
          <Link to={record.id}>Show</Link>
        </Button>
        <Button size="small">
          <Link to={`${record.id}/edit`}>Edit</Link>
        </Button>
        <Button
          size="small"
          onClick={() => {
            showModal(record.id);
          }}
        >
          Delete
        </Button>
      </Space>
    ),
  },
];
