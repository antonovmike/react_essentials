import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Order from "./pages/Order";
import Footer from "./components/Footer";
import { PizzaContextProvider } from "./context/PizzaContext.jsx";

export default function App() {
  return (
    <PizzaContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PizzaContextProvider>
  );
}
