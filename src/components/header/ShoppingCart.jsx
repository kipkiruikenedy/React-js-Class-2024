import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart } from '../../store/reducers/cartSlice';

const ShoppingCart = () => {
  const items = useSelector(state => state.cart.items);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Dummy data for producst
  const dummyData = [
    { id: 1, name: 'Product 1', price: 200 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'product 3', price: 500 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <ul className="divide-y divide-gray-200">
        {/* Render dummy data */}
        {dummyData.map(item => (
          <li key={item.id} className="py-2 flex justify-between items-center">
            <div>
              <span className="font-semibold">{item.name}</span> -Ksh {item.price}
            </div>
            {/* Buttons */}
            <div>
              {/* Button to add item to cart */}
              <button onClick={() => handleAddItem(item)} className="px-2 py-1 bg-blue-500 text-white rounded-md mr-2">Add to Cart</button>
              <button onClick={() => handleRemoveItem(item)} className="px-2 py-1 bg-red-500 text-white rounded-md">Remove</button>
            </div>
          </li>
        ))}
      </ul>
      {/* Total Price */}
      <p className="mt-4">Total Price: Ksh {totalPrice.toFixed(2)}</p>
      {/* Clear Cart Button */}
      <button onClick={handleClearCart} className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-md">Clear Cart</button>
    </div>
  );
};

export default ShoppingCart;
