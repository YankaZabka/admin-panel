/* eslint @typescript-eslint/no-non-null-assertion: 0 */
import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Button, Space, Table, Image } from "antd";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { operations, Types } from "./duck";

const { Column } = Table;

const PhotosTable: React.FC = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      page: "1",
      size: "10",
    });
  }, [setSearchParams]);

  const { data, loading } = useQuery<
    Types.GetAlbumPhotoInfoQuery,
    Types.GetAlbumPhotoInfoQueryVariables
  >(operations.getAlbumPhotoInfo, {
    variables: {
      id: id!,
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

  const dataSource = data?.album?.photos?.data?.map((item) => {
    return {
      key: item?.id,
      id: item?.id,
      title: item?.title,
      preview: item?.thumbnailUrl,
    };
  });

  return (
    <Table
      dataSource={dataSource}
      style={{ margin: "20px 0" }}
      loading={loading}
      pagination={{
        current: searchParams.get("page")
          ? Number(searchParams.get("page"))
          : 1,
        pageSize: searchParams.get("size")
          ? Number(searchParams.get("size"))
          : 10,
        pageSizeOptions: [10, 20, 50],
        onChange(page, pageSize) {
          setSearchParams({
            page: page.toString(),
            size: pageSize.toString(),
          });
        },
        total: data?.album?.photos?.meta?.totalCount ?? 100,
      }}
    >
      <Column title="Id" dataIndex="id" />
      <Column title="Title" dataIndex="title" />
      <Column
        title="Preview"
        dataIndex="preview"
        render={(text, record: any) => (
          <Image width={50} src={record.preview} />
        )}
      />
      <Column
        title="Actions"
        dataIndex="actions"
        render={(text, record: any) => (
          <Space size="middle">
            <Button size="small">
              <Link to={record.id}>Show</Link>
            </Button>
          </Space>
        )}
      />
    </Table>
  );
};

export default PhotosTable;
