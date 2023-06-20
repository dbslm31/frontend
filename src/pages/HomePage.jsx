import React from "react";
import { Link } from "react-router-dom";

//image
import Girl from "../assets/8678774.jpg";

//Components
import SearchBar from "../components/SearchBar";
import HowItWorks from "../components/HowItWorks";

function HomePage() {
  return (
    <main className="main">
      <h1>EAT-SY</h1>
      <p className="description">
        Discover Eat-sy: Your Week's Meals in 1 Click. Simplify your life with a
        complete menu generated with just one click. No more wasting hours
        searching for recipe ideas and making shopping lists. Enjoy delicious,
        balanced meals while saving valuable time. Make meal planning a breeze
        with our intuitive app.
      </p>
      <Link className="link" to={`/menu`}>
        <button className="menu-btn">See My Menu</button>
      </Link>
      <HowItWorks />
      <img src={Girl} alt="" className="home-img" />
      <SearchBar />
    </main>
  );
}

export default HomePage;
