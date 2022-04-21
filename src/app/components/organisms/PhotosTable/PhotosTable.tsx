import React from "react";
import { Button, Space, Table } from "antd";

const { Column } = Table;

const dataSource = [
  {
    key: "1",
    id: "1",
    title: "My album 1",
    preview: "IMG",
  },
  {
    key: "2",
    id: "2",
    title: "My album 3",
    preview: "IMG",
  },
];

const PhotosTable: React.FC = () => {
  return (
    <Table dataSource={dataSource} style={{ margin: "20px 0" }}>
      <Column title="Id" dataIndex="id" key="id" />
      <Column title="Title" dataIndex="title" key="title" />
      <Column
        title="Preview(use thumbnail)"
        dataIndex="preview"
        key="preview"
      />
      <Column
        title="Actions"
        key="actions"
        render={() => (
          <Space size="middle">
            <Button size="small">Show</Button>
          </Space>
        )}
      />
    </Table>
  );
};

export default PhotosTable;
