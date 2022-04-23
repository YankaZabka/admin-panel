import React from "react";
import { blue } from "@ant-design/colors";
import { Col, Row, Tabs } from "antd";
import AlbumInfo from "../AlbumInfo";
import PhotosTable from "../PhotosTable";

const { TabPane } = Tabs;

const ShowAlbumPage: React.FC = () => {
  return (
    <Row
      style={{
        backgroundColor: "#f0f2f5",
        width: "700px",
        padding: "10px 20px",
        border: `1px solid ${blue[4]}`,
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        margin: "20px 0",
      }}
    >
      <Col span={24}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Basic" key="1">
            <AlbumInfo />
          </TabPane>
          <TabPane tab="Photos" key="2">
            <PhotosTable />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default ShowAlbumPage;
