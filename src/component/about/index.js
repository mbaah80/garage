import React from "react";

const About = () => {
    return(
        <section className="aboutUs" id="about-us">
            <div className="aboutUsContent">
                <div className="aboutUs-imageContainer">
                    <img src="https://www.tipsntutorials.com/wp-content/uploads/Can-Used-Cars-Be-Leased.jpg" alt="image"
                         className="aboutUs-image"/>
                </div>
                <div className="aboutUs-InfoContainer">
                    <small>About Us</small>
                    <h2 className="aboutUs-heading">
                        We are a team of highly skilled and experienced automotive professionals.
                    </h2>
                    <p className="aboutUs-text">
                        We are a team of highly skilled and experienced automotive professionals. We are passionate
                        about cars and we love what we do. We are committed to providing you with the best possible
                        service. We are here to help you with all your automotive needs.
                    </p>
                    <button className="btn-primary">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    )
}
export default About;
