import React from "react";
import { useAuth } from "../Context/AuthContextProvider";
import { Navigate, Outlet } from "react-router-dom";

const AuthProtected:React.FC = () => {
  const { auth } = useAuth();
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default AuthProtected;
