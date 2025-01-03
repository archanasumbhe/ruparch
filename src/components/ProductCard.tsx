import React from "react";

const ProductCard : React.FC = ({product}) =>{
    return(
        <div className="productCard">
            <img src={product?.image} alt="dressImg" />
            <div>{product?.brand}</div>
            <div>{product?.description}</div>
            <div>Rs.{product?.price}</div>

        </div>
    )
    
}
export default ProductCard;