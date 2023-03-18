import { Button } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  addFavouriteProduct,
  removeFavouriteProduct,
  setCurrentProduct,
} from "../redux/product/productSlice";

function ProductDetail() {

  const { id } = useParams();
  const { products, currentProduct, favouriteProductIds } =
    useSelector((state) => state.product);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      if (products.filter((product) => product.id === Number(id)).length > 0) {
        dispatch(
          setCurrentProduct({
            favourite: favouriteProductIds.includes(Number(id)),
            ...products.find((product) => product.id.toString() === id),
          })
        );
      } else {
        navigate("/404");
      }
    }
  }, [products, dispatch,id,navigate,favouriteProductIds]);

  return (
    <div>
      {currentProduct && (
        <Content className="product-details">
          <div className="image">
            <img src={currentProduct.image} alt={currentProduct.title} />
          </div>
          <div className="divider"></div>
          <div className="detailed-informations">
            <h1 className="title">{currentProduct.title}</h1>
            <div className="price">
              <p>${currentProduct.price}</p>
            </div>
            <div className="category">{currentProduct.category}</div>
            <p className="description">{currentProduct.description}</p>
            <div className="add-favourite-part">
              <Button
                onClick={() => {
                  if (currentProduct.favourite) {
                    dispatch(removeFavouriteProduct(currentProduct.id));
                  } else {
                    dispatch(addFavouriteProduct(currentProduct.id));
                  }
                }}
                className={`${
                  currentProduct.favourite
                    ? "remove-favourite"
                    : "add-favourite"
                } favourite`}
                type="primary"
              >
                {currentProduct.favourite
                  ? "Remove from favourite"
                  : "Add to favourites"}
              </Button>
            </div>
          </div>
        </Content>
      )}
    </div>
  );
}

export default ProductDetail;
