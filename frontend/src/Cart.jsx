export default function Cart({ cart, removeFromCart, updateCartQuantity }) {
  const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    
    const confirmed = window.confirm(`Total Amount: ₹${total.toLocaleString()}\n\nProceed with payment?`);
    
    if (confirmed) {
      alert('Payment Successful! Thank you for your order.');
      cart.forEach(item => removeFromCart(item.id));
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{
        fontSize: '42px',
        marginBottom: '30px',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        Shopping Cart
      </h1>

      {cart.length === 0 && (
        <div style={{
          background: 'white',
          padding: '60px',
          borderRadius: '15px',
          textAlign: 'center',
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
        }}>
          <p style={{ fontSize: '24px', color: '#666' }}>Your cart is empty</p>
        </div>
      )}

      {cart.map((item) => (
        <div key={item.id} style={{
          background: 'white',
          borderRadius: '15px',
          padding: '25px',
          marginBottom: '20px',
          display: 'flex',
          gap: '25px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
          alignItems: 'center'
        }}>
          <img
            src={item.image || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop"}
            alt={item.name}
            style={{
              width: '150px',
              height: '150px',
              objectFit: 'cover',
              borderRadius: '10px'
            }}
          />
          
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>{item.name}</h3>
            <p style={{ fontSize: '20px', color: '#667eea', fontWeight: 'bold', marginBottom: '15px' }}>
              ₹{item.price.toLocaleString()}
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
              <button 
                onClick={() => updateCartQuantity(item.id, (item.quantity || 1) - 1)}
                style={{ 
                  width: '35px', 
                  height: '35px', 
                  padding: '0',
                  fontSize: '20px'
                }}
              >
                -
              </button>
              <span style={{ fontSize: '18px', fontWeight: '600', minWidth: '60px', textAlign: 'center' }}>
                {item.quantity || 1}
              </span>
              <button 
                onClick={() => updateCartQuantity(item.id, (item.quantity || 1) + 1)}
                style={{ 
                  width: '35px', 
                  height: '35px', 
                  padding: '0',
                  fontSize: '20px'
                }}
              >
                +
              </button>
            </div>
            
            <p style={{ fontSize: '18px', fontWeight: '600', color: '#333', marginBottom: '15px' }}>
              Subtotal: ₹{(item.price * (item.quantity || 1)).toLocaleString()}
            </p>
            
            <button 
              onClick={() => removeFromCart(item.id)} 
              style={{ 
                background: '#ff4757',
                padding: '10px 20px'
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '30px',
          marginTop: '30px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
          textAlign: 'right'
        }}>
          <h2 style={{ 
            fontSize: '32px', 
            color: '#333',
            marginBottom: '20px'
          }}>
            Total: ₹{total.toLocaleString()}
          </h2>
          <button 
            onClick={handleCheckout}
            style={{ 
              padding: '15px 40px',
              fontSize: '18px'
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}
