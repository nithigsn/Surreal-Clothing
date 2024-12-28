import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

//Component
import Header from "./Components/Header";

// Pages
import Hero from "./Pages/Hero";
import Footer from "./Components/Footer";
import AuthProtected from "./ProtectedRoutes/AuthProtected";
import Cart from "./Pages/Cart";

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
