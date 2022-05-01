import React from "react";
import { Col, Row, Tabs } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import AlbumInfo from "../AlbumInfo";
import classes from "./AlbumShowPage.module.css";

const { TabPane } = Tabs;

const AlbumShowPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Row className={classes.container}>
      <Col span={24}>
        <Tabs
          defaultActiveKey="1"
          onTabClick={(key: string) => {
            if (key === "2") {
              navigate(`photos`);
            }
          }}
        >
          <TabPane tab="Basic" key="1">
            <AlbumInfo />
          </TabPane>
          <TabPane tab="Photos" key="2">
            <Outlet />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default AlbumShowPage;
