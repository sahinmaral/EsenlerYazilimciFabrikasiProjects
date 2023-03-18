import { Button, Card, Divider } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { HeartFilled,MinusCircleFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavouriteProduct,
  removeFavouriteProduct,
} from "../redux/product/productSlice";

function ProductCard(props) {
  const product = props.product;
  const dispatch = useDispatch();
  const favouriteProductIds = useSelector(
    (state) => state.product.favouriteProductIds
  );

  const isProductAddedToFavourite = favouriteProductIds.includes(product.id);

  return (
    <div>
      <Card hoverable style={{ margin: 10 }}>
        <div className="image">
          <img src={product.image} />
        </div>

        <Divider />

        <div className="information">
          <p className="information-title">{product.title}</p>
          <p className="information-price">$ {product.price}</p>
          <p className="information-category">{product.category}</p>

          <div style={{ marginTop: "30px" }}>
            <Link to={`/products/${product.id}`}>
              <Button type="primary" style={{ height: "40px",width:"100%" }}>
                More
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ProductCard;
