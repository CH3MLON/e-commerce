const products = [
  { 
    id: 1, 
    name: "Mobile", 
    price: 15000,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop"
  },
  { 
    id: 2, 
    name: "Laptop", 
    price: 45000,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop"
  },
  { 
    id: 3, 
    name: "Headphones", 
    price: 2000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
  },
  { 
    id: 4, 
    name: "Smart Watch", 
    price: 8000,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
  },
  { 
    id: 5, 
    name: "Camera", 
    price: 35000,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop"
  },
  { 
    id: 6, 
    name: "Tablet", 
    price: 25000,
    image: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=300&h=300&fit=crop"
  }
];

export default function Products({ addToCart }) {
  return (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{
        fontSize: '42px',
        marginBottom: '40px',
        textAlign: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        Our Products
      </h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '30px'
      }}>
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{ 
                width: '100%', 
                height: '250px', 
                objectFit: 'cover'
              }}
            />
            
            <div style={{ padding: '20px' }}>
              <h3 style={{ 
                fontSize: '22px', 
                marginBottom: '10px',
                color: '#333'
              }}>
                {p.name}
              </h3>
              <p style={{ 
                fontSize: '24px', 
                fontWeight: 'bold',
                color: '#667eea',
                marginBottom: '15px'
              }}>
                ₹{p.price.toLocaleString()}
              </p>
              <button 
                onClick={() => addToCart(p)}
                style={{ width: '100%', padding: '12px' }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
