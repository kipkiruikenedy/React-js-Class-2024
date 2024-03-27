import React from 'react';
import { useSelector } from 'react-redux';

const CartPage = () => {
  // Access cart state from reducer in the store
  const cart = useSelector(state => state.cart);

  return (
    <div className='m-20 rounded-lg shadow-md'>
      <h2>Shopping Cart</h2>
      {cart.items.length === 0 ? (

        <p>Your cart is empty</p>

      ) : (
        <div>
          <ul className='shadow-md p-4 my-3 bg-gray-200'>
            {cart.items.map(
                item => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity} - Price: ${item.price * item.quantity}
              </li>
            ))}
          </ul>
          <p className='bg-blue-100 tex-blue-900'>Total Price: ${cart.totalPrice}</p>
          <button className='bg-green-300'>Check out</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
