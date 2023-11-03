import React from 'react';
import { Table, Button, Card } from 'react-bootstrap';

const TshirtDetail = ({ tshirtData, isTshirtAdded, onDeleteTshirt }) => {
  const handleBuy = (size, tshirtName) => {
    // Implement your logic for buying a t-shirt here
    // You can use this function to update the quantity or perform any other action.
    console.log(`Bought a ${size} t-shirt: ${tshirtName}`);
  };

  return (
    <>
      <h4 className='mt-3 mx-4'>Product details</h4>
      <Card className='mx-4'>
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
                      <Button variant="primary" onClick={() => handleBuy('S', tshirt.tshirtName)}>
                        Buy {tshirt.smallQuantity > 0 ? `S(${tshirt.smallQuantity})` : 'S'}
                      </Button>
                    </td>
                    <td>
                      <Button variant="primary" onClick={() => handleBuy('M', tshirt.tshirtName)}>
                        Buy {tshirt.mediumQuantity > 0 ? `M(${tshirt.mediumQuantity})` : 'M'}
                      </Button>
                    </td>
                    <td>
                      <Button variant="primary" onClick={() => handleBuy('L', tshirt.tshirtName)}>
                        Buy {tshirt.largeQuantity > 0 ? `L(${tshirt.largeQuantity})` : 'L'}
                      </Button>
                    </td>
                    <td>
                      <Button variant="danger" onClick={() => onDeleteTshirt(index)}>
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
