function Contact() {
  return (
    <div style={{ 
      padding: '60px 40px',
      maxWidth: '800px',
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
          fontSize: '42px',
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Contact Us
        </h1>
        
        <p style={{ 
          fontSize: '18px', 
          color: '#666',
          marginBottom: '40px'
        }}>
          We'd love to hear from you! Reach out to us through any of the following channels.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '25px',
          alignItems: 'center'
        }}>
          <div style={{
            background: '#f8f9ff',
            padding: '25px',
            borderRadius: '15px',
            width: '100%',
            maxWidth: '500px'
          }}>
            <p style={{ fontSize: '20px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
              📧 Email
            </p>
            <p style={{ fontSize: '18px', color: '#667eea' }}>
              support@store.com
            </p>
          </div>

          <div style={{
            background: '#f8f9ff',
            padding: '25px',
            borderRadius: '15px',
            width: '100%',
            maxWidth: '500px'
          }}>
            <p style={{ fontSize: '20px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
              📱 Phone
            </p>
            <p style={{ fontSize: '18px', color: '#667eea' }}>
              +91 9876543210
            </p>
          </div>

          <div style={{
            background: '#f8f9ff',
            padding: '25px',
            borderRadius: '15px',
            width: '100%',
            maxWidth: '500px'
          }}>
            <p style={{ fontSize: '20px', fontWeight: '600', color: '#333', marginBottom: '10px' }}>
              🕒 Business Hours
            </p>
            <p style={{ fontSize: '18px', color: '#667eea' }}>
              Mon - Sat: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
