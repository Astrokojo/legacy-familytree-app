import React from "react"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
function Footer() {
    return (
        <><div className="bottom-message primary-heading">
            <h4>Lets work together.<br /><span>Get in touch.</span></h4>
        </div><footer>
                <p>© K.A.O.S</p>
                <ul>
                    <li>
                        <FaSquareXTwitter />
                        <a href="#">Twitter</a>
                    </li>
                    <li>

                        <FaLinkedin />
                        <a href="#">Linkedin</a>
                    </li>
                    <li>

                        <CiMail />
                        <a href="#">Mail</a>
                    </li>
                </ul>
            </footer></>

    )
}
export default Footer;