function Header({ productCount }) {
  return (
    <header className="hero-section">
      <div className="hero-copy">
        <span className="eyebrow">Fresh picks for every day</span>
        <h1>Browse, search, filter, and sort your product catalog with ease.</h1>
        <p>
          Explore a simple React product listing page with reusable components,
          responsive design, and smooth product discovery controls.
        </p>
      </div>

      <div className="hero-card">
        <p className="hero-card-label">Visible products</p>
        <p className="hero-card-count">{productCount}</p>
        <p className="hero-card-text">
          Results update instantly as users search, choose a category, or apply
          sorting.
        </p>
      </div>
    </header>
  )
}

export default Header
