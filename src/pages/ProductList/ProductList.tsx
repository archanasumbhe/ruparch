import React from "react";
import "./ProductList.scss";
import ProductCard, { Product } from "../../components/ProductCard";
import { useParams } from "react-router-dom";
import { womenShopping, menShopping } from "../../data/Products";
import { Header } from "../../components/Header/Header";

const ProductList: React.FC = () => {
  const { category } = useParams();

  const products: Product[] = category === "Men" ? menShopping : womenShopping;
  return (
    <>
      <Header />
      <div className="listingContainer">
        <div className="listWrapper">
          {products?.map((product, index) => {
            return <ProductCard product={product} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
