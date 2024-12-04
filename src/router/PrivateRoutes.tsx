import React, { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../src/contexts/AuthContext";
import { AuthResponse } from "../../services/model";


interface PrivateRouteProps {
    children: ReactNode; // Définit les enfants comme une propriété
  }
  
const PrivateRoute = () => {
  const user:any = useAuth() ;
  console.log("ppppp",user);
  
  if (!user.access_token) return <Navigate to="/" />;
  return <Outlet />;
};

export default PrivateRoute;
