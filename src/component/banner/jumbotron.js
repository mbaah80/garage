import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <div className="jumbotron-content">
                <div className="jumbotron-companyinfo">
                    <h1 className="jumbotron-heading">
                        Welcome To Garage AutoMobile
                    </h1>
                    <p className="jumbotron-text">
                        Welcome to Garage Automobile! Your go-to destination for quality automotive services. We're here
                        to provide you with exceptional maintenance and repair solutions. Thank you for choosing us!
                    </p>
                    <div className="actionBtn">
                        <button className="btn-primary">Get Started</button>
                        <a href="#" className="actionLink">
                            Sell all Products
                        </a>
                    </div>
                </div>
                <div className="jumbotron-companyImage">
                    <img
                        src="/images/png-clipart-car-vehicle-motorcycle-fleet-management-truck-car-van-mode-of-transport-removebg-preview.png"
                        alt="image" className="jumbotron-image"/>
                </div>
            </div>
        </div>
    )
}
    export default Jumbotron;
