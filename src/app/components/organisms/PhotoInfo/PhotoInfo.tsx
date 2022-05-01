/* eslint @typescript-eslint/no-non-null-assertion: 0 */
import React from "react";
import { useQuery } from "@apollo/client";
import { Card, Image, Spin, Typography } from "antd";
import { useParams } from "react-router-dom";
import { operations, Types } from "./duck";
import classes from "./PhotoInfo.module.css";

const { Title } = Typography;

const PhotoInfo: React.FC = () => {
  const { id } = useParams();

  const { data, loading } = useQuery<
    Types.GetPhotoInfoQuery,
    Types.GetPhotoInfoQueryVariables
  >(operations.getPhotoInfo, {
    variables: {
      id: id!,
    },
  });

  if (!data || loading) {
    return <Spin size="large" />;
  }

  return (
    <Card className={classes.container}>
      <div className={classes.titleContainer}>
        <Title level={2}>{data.photo?.title}</Title>
      </div>
      <div className={classes.imageContainer}>
        <Image width={200} src={data.photo?.url || ""} />
      </div>
    </Card>
  );
};

export default PhotoInfo;
