import React, { useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Table, Space, Modal } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import { notifySuccess } from "../../../../notify";
import useModal from "../../../hooks/useModal";
import useTablePagination from "../../../hooks/useTablePagination";
import { operations, Types } from "./duck";

const { Column } = Table;

const AlbumsTable: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      page: "1",
      size: "10",
    });
  }, [setSearchParams]);

  const { data, loading } = useQuery<
    Types.GetAlbumsQuery,
    Types.GetAlbumsQueryVariables
  >(operations.getAlbums, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
    notifyOnNetworkStatusChange: true,
    variables: {
      options: {
        paginate: {
          page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
          limit: searchParams.get("size")
            ? Number(searchParams.get("size"))
            : 10,
        },
      },
    },
  });

  const [deleteAlbum, { loading: deleteLoading }] = useMutation<
    Types.DeleteAlbumMutation,
    Types.DeleteAlbumMutationVariables
  >(operations.deleteAlbum, {
    onCompleted() {
      notifySuccess(`Album was deleted!`);
    },
  });

  const { isModalVisible, showModal, handleOk, handleCancel } =
    useModal(deleteAlbum);

  const totalCount = data?.albums?.meta?.totalCount ?? 100;

  const pagination = useTablePagination(
    searchParams.get("page"),
    searchParams.get("size"),
    totalCount,
    setSearchParams
  );

  const dataSource = data?.albums?.data?.map((item) => {
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
        loading={loading || deleteLoading}
        scroll={{ x: true }}
        pagination={pagination}
      >
        <Column title="Id" dataIndex="id" />
        <Column title="Title" dataIndex="title" />
        <Column title="User name" dataIndex="username" />
        <Column title="Number of photos" dataIndex="photos" />
        <Column
          title="Actions"
          dataIndex="actions"
          render={(text, record: any) => (
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
          )}
        />
      </Table>
      <Modal
        title="Delete"
        centered
        confirmLoading={deleteLoading}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure?</p>
      </Modal>
    </>
  );
};

export default AlbumsTable;
