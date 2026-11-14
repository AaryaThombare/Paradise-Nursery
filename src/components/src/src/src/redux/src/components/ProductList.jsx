
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../redux/CartSlice';

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: 'Snake Plant',
    price: 299,
    category: 'Indoor Plants',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400'
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 399,
    category: 'Indoor Plants',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400'
  },
  {
    id: 3,
    name: 'Money Plant',
    price: 199,
    category: 'Indoor Plants',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
  },
  {
    id: 4,
    name: 'ZZ Plant',
    price: 499,
    category: 'Indoor Plants',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 5,
    name: 'Rubber Plant',
    price: 449,
    category: 'Indoor Plants',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 6,
    name: 'Areca Palm',
    price: 599,
    category: 'Indoor Plants',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400'
  },

  // Outdoor Plants
  {
    id: 7,
    name: 'Rose Plant',
    price: 249,
    category: 'Outdoor Plants',
    image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400'
  },
  {
    id: 8,
    name: 'Hibiscus',
    price: 199,
    category: 'Outdoor Plants',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400'
  },
  {
    id: 9,
    name: 'Bougainvillea',
    price: 299,
    category: 'Outdoor Plants',
    image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400'
  },
  {
    id: 10,
    name: 'Jasmine',
    price: 179,
    category: 'Outdoor Plants',
    image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?w=400'
  },
  {
    id: 11,
    name: 'Marigold',
    price: 149,
    category: 'Outdoor Plants',
    image: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400'
  },
  {
    id: 12,
    name: 'Lavender',
    price: 349,
    category: 'Outdoor Plants',
    image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=400'
  },

  // Succulents
  {
    id: 13,
    name: 'Aloe Vera',
    price: 149,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 14,
    name: 'Echeveria',
    price: 199,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
  },
  {
    id: 15,
    name: 'Jade Plant',
    price: 249,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
  },
  {
    id: 16,
    name: 'Haworthia',
    price: 179,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400'
  },
  {
    id: 17,
    name: 'Burro Tail',
    price: 299,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400'
  },
  {
    id: 18,
    name: 'Cactus',
    price: 129,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400'
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    'Indoor Plants',
    'Outdoor Plants',
    'Succulents'
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>

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

      {/* Page Heading */}
      <header style={{
        textAlign: 'center',
        padding: '35px 15px',
        backgroundColor: '#e8f5e9'
      }}>
        <h1>Our Beautiful Plants</h1>
        <p>
          Bring nature home with our collection
          of beautiful and healthy plants.
        </p>
      </header>

      {/* Product Categories */}
      <main style={{ padding: '25px 5%' }}>

        {categories.map(category => (
          <section key={category} style={{
            marginBottom: '45px'
          }}>

            <h2 style={{
              color: '#2e7d32',
              borderBottom: '2px solid #2e7d32',
              paddingBottom: '10px'
            }}>
              {category}
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '25px',
              marginTop: '20px'
            }}>

              {plants
                .filter(plant => plant.category === category)
                .map(plant => {

                  const isAdded = cartItems.some(
                    item => item.id === plant.id
                  );

                  return (
                    <div key={plant.id} style={{
                      border: '1px solid #ddd',
                      borderRadius: '10px',
                      padding: '15px',
                      textAlign: 'center',
                      boxShadow: '0 3px 8px rgba(0,0,0,0.1)'
                    }}>

                      <img
                        src={plant.image}
                        alt={plant.name}
                        style={{
                          width: '100%',
                          height: '180px',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />

                      <h3 style={{ margin: '15px 0 8px' }}>
                        {plant.name}
                      </h3>

                      <p style={{
                        color: '#2e7d32',
                        fontWeight: 'bold',
                        fontSize: '18px'
                      }}>
                        ₹{plant.price}
                      </p>

                      <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                        style={{
                          padding: '10px 20px',
                          backgroundColor: isAdded
                            ? '#999'
                            : '#2e7d32',
                          color: 'white',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: isAdded
                            ? 'not-allowed'
                            : 'pointer',
                          marginTop: '10px'
                        }}
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>

                    </div>
                  );
                })}

            </div>
          </section>
        ))}

      </main>

    </div>
  );
}

export default ProductList;
