import React from "react";

const Card = ({message, name, company, image}) => {
    return(
        <div className="testimonial-card">
            <div className="testimonial-text">
                <p>
                    {message}

                </p>
            </div>
            <div className="testimonial-author">
                <div className="testimonial-author-img">
                    <img src={image} alt="Client Name"/>

                </div>
                <div className="testimonial-author-info">
                    <h3>
                        {name}
                    </h3>
                    <small>{company}</small>
                </div>
            </div>
        </div>
    )
}
export default Card;
