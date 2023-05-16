import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import "./header.scss";

const Header = () => {
    const [hideClass, setHideClass] = useState("");
    
    let prevScrollPos = window.pageYOffset;
    window.addEventListener('scroll', () => {
        let currentScrollPos = window.pageYOffset;

        if (currentScrollPos > 100) {
            if (prevScrollPos < currentScrollPos) {
                setHideClass("hide")
            } else {
                setHideClass("");
            }
        }

        prevScrollPos = currentScrollPos;
    });

    return (
        <header className={`header ${hideClass}`}>
            <div className="shell">
                <div className="header__inner">
                    <div className="header__logo">
                        <Link to="/">
                            <img src={logo} alt="" width="1000" height="186" />
                        </Link>
                    </div>

                    <div className="header__nav">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/services">Services</Link>
                                </li>

                                <li>
                                    <Link to="/work">Our Work</Link>
                                </li>

                                <li>
                                    <Link to="/about">About</Link>
                                </li>

                                <li>
                                    <Link to="/contact" className='btn btn--blue'>Start your project</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header