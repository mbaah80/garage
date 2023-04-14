import react from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <div className="navbar-brand">
                    <div className="logo">
                        <a href="index.html">
                            <img
                                src="./images/png-transparent-automobile-engineering-car-mechanical-engineering-electrical-engineering-blue-car-blue-car-sketch-car-accident-text-logo-removebg-preview.png"
                                alt="logo" className="logo">
                        </a>
                    </div>
                </div>
                <button className="navbar-toggler" type="button">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>

                <div className="navbar-collapse">
                    <ul className="navItem">
                        <li className="navLink"><a href="#our-products" onClick="hideContent()">Our Products</a></li>
                        <li className="navLink"><a href="#about-us" onClick="hideContent()">About Us</a></li>
                        <li className="navLink"><a href="#pricing" onClick="hideContent()">Pricing</a></li>
                        <li className="navLink"><a href="#team" onClick="hideContent()">Team</a></li>
                        <li className="navLink"><a href="#testimonials" onClick="hideContent()">Testimonials</a></li>
                        <li className="navLink"><a href="#contact-us" onClick="hideContent()">Contact Us</a></li>
                    </ul>
                </div>

            </nav>
        </header>
    )
}
