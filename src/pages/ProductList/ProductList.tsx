import React from "react";
import './ProductList.scss'
import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router-dom";
import {womenShopping,menShopping} from "../../data/Products"

const ProductList: React.FC = () => {

const { category } = useParams(); 

  const products = category === "Men" ? menShopping : womenShopping;
  return (
    <div className="listingContainer">
    <div className="listWrapper">
      {products?.map((product, index) => {
        return(
        <ProductCard product={product} key={index}/>
        )
      }
      )}
    </div>
  </div>
  )
};

export default ProductList;
