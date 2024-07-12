import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Card key={product.id} sx={{ margin: 2 }}>
          <CardContent>
            <Typography variant="h5">{product.name}</Typography>
            <Typography variant="subtitle1">{product.company}</Typography>
            <Typography>Price: ${product.price}</Typography>
            <Typography>Rating: {product.rating}</Typography>
            <Typography>Discount: {product.discount}%</Typography>
            <Typography>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
