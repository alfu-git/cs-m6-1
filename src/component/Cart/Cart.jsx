import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './Cart.css'
import List from '../List/List';

const Cart = ({dishData, resetCart}) => {
  const dishes = dishData;

  const [status, setStatus] = useState(false);

  const handleOderBtn = () => {
    if (!dishes || dishes.length === 0) {
      toast.error("Cart is empty!");
      return;
    }

    setStatus(true);
    resetCart([]);
    toast.success("Order Completed! Thank you.");
  }

  return (
    <div className='cart-container'>
      <h5 className='cart-title'>Cart List</h5>

      <div className='list-container'>
        {
          dishes.map((dish, index) => 
            <List key={index} dish={dish}></List>
          )
        }

        <div className='order-btn-container'>
          <button 
            onClick={handleOderBtn}
            className={status ? 'order-btn-active' : 'order-btn-inactive'}
            >
            {
              status ? 'Order Confirmed' : 'Order'
            }
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Cart;