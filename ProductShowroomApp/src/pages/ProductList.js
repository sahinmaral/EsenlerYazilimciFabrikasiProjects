import { Col, Row } from "antd";
import { useSelector } from "react-redux";
import NameFilter from "../components/NameFilter";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";

function ProductList() {
  const { products, filter } = useSelector((state) => state.product);

  return (
    <div>
      <Row style={{ margin: "50px 0" }}>
        <Col xs={24} sm={24}>
          <NameFilter />
        </Col>
      </Row>
      <Row>
        <Col xs={0} sm={6} md={6} lg={4} xl={4}>
          <CategoryFilter />
        </Col>
        <Col xs={24} sm={18} md={18} lg={20} xl={20}>
          <Row>
          {products
          .filter(
            (product) =>
              (filter.selectedCategories.includes(product.category) &&
                product.title.toLocaleLowerCase().includes(filter.filteredTitle)) ||
              (filter.selectedCategories.length === 0 && product.title.toLocaleLowerCase().includes(filter.filteredTitle))
          )
          .map((product) => {
            return (
              <Col xs={24} sm={12} md={8} lg={6} xl={6} key={product.id}>
                <ProductCard product={product} />
              </Col>
            );
          })}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default ProductList;
