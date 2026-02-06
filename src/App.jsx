import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Income from "./pages/Income.jsx"
import Exppenses from "./pages/Expenses.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header/>
        <h1>Broke Student!🎓</h1>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/income" element={<Income />}></Route>
          <Route path="/expenses" element={<Exppenses />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </>
  );
}

export default App;
