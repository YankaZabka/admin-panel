/* eslint @typescript-eslint/no-non-null-assertion: 0 */
import React from "react";
import { useQuery } from "@apollo/client";
import { Button, Space, Spin, Table, Image } from "antd";
import { useParams, Link } from "react-router-dom";
import { operations, Types } from "./duck";

const { Column } = Table;

const PhotosTable: React.FC = () => {
  const { id: string } = useParams();

  const { data, loading } = useQuery<
    Types.GetAlbumPhotoInfoQuery,
    Types.GetAlbumPhotoInfoQueryVariables
  >(operations.getAlbumPhotoInfo, {
    variables: {
      id: string!,
    },
  });

  if (!data || loading) {
    return <Spin size="large" />;
  }

  const dataSource = data.album?.photos?.data?.map((item) => {
    return {
      key: item?.id,
      id: item?.id,
      title: item?.title,
      preview: item?.thumbnailUrl,
    };
  });

  return (
    <Table dataSource={dataSource} style={{ margin: "20px 0" }}>
      <Column title="Id" dataIndex="id" key="id" />
      <Column title="Title" dataIndex="title" key="title" />
      <Column
        title="Preview"
        dataIndex="preview"
        key="preview"
        render={(text, record: any) => (
          <Image width={50} src={record.preview} />
        )}
      />
      <Column
        title="Actions"
        key="actions"
        render={(text, record: any) => (
          <Space size="middle">
            <Button size="small">
              <Link to={`${record.id}`}>Show</Link>
            </Button>
          </Space>
        )}
      />
    </Table>
  );
};

export default PhotosTable;
