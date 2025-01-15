import React, { useState } from 'react';

function SearchComponent() {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Buscando:', query);
  };

  return (
    <div className="search-container">
      <h1>Indexed Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Buscar</button>
      </form>
    </div>
  );
}

export default SearchComponent;