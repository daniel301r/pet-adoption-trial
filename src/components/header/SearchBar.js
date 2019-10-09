import React from 'react';

const SearchBar = ({ onSearchChange }) => {
  return (
    <div className='searchBar'>
      <input
        type='search'
        placeholder='Search animal species...'
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBar;