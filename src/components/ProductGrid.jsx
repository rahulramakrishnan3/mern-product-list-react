import ProductCard from './ProductCard'

function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <section className="empty-state" id="products">
        <h2>No products found</h2>
        <p>Try changing the search text, category, or sorting option.</p>
      </section>
    )
  }

  return (
    <section className="product-grid" id="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}

export default ProductGrid
