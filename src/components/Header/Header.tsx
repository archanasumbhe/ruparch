import { useNavigate } from "react-router-dom";
import cart from "../../assets/bag-shopping-solid.svg"
import logo from "../../assets/logo.webp";
import "./Header.scss";

export const Header : React.FC = () => {
    const navigate = useNavigate();
    const handleRedirectToCart = () => {
        navigate("/cart")
    }
      return(
          <div className="header">
              <img src={logo} alt="cart" className="mainLogo"/>
              <div className="leftOption">
                  <a>about</a>
                  <a>men</a>
                  <a>women</a>
                <img src={cart} alt="cart" onClick={handleRedirectToCart}/>
              </div>
          </div>
      )
  }