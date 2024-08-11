import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import Navbar from "./components/Navbar";
import Update from "./components/Update"; // Import the Update component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} /> {/* Add the route for Update component */}
      </Routes>
    </>
  );
}

export default App;
