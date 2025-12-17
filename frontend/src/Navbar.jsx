import { Link } from "react-router-dom";

export default function Navbar({ cartCount, user, onLogout }) {
  return (
    <nav style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      padding: '15px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 20px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
        <Link to="/" style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginRight: '20px'
        }}>
          🛍️ Store
        </Link>
        <Link to="/" style={{ color: '#333', fontWeight: '500', transition: 'color 0.3s' }}>Home</Link>
        <Link to="/products" style={{ color: '#333', fontWeight: '500', transition: 'color 0.3s' }}>Products</Link>
        <Link to="/contact" style={{ color: '#333', fontWeight: '500', transition: 'color 0.3s' }}>Contact</Link>
        <Link to="/cart" style={{ 
          color: '#667eea', 
          fontWeight: '600',
          background: '#f0f0ff',
          padding: '8px 16px',
          borderRadius: '20px'
        }}>
          🛒 Cart ({cartCount})
        </Link>
      </div>
      <div>
        {user ? (
          <button onClick={onLogout} style={{ 
            background: '#ff4757',
            padding: '8px 20px'
          }}>
            Logout
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '15px' }}>
            <Link to="/login">
              <button style={{ background: 'white', color: '#667eea', border: '2px solid #667eea' }}>
                Login
              </button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
