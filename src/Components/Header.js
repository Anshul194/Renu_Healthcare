import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      expand="lg"
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg px-1 border-b border-gray-700 sm:mb-1 sm:ml-1 sm:mr-1 rounded-t-lg sm:rounded-none h-1/10 sm:w-11/12 m-auto"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="flex items-center">
          <div className="bg-white p-1 rounded-full">
            <img
              src="./logo.png"
              className="h-10 w-10 rounded-full"
              alt="logo"
            />
          </div>
          <span className="ml-3 text-xl font-bold text-white tracking-wide">BRAND</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 text-white focus:outline-none focus:ring-2 focus:ring-white">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto items-center">
            {[
              { to: "/", label: "HOME" },
              { to: "/About", label: "ABOUT" },
              { to: "/Donate", label: "DONATE" },
              { to: "/Gallery", label: "GALLERY" },
              { to: "/Events", label: "EVENTS" },
              { to: "/Contact", label: "CONTACT" },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="px-3 py-2 text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white hover:bg-gray-700 rounded transition duration-300 ease-in-out mx-1"
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/Login" className="ml-2">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out uppercase tracking-wider text-sm">
                Login
              </button>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;