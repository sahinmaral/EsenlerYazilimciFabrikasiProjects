import React from "react";
import { List, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";

const { Title } = Typography;

const data = [
  "check out products shortly",
  "check out products deeply.",
  "add or remove products as favourite",
  "check your added favourite items",
];

function Homepage() {
  return (
    <div className="homepage">
      <Title level={1}>Welcome to product list</Title>
      <Title level={3}>You can :</Title>
      <List
        size="small"
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item><RightOutlined style={{marginRight:"20px"}}/>{item}</List.Item>}
      />
    </div>
  );
}

export default Homepage;
