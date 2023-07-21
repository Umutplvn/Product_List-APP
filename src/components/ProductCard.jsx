import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./productCard.css"

const ProductCard = ({ data, filtered }) => {
  return (
    <div className="container">
      
        <Row xs={1} md={4} lg={6}>
        {filtered.map(({ image, price, id, title }) => (
          <Col className="card" key={id}>
            <img className="product-image" src={image} alt="" />
            <h6 className="price">{price}$</h6>
            <h6 className="product-description-none">{title}</h6>
          </Col>
      ))}
              </Row>

    </div>
  );
};

export default ProductCard;
