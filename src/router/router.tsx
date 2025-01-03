import React from "react";
import { useRoutes } from "react-router-dom";
import ProductList from "../pages/ProductList/ProductList";
import Home from "../pages/Home/home";

const router: React.FC = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/productList/:category" , element: <ProductList /> },
  ];

  const element = useRoutes(routes);
  return element;
};

export default router;
