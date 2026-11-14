
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeItem,
  updateQuantity
} from '../redux/CartSlice';

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  // Calculate total number of items
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total cart amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Increase quantity
  const increaseQuantity = (item) => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity + 1
    }));
  };

  // Decrease quantity
  const decreaseQuantity = (item) => {
    dispatch(updateQuantity({
      id: item.id,
      quantity: item.quantity - 1
    }));
  };

  // Remove item from cart
  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  // Checkout message
  const handleCheckout = () => {
    alert('Coming Soon! Thank you for shopping with Paradise Nursery.');
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      backgroundColor: '#f5f9f5'
    }}>

      {/* Navigation Bar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 5%',
        backgroundColor: '#1b5e20',
        color: 'white'
      }}>
        <h2>🌿 Paradise Nursery</h2>

        <div style={{
          display: 'flex',
          gap: '25px',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ color: 'white' }}>
            Home
          </Link>

          <Link to="/plants" style={{ color: 'white' }}>
            Plants
          </Link>

          <Link to="/cart" style={{ color: 'white' }}>
            🛒 Cart ({cartCount})
          </Link>
        </div>
      </nav>

      {/* Shopping Cart Heading */}
      <header style={{
        textAlign: 'center',
        padding: '30px 15px'
      }}>
        <h1>Shopping Cart</h1>
        <p>Review your selected plants before checkout.</p>
      </header>

      <main style={{
        maxWidth: '1100px',
        margin: 'auto',
        padding: '20px'
      }}>

        {cartItems.length === 0 ? (

          // Empty Cart
          <div style={{
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '10px'
          }}>
            <h2>Your cart is empty!</h2>
            <p>Discover beautiful plants for your home.</p>

            <Link to="/plants">
              <button style={{
                padding: '12px 25px',
                backgroundColor: '#2e7d32',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '15px'
              }}>
                Continue Shopping
              </button>
            </Link>
          </div>

        ) : (

          <>
            {/* Cart Items */}
            {cartItems.map(item => (

              <div key={item.id} style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '15px',
                backgroundColor: 'white',
                padding: '20px',
                marginBottom: '15px',
                borderRadius: '10px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
              }}>

                {/* Plant Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '110px',
                    height: '110px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />

                {/* Plant Details */}
                <div style={{ flex: '1', minWidth: '130px' }}>
                  <h3>{item.name}</h3>
                  <p>Unit Price: ₹{item.price}</p>
                  <p>
                    Total: ₹{item.price * item.quantity}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <button
                    onClick={() => decreaseQuantity(item)}
                    style={{
                      padding: '8px 13px',
                      cursor: 'pointer'
                    }}
                  >
                    -
                  </button>

                  <span style={{ fontWeight: 'bold' }}>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQuantity(item)}
                    style={{
                      padding: '8px 13px',
                      cursor: 'pointer'
                    }}
                  >
                    +
                  </button>
                </div>

                {/* Delete Button */}
                <button
                  onClick={() => handleRemove(item.id)}
                  style={{
                    padding: '9px 15px',
                    backgroundColor: '#d32f2f',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>

              </div>
            ))}

            {/* Cart Summary */}
            <div style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '10px',
              textAlign: 'right',
              marginTop: '25px'
            }}>

              <h2>
                Total Items: {cartCount}
              </h2>

              <h2 style={{
                color: '#2e7d32',
                margin: '15px 0'
              }}>
                Total Amount: ₹{totalAmount}
              </h2>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                style={{
                  padding: '12px 25px',
                  backgroundColor: '#2e7d32',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  marginRight: '12px',
                  fontSize: '16px'
                }}
              >
                Checkout
              </button>

              {/* Continue Shopping */}
              <Link to="/plants">
                <button style={{
                  padding: '12px 25px',
                  backgroundColor: '#555',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}>
                  Continue Shopping
                </button>
              </Link>

            </div>
          </>
        )}

      </main>
    </div>
  );
}

export default CartItem;
