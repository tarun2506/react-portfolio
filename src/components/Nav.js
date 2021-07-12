import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <Navbar>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          ></Line>
        </li>
        <li>
          <Link to="/work">My Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          ></Line>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          ></Line>
        </li>
      </ul>
    </Navbar>
  );
};

const Navbar = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 10rem;
      position: relative;
    }
  }
  #logo {
    font-size: 1.7rem;
    font-family: "Lobster", sans-serif;
    font-weight: lighter;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 1rem;
    #logo {
      display: inline-block;
      margin: 2rem;
    }
    ul {
      padding: 2rem 1rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1200px) {
    left: 0%;
  }
`;

export default Nav;
