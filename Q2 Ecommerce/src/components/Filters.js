import React from 'react';
import { TextField, Button, MenuItem } from '@mui/material';

const Filters = ({ applyFilters }) => {
  const handleApplyFilters = () => {
    // Gather filter data and call applyFilters
    const filters = {}; // Add filter data here
    applyFilters(filters);
  };

  return (
    <div>
      <TextField label="Category" select>
        <MenuItem value="category1">Category 1</MenuItem>
        <MenuItem value="category2">Category 2</MenuItem>
      </TextField>
      <TextField label="Company" select>
        <MenuItem value="company1">Company 1</MenuItem>
        <MenuItem value="company2">Company 2</MenuItem>
      </TextField>
      <TextField label="Rating" type="number" />
      <TextField label="Price Range" type="number" />
      <Button onClick={handleApplyFilters}>Apply Filters</Button>
    </div>
  );
};

export default Filters;
