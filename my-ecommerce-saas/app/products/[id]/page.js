export default function ProductDetailPage({ params }) {
  const { id } = params;

  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        <div style={{ background: '#f9f9f9', height: '500px', borderRadius: '12px' }}></div>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Exquisite Piece #{id}</h1>
          <p style={{ fontSize: '1.5rem', color: '#bfa07a', marginBottom: '2rem' }}>$129.99</p>
          <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '2.5rem' }}>
            This handcrafted piece represents the pinnacle of modern elegance. 
            Made with the finest materials, it's designed to make a statement 
            whether worn daily or on special occasions.
          </p>
          <button style={{
            padding: '1rem 2.5rem',
            background: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1.1rem',
            cursor: 'pointer'
          }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
