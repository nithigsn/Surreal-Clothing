import React from "react";
import { Route, Routes } from "react-router-dom";

//Component
import Header from "./Components/Header";

// Pages
import Hero from "./Pages/Hero";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
