import React, { createContext, useState, useContext } from 'react';

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  // TODO: what does this function do?
  //Check if item is already in basket. if yes add +1 if no then add as a new item
  const addToBasket = (product) => {
    setBasket((prevBasket) => {
      const item = prevBasket.find((item) => item.id === product.id);
      if (item) {
        return prevBasket.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevBasket, { ...product, quantity: 1 }];
      }
    });
  };

  //remove current product from array
  const removeItem = (product) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== product));
  };


  // TODO: what does this function do?
  //updates item quantity in basket
  //checks current item and quantity
  const updateQuantity = (id, quantity) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  const calculateTotal = () => {
    return basket.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, updateQuantity, calculateTotal, removeItem }}>
      {children}
    </BasketContext.Provider>
  );
}

export const useBasket = () => useContext(BasketContext);
