import { Layout, Row, Col, Alert } from "antd";
import axios from "axios";
import {
  setCategories,
  setIsLoading,
  setMessage,
  setProducts,
} from "./redux/product/productSlice";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import ProfilePage from "./pages/ProfilePage";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import NotFoundPage from "./pages/NotFoundPage";
import Loading from "./components/Loading";
import Homepage from "./pages/Homepage";

function App() {
  const dispatch = useDispatch();

  const { routes, isLoading, message } = useSelector((state) => state.product);

  const fetchProducts = useCallback(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch(setProducts(res.data));
      })
      .catch((err) => {
        dispatch(setMessage(err.message));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  }, [dispatch]);

  const fetchCategories = useCallback(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => dispatch(setCategories(res.data)))
      .catch((err) => {
        dispatch(setMessage(err.message));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [dispatch, fetchCategories, fetchProducts]);

  const location = useLocation();

  const isLocationDefinedAtRoute =
    routes.filter((route) => route.key.includes(location.pathname)).length >
      0 || location.pathname.includes("/products/");
  return (
    <Layout className="layout">
      <Navbar />
      <Row>
        {isLoading && <Loading />}
        {!isLoading && message && (
          <Alert
            message={message}
            type="error"
            style={{ width: "100%", margin: 50, padding: 20 }}
          />
        )}
        {!isLoading && !message && (
          <>
            <Col
              xs={isLocationDefinedAtRoute ? 2 : 0}
              sm={isLocationDefinedAtRoute ? 2 : 0}
              md={isLocationDefinedAtRoute ? 2 : 0}
              lg={isLocationDefinedAtRoute ? 2 : 0}
            ></Col>
            <Col
              xs={isLocationDefinedAtRoute ? 20 : 24}
              sm={isLocationDefinedAtRoute ? 20 : 24}
              md={isLocationDefinedAtRoute ? 20 : 24}
              lg={isLocationDefinedAtRoute ? 20 : 24}
            >
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Col>
            <Col
              xs={isLocationDefinedAtRoute ? 2 : 0}
              sm={isLocationDefinedAtRoute ? 2 : 0}
              md={isLocationDefinedAtRoute ? 2 : 0}
              lg={isLocationDefinedAtRoute ? 2 : 0}
            ></Col>
          </>
        )}
      </Row>
    </Layout>
  );
}

export default App;
