import React, { useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("http://localhost:5001/recipes/search", {
        query,
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {searchResults.map((result) => (
          <a href={`http://localhost:5001/recipes/${result.id}`}>
            <div key={result.id}>
              <img src={result.image} alt={result.title} />
              <h3>{result.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
