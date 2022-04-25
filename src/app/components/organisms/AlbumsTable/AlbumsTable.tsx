import React from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import { Table, Space, Spin, Button } from "antd";
import { Link } from "react-router-dom";
import { operations, Types } from "./duck";

const { Column } = Table;

const AlbumsTable: React.FC = () => {
  const { data, loading, networkStatus } = useQuery<
    Types.GetAlbumsQuery,
    Types.GetAlbumsQueryVariables
  >(operations.getAlbums, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
  });

  if (!data || loading || networkStatus === NetworkStatus.refetch) {
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
        <Link to="create">Create</Link>
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
          render={(text, record: any) => (
            <Space size="middle">
              <Button size="small">
                <Link to={`/albums/${record.id}`}>Show</Link>
              </Button>
              <Button size="small">
                <Link to={`/albums/${record.id}/edit`}>Edit</Link>
              </Button>
              <Button size="small">Delete</Button>
            </Space>
          )}
        />
      </Table>
    </>
  );
};

export default AlbumsTable;
