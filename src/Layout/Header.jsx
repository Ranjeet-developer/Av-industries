import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <Nav>
      <div className="container">

        {/* Logo */}
        <h2 className="logo">
  <span className="logo-main">
    Av industries
    {/* <img src="/assets/logo2.png" alt="logo" className="logo-img" /> */}
  </span>
  <br />
  <span className="logo-sub">Long Power</span>
</h2>

       
        <Links>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/service">Service</Link>
          <Link href="/contact">Contact</Link>
        </Links>

       
        <div className="contact_details">
          <p className="title">
            Customer <br /> Agent
          </p>

          <div className="contact_box">
            <div className="whatsapp">
              <FaWhatsapp />
              <a
                href="https://wa.me/918219573934"
                target="_blank"
                rel="noopener noreferrer"
              >
                +91 8219573934
              </a>
            </div>

            <div className="phone">
              <FaPhoneAlt />
              <a href="tel:+918219573934">+91 8219573934</a>
            </div>
          </div>
        </div>

      </div>
    </Nav>
  );
}

/* Styled Components */

const Nav = styled.nav`
  width: 100%;
  color: #fff;
  padding: 15px 0;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);

  .container {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    margin: 0;
    line-height: 1.2;
    cursor: pointer;
  }

  .logo-main {
  font-size: 24px;
  font-weight: bold;
  color: #22c55e;
  display: inline-flex;
  align-items: center;
  gap: 5px; /* space between text and image */
}

.logo-img {
  width: 25px;
  height: 25px;
  object-fit: contain;
}

  .logo-sub {
    font-size: 20px;
    color: gray;
    letter-spacing: 1px;
  }

  /* Contact Section */
  .contact_details {
    text-align: right;
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .title {
    font-size: 16px;
   
    color: cadetblue;
  }

  .contact_box {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-left: 1px solid rgb(0, 0, 0);
    padding-left: 10px;
  }

  .whatsapp, .phone {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }

  .whatsapp svg {
    color: #25D366;
  }

  .phone svg {
    color: red;

  }

  a {
    color: black;
    text-decoration: none;
    font-size: 16px;
  }

  a:hover {
    color: #22c55e;
  }

  /* Responsive */
  @media (max-width: 900px) {
    .contact_details {
      display: none;
    }
  }
`;

const Links = styled.div`
  display: flex;
  gap: 25px;

  a {
    text-decoration: none;
    color: cadetblue;
    font-size: 25px;
    transition: all 0.3s ease;
    position: relative;
  }

  a:hover {
    color: #22c55e;
  }

  a::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    background: #22c55e;
    left: 0;
    bottom: -5px;
    transition: 0.3s;
  }

  a:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    gap: 15px;

    a {
      font-size: 14px;
    }
  }
`;