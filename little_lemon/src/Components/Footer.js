import React from "react";
import "../Styles/Footer.css";
import footerLogo from "../Images/logo.png"

function Footer () {
    return(
        <>
        <div className="footer-background">
            <div className="footer-container">
                <img src={footerLogo}/>
                <div className="footer-content">
                    <div className="doormat-naviagtion">
                        <h5>Doormat Naviagtion</h5>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Menu</a></li>
                            <li><a>Reservation</a></li>
                            <li><a>Order Online</a></li>
                            <li><a>Login</a></li>
                        </ul>
                    </div>
                    <div className="contact-us">
                        <h5>Contat Us</h5>
                        <ul>
                            <li><a>Adress</a></li>
                            <li><a>Phone Number</a></li>
                            <li><a>Email</a></li>
                        </ul>
                    </div>
                    <dvi className ="social-medial">
                        <h5>Social Medial</h5>
                        <ul>
                            <li><a>Instagram</a></li>
                            <li><a>X (Twiter)</a></li>
                            <li><a>FaceBook</a></li>
                        </ul>
                    </dvi>
                </div>
                <div className="copyright">
                    <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;