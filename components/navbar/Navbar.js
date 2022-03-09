import React from 'react';
import css from 'styled-jsx/css'
import Link from 'next/link';
import {FaDeviantart} from 'react-icons/fa'
import {FaDiscord} from "react-icons/fa";
import {FaIdCard} from "react-icons/fa";

function Navbar() {
  return (
    <>
      <style jsx>{styles}</style>
      <nav>
        <div className="logo"></div>
        <div className="links">
          <Link href="/">
            <a href="/">Home</a>
          </Link>
          <Link href="/about">
            <a href="/about">About</a>
          </Link>
        </div>
        <div className="social"></div>
        <a href="https://www.deviantart.com/galactiic-pups">
          <FaDeviantart />
        </a>
        <a href="https://redwood-forests.carrd.co/#">
          <FaIdCard />
        </a>
        <a href="https://discord.com/">
          <FaDiscord />
        </a>
      </nav>
    </>
  );
}

const styles = css`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 20px;
  }
  .logo {
    margin-left: auto;
  }
  .links {
    display: flex;
    margin-left: 40px;
  }
  a {
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 10px;
    margin-right: 10px;
    transition: all 0.2s;
    vertical-align: middle;
    color: rgba(255, 255, 255, 0.8);
  }
  a:hover {
    color: rgba(255, 255, 255, 1);
    transform: scale(1.05);
  }
  .social a {
    font-size: 28px;
  }
`;

export default Navbar;
