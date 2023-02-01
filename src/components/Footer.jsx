import {Tooltip } from "@chakra-ui/react";
import React from "react";
import "./footer.css";
import LOGO from "../assets/logo.PNG";
const Footer = () => {
  return (
    <div className="footerwtf">
      <div className="subfooter">
        <div className="logocontrol">
          <img src={LOGO} alt="not shown" />
          <div>
            <div className="hovereffect">
              <Tooltip
              
                placement="top"
                hasArrow
                label="instagram"
                bg="red.600"
                className="logoin"
              >
                <i class="fa-brands fa-instagram  insta fa-brandsh "></i>
              </Tooltip>
            </div>
            <div className="hovereffect1">
              <Tooltip
              
                placement="top"
                hasArrow
                label="facebook"
                bg="red.600"
                className="logoin"
              >
                <i class="fa-brands fa-facebook-f fa-brands1"></i>
              </Tooltip>
            </div>
            <div className="hovereffect2">
              <Tooltip
               
                placement="top"
                hasArrow
                label="linkedin"
                bg="red.600"
                className="logoin"
              >
                <i class="fa-brands fa-linkedin-in fa-brands2"></i>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="fontawesome">
          <ul>
            <li className="wighthigh">Quick link</li>
            <li>About</li>
            <li>FAQS</li>
            <li>Privacy Policy</li>
            <li>WTF in Update News</li>

            <li>Terms & Conditions</li>
            <li>Refund and Cancellation Rules</li>
          </ul>
        </div>
        <div className="fontawesome">
          <ul>
            <li className="wighthigh">Explore</li>
            <li>Arenas</li>
            <li>Studio</li>
            <li>Nutrition</li>
          </ul>
        </div>

        <div className="fontawesomelast">
          <ul>
            <li className="wighthigh">Contact</li>
            <div>
              <div>
                <i class="fa-solid fa-location-dot"></i>{" "}
              </div>
              <div>
                {" "}
                <li> Ro: S 1502, Amarpali Silicon city, Sector 76, Noida, Uttar
              Pradesh, India</li>
              </div>
            </div>

            <li>
              <i class="fa-solid fa-location-dot"></i>   Ho: C-86 B, Ground Floor, Sector 8, Noida, Uttar Pradesh, India
            </li>

            <li>
              <i class="fa-solid fa-phone"></i>+919523059179
            </li>
            <li>
              <i class="fa-solid fa-envelope-open-text"></i>support@wtfup.me
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
