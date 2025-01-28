import React from "react";
import { useNavigate } from "react-router-dom";
import './ProductCard.scss'

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
    const navigate = useNavigate()

    const onHandleClickCard = () =>{
        navigate("/productDetails")
    }
    const {product} = props
    return(
        <div className="productCard" onClick={onHandleClickCard}>
            <img src={product?.image} alt="dressImg" />
            <div className="productDetails">
            <div className="brandName">{product?.brand}</div>
            <div className="description">{product?.description}</div>
            <div className="price">Rs.{product?.price} <span className="productStrike">Rs.1599</span></div>
            </div>

        </div>
    )
    
}
export default ProductCard;