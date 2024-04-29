// import { useState } from 'react'
import "./App.css";
// import Editor from "./components/Editor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddressTypes from "./modules/AddressTypes";
import HeaderFormat from "./modules/HeaderFormat";
import NeighbourDiscovery from "./modules/NeighbourDiscovery";
import Security from "./modules/Securtiy";

function App() {
  const handleAnswer = (isCorrect, id) => {
    const element = document.getElementById(`${id}`);
    if (element) {
      if (isCorrect) {
        element.style.color = "white";
        element.style.backgroundColor = "#009c41";
        element.style.borderColor = "#009c41";
      } else {
        element.style.color = "white";
        element.style.backgroundColor = "#b50000";
        element.style.borderColor = "#b50000";
      }
    }
  };
  return (
    <main className="w-full h-screen grid place-items-center grid-rows-2 md:grid-rows-1 grid-cols-1 bg-zinc-100">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<AddressTypes handleAnswer={handleAnswer} />}
          />
          <Route
            path="/header-format"
            element={<HeaderFormat handleAnswer={handleAnswer} />}
          />
          <Route
            path="/neighbour-discovery"
            element={<NeighbourDiscovery handleAnswer={handleAnswer} />}
          />
          <Route
            path="/security"
            element={<Security handleAnswer={handleAnswer} />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
