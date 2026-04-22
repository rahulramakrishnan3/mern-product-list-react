function ProductCard({ product }) {
  const handleAddToCart = () => {
    console.log(`${product.name} added to cart`)
  }

  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-content">
        <div className="product-meta">
          <span className="product-category">{product.category}</span>
          <span className="product-rating">{product.rating} / 5</span>
        </div>

        <h2>{product.name}</h2>
        <p className="product-price">${product.price}</p>

        <button type="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductCard
