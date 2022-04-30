import React, { useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Modal } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import { notifySuccess } from "../../../../notify";
import useModal from "../../../hooks/useModal";
import useTablePagination from "../../../hooks/useTablePagination";
import Table from "../../atoms/Table";
import { operations, Types, Consts } from "./duck";

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
        loading={loading || deleteLoading}
        pagination={pagination}
        columns={Consts.columns(showModal)}
      />
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
