import React, { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={query}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Rechercher..."
        />
        <button type="submit">Rechercher</button>
      </form>
    </div>
  );
};

export default SearchBar;
