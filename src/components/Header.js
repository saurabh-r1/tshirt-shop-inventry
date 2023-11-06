import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Header({ showCartModal }) {
  return (
    <Container fluid className="py-2" style={{ background: "#757c88" }}>
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="mt-4 fw-bolder">T-shirt Shop Inventory</h1>
          </Col>
          <Col md={6} className="d-flex justify-content-end align-items-center">
            <Button variant="primary" onClick={showCartModal}>
              View Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Header;