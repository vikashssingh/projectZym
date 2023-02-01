import React, { useEffect, useState } from "react";
//import { /*useSelector */} from "react-redux";
//import { Link } from "react-router-dom";
import logo from '../assets/logo1.png'
//import styled from "styled-components";
//import { FaUserCircle } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { Navigate } from "./Navbar.styled";

const Navbar = () => {
  const [Navbar, SetNavbar] = useState(false);

  const changecolor = () => {
    if (window.scrollY >= 66) {
      console.log(true);
      SetNavbar(true);
    } else {
      SetNavbar(false);
    }
  };

  useEffect(() => {
    changecolor();
    window.addEventListener("scroll", changecolor);
  }, []);

  return (
    <>
      <Navigate>
      
          <div className={Navbar ? "navb" : "navb1"}>
          <div className="logo">
          
            <img src={logo} alt="Logo" />
          </div>
            <li className="link">Fitness</li>
            <li className="link">Nutrition</li>
            <li className="link">Gyms</li>
            <li className="link">Become WTF Partner</li>
            <li className="link">About us</li>
            <li className="link">
              <Button className="btn">Login</Button>
            </li>
          </div>
    
      </Navigate>
    </>
  );
};

export default Navbar;
