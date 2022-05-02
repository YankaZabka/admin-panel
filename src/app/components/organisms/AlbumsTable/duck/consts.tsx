import React from "react";
import {
  EditOutlined,
  MoreOutlined,
  DeleteOutlined,
} from "@ant-design/icons/lib";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";
// eslint-disable-next-line css-modules/no-unused-class
import classes from "../AlbumsTable.module.css";

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
          <Link to={record.id}>
            <MoreOutlined className={classes.columnButtonMargin} />
            Show
          </Link>
        </Button>
        <Button size="small">
          <Link to={`${record.id}/edit`}>
            <EditOutlined className={classes.columnButtonMargin} />
            Edit
          </Link>
        </Button>
        <Button
          size="small"
          onClick={() => {
            showModal(record.id);
          }}
        >
          <DeleteOutlined />
          Delete
        </Button>
      </Space>
    ),
  },
];
