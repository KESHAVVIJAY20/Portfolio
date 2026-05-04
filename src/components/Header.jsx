import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const phoneNumber = "9352515020";
  const message = "Hello, I Want to Connect With You.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const navItems = [
    { name: "About", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0B0F19]/80 border-b border-white/10">
      <div className="flex items-center justify-between px-6 md:px-12 py-3">
        {/* Logo */}
        <h1
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="cursor-pointer text-lg md:text-xl font-semibold text-white tracking-wide"
        >
          Keshav<span className="text-indigo-400">.</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative transition ${
                  isActive ? "text-white" : "hover:text-white"
                }`
              }
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com" target="_blank">
            <FaGithub className="text-gray-400 hover:text-white transition" />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin className="text-gray-400 hover:text-white transition" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FaInstagram className="text-gray-400 hover:text-white transition" />
          </a>
          <a href={url} target="_blank">
            <FaWhatsapp className="text-gray-400 hover:text-white transition" />
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[#0B0F19] flex flex-col items-center justify-center gap-8 text-white text-xl transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className="hover:text-indigo-400 transition"
          >
            {item.name}
          </NavLink>
        ))}

        <div className="flex gap-6 text-2xl mt-6">
          <FaGithub />
          <FaLinkedin />
          <FaInstagram />
          <FaWhatsapp />
        </div>
      </div>
    </header>
  );
}
