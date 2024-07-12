import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => {
        console.error('Failed to fetch products:', err);
        setError(`Failed to load products. ${err.message}`);
      });
  }, []);

  const applyFilters = (filters) => {
    // Implement filter logic here
    setFilteredProducts(filteredProducts); // Update with filtered products
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Filters applyFilters={applyFilters} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default AllProducts;
