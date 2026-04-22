import { useMemo, useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'
import ProductToolbar from './components/ProductToolbar'
import { products } from './data/products'

const sortProducts = (items, sortBy) => {
  const sortedItems = [...items]

  switch (sortBy) {
    case 'price-low-high':
      return sortedItems.sort((a, b) => a.price - b.price)
    case 'price-high-low':
      return sortedItems.sort((a, b) => b.price - a.price)
    case 'rating-high-low':
      return sortedItems.sort((a, b) => b.rating - a.rating)
    case 'rating-low-high':
      return sortedItems.sort((a, b) => a.rating - b.rating)
    default:
      return sortedItems
  }
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  const categories = useMemo(
    () => ['All', ...new Set(products.map((product) => product.category))],
    [],
  )

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    const visibleProducts = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(normalizedSearch)
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    return sortProducts(visibleProducts, sortBy)
  }, [searchTerm, selectedCategory, sortBy])

  return (
    <div className="app-shell">
      <Navbar />
      <Header productCount={filteredProducts.length} />

      <main className="page-content">
        <ProductToolbar
          categories={categories}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          sortBy={sortBy}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
          onSortChange={setSortBy}
        />

        <ProductGrid products={filteredProducts} />
      </main>
    </div>
  )
}

export default App
