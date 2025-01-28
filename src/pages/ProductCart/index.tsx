import "./ProductCart.scss";
import offer from "../../assets/discount.png";
import close from "../../assets/close.png";
import tag from "../../assets/tag.png";

import { products, womenShopping } from "../../data/Products";

export default function ProductCart() {
  return (
    <div className="productCartContainer">
      <div className="pcCards">
        <div className="pcItemLeft">
          <div className="addressStrip">
            <div className="title">Check delivery time & services</div>
            <div className="enterPinBtn">ENTER PIN CODE</div>
          </div>
          <div className="avialableOffer">
            <div className="avialableOfferTitle">
              <img src={offer} />
              Available Offers
            </div>
            <div className="avialableOfferMsg">
              <span>
                10% Instant Discount on HDFC Bank Credit Card EMI on a min spend
                of ₹3,500. TCA
              </span>
              <span>
                10% Instant Discount on HDFC Bank Credit Card EMI on a min spend
                of ₹3,500. TCA
              </span>
            </div>
            <div className="showMoreBtn">Show More</div>
          </div>
          <div className="bulkActionStrip">
            <div className="bulkActionTitle">1/1 ITEMS SELECTED</div>
            <div>
              <span className="removeBtn">REMOVE</span>|
              <span className="removeBtn">MOVE TO WISHLIST</span>
            </div>
          </div>
          {womenShopping?.map((item, index) => (
            <CartItem key={index} price={item.price} img={item.image} />
          ))}
        </div>
        <div className="pcItemRight">
          <div className="couponsApply">
            <div className="title">Coupons</div>
            <div className="couponSelect">
              <div className="couponTag">
                <img src={tag} />
                Apply Coupons
              </div>
              <div className="applyCouponBtn">Apply</div>
            </div>
            <div className="note">Support transformative social work in India</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CartItem = ({ price, img }) => {
  return (
    <div className="cartItemContainer">
      <img src={img} />
      <div className="cartItemInfo">
        <div>brand name</div>
        <div>product name</div>
        <div>sold by - </div>
        <div>{price}</div>
        <div>
          <span>Size</span>
          <span>Qty</span>
        </div>
        <div>return avialble</div>
      </div>
      <img src={close} className="closeIcon" />
    </div>
  );
};
