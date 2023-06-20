import React, { useState } from "react";

import "./App.css";

//React-icons
import { TbRosetteNumber1 } from "react-icons/tb";
import { TbRosetteNumber2 } from "react-icons/tb";
import { TbRosetteNumber3 } from "react-icons/tb";

//Components
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <main className="main">
      <h1>EAT-SY</h1>
      <p>Vos repas de la semaine en 1 click</p>
      <div className="steps">
        <p>
          <TbRosetteNumber1 />
        </p>
        <p>
          <TbRosetteNumber2 />
        </p>
        <p>
          <TbRosetteNumber3 />
        </p>
      </div>
      <SearchBar />
    </main>
  );
}

export default App;
