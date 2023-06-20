import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Recipe from "../pages/Recipe";
import Menu from "../pages/Menu";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
