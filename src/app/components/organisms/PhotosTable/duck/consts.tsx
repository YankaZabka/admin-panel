import React from "react";
import { Button, Image, Space } from "antd";
import { Link } from "react-router-dom";

export const columns = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
  },
  {
    title: "Preview",
    dataIndex: "preview",
    render: (text: string, record: any) => (
      <Image width={50} src={record.preview} />
    ),
  },
  {
    title: "Actions",
    dataIndex: "actions",
    render: (text: string, record: any) => (
      <Space size="middle">
        <Button size="small">
          <Link to={record.id}>Show</Link>
        </Button>
      </Space>
    ),
  },
];
