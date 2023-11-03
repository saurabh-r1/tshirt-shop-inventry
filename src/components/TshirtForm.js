import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const TshirtForm = ({ addTshirt }) => {
  const [formData, setFormData] = useState({
    tshirtName: '',
    description: '',
    price: '',          // Change this to an empty string
    smallQuantity: '',  // Change this to an empty string
    mediumQuantity: '', // Change this to an empty string
    largeQuantity: '',  // Change this to an empty string
  });

  const handleAddProduct = () => {
    // Convert the price and quantity values to numbers if needed
    formData.price = Number(formData.price);
    formData.smallQuantity = Number(formData.smallQuantity);
    formData.mediumQuantity = Number(formData.mediumQuantity);
    formData.largeQuantity = Number(formData.largeQuantity);

    // Check if all required fields are filled before adding the product
    if (formData.tshirtName && formData.description && formData.price > 0) {
      addTshirt(formData);
      setFormData({
        tshirtName: '',
        description: '',
        price: '',          // Change this to an empty string
        smallQuantity: '',  // Change this to an empty string
        mediumQuantity: '', // Change this to an empty string
        largeQuantity: '',  // Change this to an empty string
      });
    } else {
      // You can add validation or error handling here if any fields are missing or invalid
      alert('Please fill in all required fields.');
    }
  };

  return (
    <Container className="mt-3">
      <h4>Add product</h4>
      <Card>
        <Card.Body>
          <Form>
            <Row>
              <Col sm="3">
                <Form.Label className="fw-bold">T-Shirt Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="tshirtName"
                  value={formData.tshirtName}
                  onChange={(e) => setFormData({ ...formData, tshirtName: e.target.value })}
                />
              </Col>
              <Col sm="3">
                <Form.Label className="fw-bold">Description:</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </Col>
              <Col sm="2">
                <Form.Label className="fw-bold">Price:</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  placeholder="0" // Use placeholder attribute
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                />
              </Col>
              <Col sm="4">
                <Form.Label className="fw-bold">Quantity Available:</Form.Label>
                <Row>
                  <Col sm="4">
                    <Row>
                      <Col sm="2">
                        <Form.Label>S</Form.Label>
                      </Col>
                      <Col sm="9">
                        <Form.Control
                          type="number"
                          name="smallQuantity"
                          placeholder="0" // Use placeholder attribute
                          value={formData.smallQuantity}
                          onChange={(e) => setFormData({ ...formData, smallQuantity: e.target.value })}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="4">
                    <Row>
                      <Col sm="2">
                        <Form.Label>M</Form.Label>
                      </Col>
                      <Col sm="9">
                        <Form.Control
                          type="number"
                          name="mediumQuantity"
                          placeholder="0" // Use placeholder attribute
                          value={formData.mediumQuantity}
                          onChange={(e) => setFormData({ ...formData, mediumQuantity: e.target.value })}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col sm="4">
                    <Row>
                      <Col sm="2">
                        <Form.Label>L</Form.Label>
                      </Col>
                      <Col sm="9">
                        <Form.Control
                          type="number"
                          name="largeQuantity"
                          placeholder="0" // Use placeholder attribute
                          value={formData.largeQuantity}
                          onChange={(e) => setFormData({ ...formData, largeQuantity: e.target.value })}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center mt-3 mx-5">
              <Button variant="primary" size="md" onClick={handleAddProduct}>
                Add Product
              </Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TshirtForm;
