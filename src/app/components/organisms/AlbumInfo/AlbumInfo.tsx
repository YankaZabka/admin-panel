/* eslint @typescript-eslint/no-non-null-assertion: 0 */
import React from "react";
import { useQuery } from "@apollo/client";
import { Card, Divider, Spin, Typography } from "antd";
import { useParams } from "react-router-dom";
import { operations, Types } from "./duck";
import classes from "./AlbumInfo.module.css";

const { Text, Title } = Typography;

const AlbumInfo: React.FC = () => {
  const { id } = useParams();

  const { data, loading } = useQuery<
    Types.GetAlbumInfoQuery,
    Types.GetAlbumInfoQueryVariables
  >(operations.getAlbumInfo, {
    variables: {
      id: id!,
    },
  });

  if (!data || loading) {
    return <Spin size="large" />;
  }

  return (
    <Card className={classes.card}>
      <div className={classes.titleContainer}>
        <Title level={2}>{data.album?.title}</Title>
      </div>
      <Divider orientation="left">
        <Text strong>Name</Text>
      </Divider>
      <Text italic>{data.album?.user?.name}</Text>
      <Divider orientation="left">
        <Text strong>Username</Text>
      </Divider>
      <Text italic>{data.album?.user?.username}</Text>
    </Card>
  );
};

export default AlbumInfo;
