import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {
  return (
    <div style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Our Collection</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '2rem',
        marginTop: '3rem'
      }}>
        {[1, 2, 3, 4, 5, 6].map((id) => (
          <ProductCard key={id} id={id} />
        ))}
      </div>
    </div>
  );
}
