import React from "react"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
const Footer= ()=> {
    return (
        <><div className="bottom-message primary-heading">
            <h4>Lets work together.<br /><span>Get in touch.</span></h4>
        </div><footer>
                <p>© K.A.O.S</p>
                <ul>
                    <li>
                        <FaGithubSquare />
                        <a href="https://github.com/Astrokojo">Github</a>
                    </li>
                    <li>

                        <FaLinkedin />
                        <a href="https://www.linkedin.com/in/kaosei-sarfo/">Linkedin</a>
                    </li>
                    <li>

                        <CiMail />
                        <a href="mailto:astrokojo@gmail.com">Mail</a>
                    </li>
                </ul>
            </footer></>

    )
}
export default Footer;