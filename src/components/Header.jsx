import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/Logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const phoneNumber = "9352515020";
  const message = "Hello, I Want to Connect With You.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-sm ">
      <div className="flex items-center justify-between px-4 md:px-10 py-2">
        {/* Logo */}
        <p
          className="cursor-pointer text-3xl font-serif text-green-600"
          onClick={() => (
            (window.location.href = "/"),
            window.scrollTo({ top: 0, behavior: "smooth" })
          )}
        >
          KESHAV
          <span className="text-black text-sm">V I J A Y V E R G I Y A</span>
        </p>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-600"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-600"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-600"
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex gap-4">
          <a
            className="hover:text-blue-700 cursor-pointer"
            href="https://www.facebook.com/thermogreenenergy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            className="hover:text-green-500 cursor-pointer"
            href="https://www.github.com/KESHAVVIJAY20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="hover:text-blue-300 cursor-pointer"
            href="https://www.linkedin.com/company/thermogreenenergy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:text-pink-500 cursor-pointer"
            href="https://www.instagram.com/keshavvj_20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="hover:text-green-600 cursor-pointer"
            href={url}
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>
        {/* <p className="md:hidden"><span className="text-green-900 text-2xl">Thermo</span><span className="text-green-600 text-2xl">Green</span><span className="text-green-600 text-2xl ps-2 animate-pulse">E N E R G Y</span></p> */}
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-600"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-600"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-600"
            }
          >
            Contact
          </NavLink>

          <div className="flex gap-5 pt-4">
            <a
              href="https://www.facebook.com/keshav.vijay.5030"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              className="hover:text-green-500 cursor-pointer"
              href="https://www.github.com/KESHAVVIJAY20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/keshavvj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/keshavvj_20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href={url} target="_blank">
              <FaWhatsapp />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
