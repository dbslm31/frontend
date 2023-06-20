import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//React icons
import { AiOutlineRead } from "react-icons/ai";
import { BsBookmarkPlus } from "react-icons/bs";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //Submit Event
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get("http://localhost:5001/recipes/search", {
        query,
      });
      setSearchResults(response.data.results);
      console.log("result", response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  //Add Recipe to Menu table in DB
  const addToMenu = async (recipeId, recipeUrl) => {
    try {
      const response = await axios.post(
        `http://localhost:5001/recipes/${recipeId}`,
        { recipeUrl }
      );
      console.log("Recipe added to menu:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && (
        <div>
          Here are your results for{" "}
          <span style={{ color: "#59a951" }}>"{query}"</span>
        </div>
      )}
      <div>
        {searchResults.map((result) => (
          <div key={result.id} className="recipe-card">
            <img src={result.image} alt={result.title} className="recipe-img" />
            <h3 className="recipe-title">{result.title}</h3>
            <p className="recipe-links">
              <Link className="link" to={`/recipe/${result.id}`}>
                <AiOutlineRead /> See recipe
              </Link>
              <Link
                className="link"
                onClick={() => addToMenu(result.id, result.url)}
                to={`/recipe/${result.id}`}
              >
                <BsBookmarkPlus /> Add to my menu
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
