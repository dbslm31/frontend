import React from "react";

//React-icons
import { TbRosetteNumber1 } from "react-icons/tb";
import { TbRosetteNumber2 } from "react-icons/tb";
import { TbRosetteNumber3 } from "react-icons/tb";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <h2>How It Works ?</h2>

      <div className="steps">
        <p className="step">
          <TbRosetteNumber1 className="icon" />
          Type an ingredient on the search bar
        </p>
        <p className="step">
          <TbRosetteNumber2 className="icon" />
          Choose the recipe you want
        </p>
        <p className="step">
          <TbRosetteNumber3 className="icon" />
          Add it to your menu
        </p>
      </div>
    </div>
  );
};

export default HowItWorks;
