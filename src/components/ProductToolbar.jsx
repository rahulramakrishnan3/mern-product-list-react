function ProductToolbar({
  categories,
  searchTerm,
  selectedCategory,
  sortBy,
  onSearchChange,
  onCategoryChange,
  onSortChange,
}) {
  return (
    <section className="toolbar" id="filters">
      <div className="toolbar-field search-field">
        <label htmlFor="search">Search Products</label>
        <input
          id="search"
          type="text"
          placeholder="Search by product name"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="toolbar-field">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="toolbar-field">
        <label htmlFor="sort">Sort By</label>
        <select
          id="sort"
          value={sortBy}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <option value="default">Default</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="rating-high-low">Rating: High to Low</option>
          <option value="rating-low-high">Rating: Low to High</option>
        </select>
      </div>
    </section>
  )
}

export default ProductToolbar
