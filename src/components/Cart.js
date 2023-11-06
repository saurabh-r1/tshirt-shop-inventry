import React from "react";
import { Modal, Button, Table } from "react-bootstrap";

const Cart = ({ cartItems, showCart, onHide }) => {
  return (
    <Modal show={showCart} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>T-Shirt Name</th>
                <th>Size</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.tshirtName}</td>
                  <td>{item.size}</td>
                  <td>{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;