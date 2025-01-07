import React from "react";

export type Product = {
    image: string,
    brand: string,
    description: string,
    price: number
}

type Props = {
    product: Product
}

const ProductCard = (props: Props) =>{
    const {product} = props
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