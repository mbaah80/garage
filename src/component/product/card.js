import react from "react";

const productCard = ({ price, location, name, image }) => {
    return(
        <div className="product-card">
            <img src={image} alt="Car Image"
                 className="product-image"/>
            <div className="product-info">
                <div className="product-price-location">
                    <p className="product-price"><span>₵</span> {price}</p>
                    <p className="product-location">{location}</p>
                </div>
                <h2 className="product-name">{name}</h2>
                <button className="product-button">Buy Now</button>
            </div>
        </div>
    )
}
export default productCard;
