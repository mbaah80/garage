import React from "react";

const Price = () => {
    return(
        <section className="price-container" id="pricing">
            <p className="small">Ready To Get Started</p>
            <h2 className="product-heading">
                Choose a plan
            </h2>
            <div className="price-content">
                <div className="pricing-card">
                    <div className="pricing-header">
                        <h2 className="pricing-title">Basic Subscription</h2>
                        <h3 className="pricing-price">₵9,999<span>/car</span></h3>
                    </div>
                    <div className="pricing-image">
                        <img
                            src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Honda-City--160320231754.jpg&w=872&h=578&q=75&c=1"
                            alt="Car"/>
                    </div>
                    <div className="price-details">
                        <div className="pricing-features">
                            <p>
                                Dummy Information
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto commodi
                                cumque dicta numquam quam repellendus officia voluptatibus fugit
                            </p>
                        </div>
                        <div className="pricing-action">
                            <button className="button-pricing-card">
                                Subscription
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pricing-card">
                    <div className="pricing-header">
                        <h2 className="pricing-title">Economy Subscription</h2>
                        <h3 className="pricing-price">₵19,999<span>/car</span></h3>
                    </div>
                    <div className="pricing-image">
                        <img
                            src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mahindra-Scorpio-N-300620221053.jpg&w=872&h=578&q=75&c=1"
                            alt="Car"/>
                    </div>
                    <div className="price-details">
                        <div className="pricing-features">
                            <p>
                                Dummy Information
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto commodi
                                cumque dicta numquam quam repellendus officia voluptatibus fugit
                            </p>
                        </div>
                        <div className="pricing-action">
                            <button className="button-pricing-card">
                                Choose Plan
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pricing-card">
                    <div className="pricing-header">
                        <h2 className="pricing-title">Corporate Subscription</h2>
                        <h3 className="pricing-price">₵29,999<span>/car</span></h3>
                    </div>
                    <div className="pricing-image">
                        <img
                            src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mahindra-Scorpio-Classic-070920221220.jpg&w=872&h=578&q=75&c=1"
                            alt="Car"/>
                    </div>
                    <div className="price-details">
                        <div className="pricing-features">
                            <p>
                                Dummy Information
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis architecto commodi
                                cumque dicta numquam quam repellendus officia voluptatibus fugit
                            </p>
                        </div>
                        <div className="pricing-action">
                            <button className="button-pricing-card price-detailsCoporate">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Price;
