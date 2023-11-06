import React from "react";
import { Table, Button, Card } from "react-bootstrap";

const TshirtDetail = ({ tshirtData, isTshirtAdded, onDeleteTshirt, onAddToCart }) => {
  const handleBuy = (size, tshirtName) => {
    const tshirt = tshirtData.find((tshirt) => tshirt.tshirtName === tshirtName);
    if (tshirt) {
      onAddToCart({
        tshirtName: tshirt.tshirtName,
        size: size,
        price: tshirt.price,
      });
    }
  };

  const handleDeleteTshirt = (index) => {
    onDeleteTshirt(index);
  };
  return (
    <>
      <h4 className="mt-3 mx-4">Product details</h4>
      <Card className="mx-4">
        <Card.Body>
          {isTshirtAdded ? (
            <Table variant="borderless" striped>
              <thead>
                <tr>
                  <th>T-Shirt Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Buy S</th>
                  <th>Buy M</th>
                  <th>Buy L</th>
                  <th></th> {/* Add a column for the delete button */}
                </tr>
              </thead>
              <tbody>
                {tshirtData.map((tshirt, index) => (
                  <tr key={index}>
                    <td>{tshirt.tshirtName}</td>
                    <td>{tshirt.description}</td>
                    <td>${tshirt.price}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => handleBuy("S", tshirt.tshirtName)}
                      >
                        Buy S({tshirt.smallQuantity})
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => handleBuy("M", tshirt.tshirtName)}
                      >
                        Buy M({tshirt.mediumQuantity})
                          
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => handleBuy("L", tshirt.tshirtName)}
                      >
                        BuyL({tshirt.largeQuantity})
                          
                      </Button>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteTshirt(index)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No T-shirt added.</p>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default TshirtDetail;