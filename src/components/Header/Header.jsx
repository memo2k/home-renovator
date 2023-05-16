import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import "./header.scss";

const Header = () => {
    const [hideClass, setHideClass] = useState("");
    const [hamburger, setHamburger] = useState("hamburger");
    const [ulClass, setUlClass] = useState("");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    let prevScrollPos = window.pageYOffset;
    window.addEventListener('scroll', () => {
        let currentScrollPos = window.pageYOffset;

        if (currentScrollPos > 100) {
            if (prevScrollPos < currentScrollPos) {
                setHideClass("hide")
            } else {
                setHideClass("");
            }
        } else if (currentScrollPos === 0) {
            setHideClass("");
        }

        prevScrollPos = currentScrollPos;
    });

    const updateMenu = () => {
        if (!isMenuClicked) {
            setHamburger("hamburger active");
            setUlClass("active");
        } else {
            setHamburger("hamburger");
            setUlClass("");
        }
        setIsMenuClicked(!isMenuClicked);
    }

    const linkClick = () => {
        setHamburger("hamburger");
        setUlClass("");
        setIsMenuClicked(false);
    }
    return (
        <header className={`header ${hideClass}`}>
            <div className="shell">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to="/" onClick={linkClick}>
                            <img src={logo} alt="" width="1000" height="186" />
                        </Link>
                    </div>

                    <div className="header__nav">
                        <nav>
                            <ul className={ulClass}>
                                <li>
                                    <Link to="/services" onClick={linkClick}>Services</Link>
                                </li>

                                <li>
                                    <Link to="/work" onClick={linkClick}>Our Work</Link>
                                </li>

                                <li>
                                    <Link to="/about" onClick={linkClick}>About</Link>
                                </li>

                                <li>
                                    <Link to="/contact" onClick={linkClick} className='btn btn--blue'>Start your project</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className={hamburger} onClick={updateMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header