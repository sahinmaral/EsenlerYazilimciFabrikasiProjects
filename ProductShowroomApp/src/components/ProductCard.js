import { Button, Card, Divider } from "antd";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const product = props.product;

  return (
    <div>
      <Card hoverable style={{ margin: 10 }}>
        <div className="image">
          <img src={product.image} alt={product.title}/>
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
