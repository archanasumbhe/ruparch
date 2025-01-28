import React from "react";
import { useRoutes } from "react-router-dom";
import ProductList from "../pages/ProductList/ProductList";
import Home from "../pages/Home/home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

const router: React.FC = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/productList/:category" , element: <ProductList /> },
    { path: "/productDetails" , element: <ProductDetails /> },
  ];

  const element = useRoutes(routes);
  return element;
};

export default router;
