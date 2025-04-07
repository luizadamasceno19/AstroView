import React, { useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import "./styles/App.css";

function App() {
  useEffect(() => {
    const starContainer = document.querySelector(".stars");

    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.animationDuration = `${3 + Math.random() * 7}s`;
      starContainer.appendChild(star);
    }
  }, []);

  return (
    <div className="App">
      <div className="stars"></div>
      <div className="main-content">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
