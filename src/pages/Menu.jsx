import React, { useState, useEffect } from "react";
import axios from "axios";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get("http://localhost:5001/menu");
      setMenuItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Menu</h1>
      {menuItems.map((menuItem) => (
        <div key={menuItem.id}>
          <h3>{menuItem.recipe_name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Menu;
