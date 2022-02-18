export const addItemtoArray = (cartItems, itemToBeAdd) => {
  const existingItems = cartItems.find((item) => item.id === itemToBeAdd.id);
  if (existingItems) {
    return cartItems.map((item) =>
      item.id === itemToBeAdd.id ? { ...item, quanity: item.quanity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToBeAdd, quanity: 1 }];
};

export const removeItemFromArray = (cartItems, itemToBeRemove) => {
  const existingItems = cartItems.find((item) => item.id === itemToBeRemove.id);
  if (existingItems.quanity === 1) {
    return cartItems.filter((item) => item.id !== itemToBeRemove.id);
  }
  return cartItems.map((item) =>
    item.id === itemToBeRemove.id
      ? { ...item, quanity: item.quanity - 1 }
      : item
  );
};
