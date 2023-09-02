// SearchBar.js
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, filter, setFilter }) => {
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchInputChange}
      />
      <select value={filter} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="filter1">Filter 1</option>
        <option value="filter2">Filter 2</option>
        {/* Add more filter options as needed */}
      </select>
    </div>
  );
};

export default SearchBar;
