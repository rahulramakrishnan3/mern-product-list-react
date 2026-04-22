function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand-block">
        <span className="brand-badge">PL</span>
        <div>
          <p className="brand-name">Product List</p>
          <p className="brand-subtitle">React product showcase</p>
        </div>
      </div>

      <div className="nav-links">
        <a href="#products">Products</a>
        <a href="#filters">Filters</a>
      </div>
    </nav>
  )
}

export default Navbar
