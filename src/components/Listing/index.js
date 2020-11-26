import React from "react";
import { Card, Col, Row } from 'antd';
import { Pagination } from 'antd';
import "./style.css";
const Listing = () => {
  return (

    <div className=" border m-3 listing-container">
      <Row gutter={10}>
        <Col span={20}>
          <Card title="Card title" className={"shadow p-2 m-2"} bordered={true}>
            Card content
        </Card>
        </Col>
        <Col span={20}>
          <Card title="Card title" className={"shadow p-2 m-2"} bordered={true}>
            Card content
        </Card>
        </Col>
        <Col span={20}>
          <Card title="Card title" className={"shadow p-2 m-2"} bordered={true}>
            Card content
        </Card>
        </Col>
      </Row>
      <Row gutter={20}>
        <Col span={20}>
          <Card title="Card title" className={"shadow p-2 m-2"} bordered={true}>
            Card content
        </Card>
        </Col>
        <Col span={20}>
          <Card title="Card title" className={"shadow p-2 m-2"} bordered={true}>
            Card content
        </Card>
        </Col>
        <Col span={20}>
          <Card title="Card title" className={"shadow p-2 m-2"} bordered={true}>
            Card content
        </Card>
        </Col>
      </Row>

    </div>

  )
}
export default Listing;