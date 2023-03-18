import { Button, Col, Dropdown, Row, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import { DownOutlined, MinusCircleFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { removeFavouriteProduct } from "../redux/product/productSlice";

function Navbar() {
  const dispatch = useDispatch();
  const { favouriteProductIds, products, routes } = useSelector(
    (state) => state.product
  );

  const rightPanelDropdownItems = [
    {
      label: "Favourite Items",
      type: "group",
      key: "1",
      children:
        products.length > 0
          ? favouriteProductIds.map((id, index) => {
              return {
                key: `1-${index}`,
                label: (
                  <div>
                    <label>
                      {products.find((product) => product.id === id).title}
                    </label>
                    <Button
                      onClick={() => {
                        dispatch(removeFavouriteProduct(id));
                      }}
                      style={{
                        backgroundColor: "#a8071a",
                        color: "white",
                        marginLeft: "20px",
                        padding: "0",
                        border: 0,
                        borderRadius: "50%",
                        width: "25px",
                        height: "25px",
                      }}
                    >
                      <MinusCircleFilled />
                    </Button>
                  </div>
                ),
              };
            })
          : [],
    },
    {
      type: "divider",
    },
    {
      label: <Link to="/profile">Go to profile</Link>,
      key: "2",
    },
  ];

  const leftPanelDropdownItems = [
    {
      label: <Link to="/">Homepage</Link>,
      key: "3",
    },
    {
      label: <Link to="/products">Products</Link>,
      key: "4",
    },
  ];

  return (
    <Header style={{ display: "flex", justifyContent: "space-between" }}>
      <Row>
        <div className="logo" />
        <Col xs={0} sm={24}>
          <div className="routes">
            {routes.map((item) => {
              if (item.isVisibleAtMenu) {
                return (
                  <Link to={item.key} key={item.label}>
                    <p style={{ padding: "0px 10px" }}>{item.label}</p>
                  </Link>
                );
              }else{
                return <div key={item.label}></div>
              }
            })}
          </div>
        </Col>
        <Col xs={24} sm={0}>
          <Dropdown
            menu={{ items: leftPanelDropdownItems }}
            trigger={["click"]}
          >
            <Link onClick={(e) => e.preventDefault()}>
              <Space>
                Pages
                <DownOutlined />
              </Space>
            </Link>
          </Dropdown>
        </Col>
      </Row>
      <div className="right-panel">
        <Dropdown menu={{ items: rightPanelDropdownItems }} trigger={["click"]}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space>
              sahinmaral
              <DownOutlined />
            </Space>
          </Link>
        </Dropdown>
      </div>
    </Header>
  );
}

export default Navbar;
