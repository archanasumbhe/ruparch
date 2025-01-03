import React from "react";
import './Home.scss'
import manShopping from "../../assets/manShopping.webp"
import womanShopping from "../../assets/womanShopping.png"
import banner from "../../assets/banner.jpg"
import { useNavigate } from "react-router-dom";

const Home : React.FC = () =>{
    const navigate = useNavigate()

    const handleClickOnCard = (category : string) =>{
        navigate(`/productList/${category}`);
    }
    return(
        <div className="homeContainer">
            <div className="bannerContainer">
                <img src={banner} alt="banner" />
            </div>
            <div className="categoryContainer" >
                <div className="womenCategory"    onClick={() => handleClickOnCard("Men")}>
                    <img src={manShopping} alt="manShopping"/>
                </div>
                <div className="menCategory"    onClick={() => handleClickOnCard("Women")}>
                    <img src={womanShopping} alt="womanShopping"/>
                </div>
            </div>
        </div>
    )
}
export default Home
