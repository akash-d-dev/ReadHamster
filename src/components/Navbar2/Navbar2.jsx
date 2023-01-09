import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar2.css';
import logoImg from '../../images/logo.svg';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

const Navbar2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/" className="navbar-brand flex">
            <img className="logo" src={logoImg} alt="site logo" />
          </Link>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? '#fff' : '#010101'}`,
              }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? 'navbar-collapse show-navbar-collapse'
              : 'navbar-collapse'
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
