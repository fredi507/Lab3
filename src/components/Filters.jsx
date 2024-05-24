import React from 'react';

const Filters = () => {
  return (
    <div className="filters">
      <h2>Filters</h2>
      <div className="filter-group">
        <label htmlFor="brand">Brand:</label>
        <select id="brand">
          <option value="all">All</option>
          <option value="brandA">Brand A</option>
          <option value="brandB">Brand B</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select id="category">
          <option value="all">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;

