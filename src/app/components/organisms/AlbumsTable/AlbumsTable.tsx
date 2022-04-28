import React, { useEffect } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";
import { Table, Space, Spin, Button } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import { operations, Types, Utils } from "./duck";

const { Column } = Table;

const AlbumsTable: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      page: "1",
      size: "10",
    });
  }, [setSearchParams]);

  const { data, loading, networkStatus } = useQuery<
    Types.GetAlbumsQuery,
    Types.GetAlbumsQueryVariables
  >(operations.getAlbums, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
    variables: {
      options: {
        paginate: {
          page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
          limit: Utils.pageSizeVerification(searchParams.get("size")),
        },
      },
    },
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
      <Button danger shape="round" style={{ marginTop: "10px" }}>
        <Link to="create">Create</Link>
      </Button>
      <Table
        dataSource={dataSource}
        style={{ margin: "20px 0" }}
        scroll={{ x: true }}
        pagination={{
          current: searchParams.get("page")
            ? Number(searchParams.get("page"))
            : 1,
          pageSize: Utils.pageSizeVerification(searchParams.get("size")),
          pageSizeOptions: [10, 20, 50],
          onChange(page, pageSize) {
            setSearchParams({
              page: page.toString(),
              size: pageSize.toString(),
            });
          },
          total: data.albums?.meta?.totalCount ?? 100,
        }}
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
