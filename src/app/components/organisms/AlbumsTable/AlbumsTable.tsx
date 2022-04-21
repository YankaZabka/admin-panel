import React from "react";
import { useQuery } from "@apollo/client";
import { Table, Space, Spin, Button } from "antd";
import { operations, Types } from "./duck";

const { Column } = Table;

// const dataSource = [
//     {
//         key: '1',
//         id: "1",
//         title: "My album 1",
//         username: "John",
//         photos: "33",
//     },
//     {
//         key: '2',
//         id: "2",
//         title: "My album 3",
//         username: "Vasya",
//         photos: "23",
//     },
// ];

const AlbumsTable: React.FC = () => {
  const { data, loading } = useQuery<
    Types.GetAlbumsQuery,
    Types.GetAlbumsQueryVariables
  >(operations.getAlbums);

  if (!data || loading) {
    return <Spin size="large" />;
  }

  const dataSource = data.albums?.data?.map((item) => {
    return {
      key: item?.id,
      id: item?.id,
      title: item?.title,
      username: item?.user?.name,
      photos: item?.photos?.data?.length,
    };
  });

  return (
    <>
      <Button danger shape="round">
        Create
      </Button>
      <Table
        dataSource={dataSource}
        style={{ margin: "20px 0" }}
        scroll={{ x: true }}
      >
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="User name" dataIndex="username" key="username" />
        <Column title="Number of photos" dataIndex="photos" key="photos" />
        <Column
          title="Actions"
          key="actions"
          render={() => (
            <Space size="middle">
              <Button size="small">Show</Button>
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default AlbumsTable;
