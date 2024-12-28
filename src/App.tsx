import React from "react";
import { Route, Routes } from "react-router-dom";

//Component
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Pages
import Hero from "./Pages/Hero";
import Cart from "./Pages/Cart";
import AuthProtected from "./ProtectedRoutes/AuthProtected";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route element={<AuthProtected />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
