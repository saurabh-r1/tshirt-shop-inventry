import React, { useState } from "react";
import TshirtForm from "./components/TshirtForm";
import TshirtDetail from "./components/TshirtDetail";
import Header from "./components/Header";
import Cart from "./components/Cart";

const App = () => {
  const [tshirtData, setTshirtData] = useState([]);
  const [isTshirtAdded, setIsTshirtAdded] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleDeleteTshirt = (index) => {
    const updatedTshirtData = tshirtData.filter((_, i) => i !== index);
    setTshirtData(updatedTshirtData);
  };

  const addTshirt = (newTshirt) => {
    // Check if a T-shirt with the same name already exists in the array
    const existingTshirtIndex = tshirtData.findIndex(
      (tshirt) => tshirt.tshirtName === newTshirt.tshirtName
    );
  
    if (existingTshirtIndex !== -1) {
      // If an existing T-shirt with the same name is found, update the description, price, and quantities
      const updatedTshirtData = [...tshirtData];
      updatedTshirtData[existingTshirtIndex] = {
        ...updatedTshirtData[existingTshirtIndex],
        description: newTshirt.description,
        price: newTshirt.price,
        smallQuantity:
          updatedTshirtData[existingTshirtIndex].smallQuantity +
          newTshirt.smallQuantity,
        mediumQuantity:
          updatedTshirtData[existingTshirtIndex].mediumQuantity +
          newTshirt.mediumQuantity,
        largeQuantity:
          updatedTshirtData[existingTshirtIndex].largeQuantity +
          newTshirt.largeQuantity,
      };
      setTshirtData(updatedTshirtData);
    } else {
      // If no existing T-shirt with the same name is found, add it as a new one
      setTshirtData([...tshirtData, newTshirt]);
    }
  
    setIsTshirtAdded(true);
  };
  

  const onAddToCart = (item) => {
    // Check if the item with the same T-shirt name and size already exists in the cart
    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.tshirtName === item.tshirtName && cartItem.size === item.size
    );

    if (existingCartItemIndex !== -1) {
      // If an existing item with the same T-shirt name and size is found, update the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = {
        ...updatedCartItems[existingCartItemIndex],
        quantity: updatedCartItems[existingCartItemIndex].quantity + 1,
      };
      setCartItems(updatedCartItems);
    } else {
      // If no existing item with the same T-shirt name and size is found, add it as a new one with a quantity of 1
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const hideCartModal = () => {
    setShowCart(false);
  };

  return (
    <>
      <Header showCartModal={() => setShowCart(true)} />
      <TshirtForm addTshirt={addTshirt} />
      <TshirtDetail
        tshirtData={tshirtData}
        isTshirtAdded={isTshirtAdded}
        onDeleteTshirt={handleDeleteTshirt}
        onAddToCart={onAddToCart}
      />
      <Cart cartItems={cartItems} showCart={showCart} onHide={hideCartModal} />
    </>
  );
};

export default App;
