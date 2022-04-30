import React from "react";
import { Table as AntTable } from "antd";
import { Interfaces } from "./interfaces";

interface Props {
  dataSource: any;
  loading: boolean;
  pagination: Record<string, unknown>;
  columns: Interfaces.IColumns[];
}

const Table: React.FC<Props> = ({
  dataSource,
  loading,
  pagination,
  columns,
}) => {
  return (
    <AntTable
      dataSource={dataSource}
      style={{ margin: "20px 0" }}
      loading={loading}
      scroll={{ x: true }}
      pagination={pagination}
      columns={columns}
    />
  );
};

export default Table;
