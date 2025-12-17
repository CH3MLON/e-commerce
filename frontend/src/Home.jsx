import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{
      padding: '60px 40px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '60px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Welcome to Our Store
        </h1>
        <p style={{
          fontSize: '20px',
          color: '#666',
          marginBottom: '40px'
        }}>
          Discover amazing products at unbeatable prices
        </p>

        <Link to="/products">
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=400&fit=crop"
            alt="store banner" 
            style={{
              width: '100%',
              height: '400px',
              objectFit: 'cover',
              cursor: 'pointer',
              borderRadius: '15px',
              transition: 'transform 0.3s ease',
              boxShadow: '0 5px 20px rgba(0,0,0,0.2)'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          />
        </Link>
        
        <Link to="/products">
          <button style={{
            marginTop: '30px',
            padding: '15px 40px',
            fontSize: '18px'
          }}>
            Shop Now →
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
