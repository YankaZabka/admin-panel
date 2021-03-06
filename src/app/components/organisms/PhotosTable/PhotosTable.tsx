/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Table } from "antd";
import { useParams, useSearchParams } from "react-router-dom";
import useTablePagination from "../../../hooks/useTablePagination";
import { Consts, operations, Types, Utils } from "./duck";
// eslint-disable-next-line css-modules/no-unused-class
import classes from "./PhotosTable.module.css";

const PhotosTable: React.FC = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({
      page: "1",
      size: "10",
    });
  }, [setSearchParams]);

  const { data, loading, previousData } = useQuery<
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

  const dataSource = data
    ? Utils.buildDataSource(data)
    : Utils.buildDataSource(previousData);

  const totalCount = data?.album?.photos?.meta?.totalCount ?? 100;

  const pagination = useTablePagination(
    searchParams.get("page"),
    searchParams.get("size"),
    totalCount,
    setSearchParams
  );

  return (
    <Table
      dataSource={dataSource}
      className={classes.table}
      loading={loading}
      scroll={{ x: true }}
      pagination={pagination}
      columns={Consts.columns}
    />
  );
};

export default PhotosTable;
