import { Avatar, Button, Card, Divider, List, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeFavouriteProduct,
  setIsLoading,
  setMessage,
  setProducts,
} from "../redux/product/productSlice";

function ProfilePage() {
  const dispatch = useDispatch();

  const { favouriteProductIds, products, isLoading } = useSelector(
    (state) => state.product
  );

  const favouriteProducts =
    products.length > 0
      ? favouriteProductIds.map((id) =>
          products.find((product) => product.id === id)
        )
      : [];

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => dispatch(setProducts(res.data)))
      .catch((err) => dispatch(setMessage(err.message)))
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  }, [dispatch]);

  return (
    <div className="profile">
      <Card
        className="information"
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
        <Meta
          avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
          title="sahinmaral"
          description="Description"
        />
      </Card>
      <div className="favourite-items">
        <Divider>Favourite Items</Divider>
        <List
          className="demo-loadmore-list"
          loading={isLoading}
          itemLayout="horizontal"
          dataSource={favouriteProducts}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Link to={`/products/${item.id}`}>View More</Link>,
                <Button
                  type="primary"
                  className="remove-favourite favourite"
                  onClick={() => dispatch(removeFavouriteProduct(item.id))}
                >
                  Remove
                </Button>,
              ]}
            >
              <Skeleton avatar title={false} loading={false} active>
                <div>{item.title}</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default ProfilePage;
