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
import CheckOut from "./Pages/CheckOut/CheckOut";
import SearchResults from "./Components/SearchResults";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route element={<AuthProtected />}></Route>
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut/>} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/hoodie/:id" element={<HoodieDetails />} />
        <Route path="/results" element={<SearchResults />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
