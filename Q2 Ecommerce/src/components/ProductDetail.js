import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { Card, CardContent, Typography } from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="subtitle1">{product.company}</Typography>
        <Typography>Category: {product.category}</Typography>
        <Typography>Price: ${product.price}</Typography>
        <Typography>Rating: {product.rating}</Typography>
        <Typography>Discount: {product.discount}%</Typography>
        <Typography>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetail;
