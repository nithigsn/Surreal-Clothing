import React from "react";
import { Route, Routes } from "react-router-dom";

//Component
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Pages
import Hero from "./Pages/Hero";
import Cart from "./Pages/Cart";
import AuthProtected from "./ProtectedRoutes/AuthProtected";
import Favourites from "./Pages/Favourites";
import Explore from "./Pages/Explore";
import HoodieDetails from "./Pages/ItemDetails/HoodieDetails";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route element={<AuthProtected />}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/hoodie/:id" element={<HoodieDetails />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
