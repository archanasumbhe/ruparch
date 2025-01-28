import React from "react";
import DressD from "../../assets/DressD.jpg"
import './ProductDetails.scss'

const ProductDetails= () =>{
    const sizes = ["S", "M", "L", "XL", "XXL"];

    return(
        <div className="productDetailsContainer">
            {/* <div className="productImages"> */}
                <img src={DressD} alt="dress" />
            {/* </div> */}
            <div className="productDetails">
                <h1>Libas</h1>
                <div className="description">Yellow & White Printed Pure Cotton Dupatta</div>
                <div className="lineBreak"></div>
                <div className="price">₹ 210 <span className="strike-through">₹ 7999</span></div>
                <div className="size">SELECT SIZE</div>
                 <div className="sizeBtn">
                    {sizes.map((size) => (
                    <button
                    className="sizeCircles"
                    >
                        {size}
                    </button>
                    ))}
                </div>
                <div className="addToCarBtn">
                <div className="addToCarText">ADD TO BUG</div>
                </div>
            </div>
        </div>
    )

}
export default ProductDetails