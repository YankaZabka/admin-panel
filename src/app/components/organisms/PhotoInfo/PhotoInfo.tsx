/* eslint @typescript-eslint/no-non-null-assertion: 0 */
import React from "react";
import { useQuery } from "@apollo/client";
import { Card, Image, Spin, Typography } from "antd";
import { useParams } from "react-router-dom";
import { operations, Types } from "./duck";

const { Title } = Typography;

const PhotoInfo: React.FC = () => {
  const { id: string } = useParams();

  const { data, loading } = useQuery<
    Types.GetPhotoInfoQuery,
    Types.GetPhotoInfoQueryVariables
  >(operations.getPhotoInfo, {
    variables: {
      id: string!,
    },
  });

  if (!data || loading) {
    return <Spin size="large" />;
  }

  return (
    <Card style={{ width: "100%", marginBottom: "20px", borderRadius: "20px" }}>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Title level={2}>{data.photo?.title}</Title>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image width={200} src={data.photo?.url || ""} />
      </div>
    </Card>
  );
};

export default PhotoInfo;
