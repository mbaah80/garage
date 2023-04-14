import React, { useRef } from "react";

function Header() {
    const navbarTogglerRef = useRef(null);
    const navbarCollapseRef = useRef(null);

    const handleNavbarToggle = () => {
        navbarCollapseRef.current.classList.toggle("active");
    };

    const handleDocumentClick = (event) => {
        if (
            !navbarCollapseRef.current.contains(event.target) &&
            !navbarTogglerRef.current.contains(event.target)
        ) {
            navbarCollapseRef.current.classList.remove("active");
        }
    };

    const handleScroll = () => {
        const scrollBtn = document.querySelector(".scrollBtn");
        if (window.pageYOffset > 0) {
            scrollBtn.classList.remove("hide");
        } else {
            scrollBtn.classList.add("hide");
        }
    };

    const hideContent = () => {
        navbarCollapseRef.current.classList.toggle("active");
    };

    window.addEventListener("scroll", () => {
        const header = document.querySelector(".header");
        if (window.pageYOffset > 0) {
            header.classList.add("shadow");
        } else {
            header.classList.remove("shadow");
        }
    });

    // add the event listeners after mounting the component
    React.useEffect(() => {
        document.addEventListener("click", handleDocumentClick);
        navbarTogglerRef.current.addEventListener("click", handleNavbarToggle);
        window.addEventListener("scroll", handleScroll);

        // cleanup event listeners when unmounting the component
        return () => {
            document.removeEventListener("click", handleDocumentClick);
            navbarTogglerRef.current.removeEventListener(
                "click",
                handleNavbarToggle
            );
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <nav className="nav">
                <div className="navbar-brand">
                    <div className="logo">
                        <a href="index.html">
                            <img
                                src="/images/png-transparent-automobile-engineering-car-mechanical-engineering-electrical-engineering-blue-car-blue-car-sketch-car-accident-text-logo-removebg-preview.png"
                                alt="logo"
                                className="logo"
                            />
                        </a>
                    </div>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    ref={navbarTogglerRef}
                >
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>

                <div className="navbar-collapse" ref={navbarCollapseRef}>
                    <ul className="navItem">
                        <li className="navLink">
                            <a href="#our-products" onClick={hideContent}>
                                Our Products
                            </a>
                        </li>
                        <li className="navLink">
                            <a href="#about-us" onClick={hideContent}>
                                About Us
                            </a>
                        </li>
                        <li className="navLink">
                            <a href="#pricing" onClick={hideContent}>
                                Pricing
                            </a>
                        </li>
                        <li className="navLink">
                            <a href="#team" onClick={hideContent}>
                                Team
                            </a>
                        </li>
                        <li className="navLink">
                            <a href="#testimonials" onClick={hideContent}>
                                Testimonials
                            </a>
                        </li>
                        <li className="navLink">
                            <a href="#contact-us" onClick={hideContent}>
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header
