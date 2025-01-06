import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
    </div>
  );
};

export default App;
