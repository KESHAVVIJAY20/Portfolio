import React, { useEffect, useState } from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [animate, setAnimate] = useState(false);
  const phoneNumber = "9352515020"; // your number
  const message = "Hello, I want to know more about your Products & Services."; // default message

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    setAnimate(true); // trigger fade-up on mount
  }, []);

  return (
    <footer className="relative w-full p-5 text-white">
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-cyan-950 to-cyan-900 "></div>

      {/* Footer Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full px-6 text-center transition-all duration-700 ${
          animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Logo */}
        <span
          className="cursor-pointer text-5xl font-serif text-green-600 mb-10"
          onClick={() => (
            (window.location.href = "/"),
            window.scrollTo({ top: 0, behavior: "smooth" })
          )}
        >
          KESHAV
          <span className="text-black text-sm">V I J A Y V E R G I Y A</span>
          <address className="text-white text-sm items-center flex gap-2 justify-center">
            <FaEnvelope />k e s h a v v i j a y 8 @ g m a i l . c o m{" "}
          </address>
        </span>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 mb-4 justify-center text-black font-bold text-xl">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-green-600 font-semibold" : "text-white"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-green-600 font-semibold" : "text-white"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-green-600 font-semibold" : "text-white"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mb-4 text-white">
          <a
            className="hover:text-green-500 cursor-pointer"
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
            className="hover:text-green-500 cursor-pointer"
            href="https://www.linkedin.com/company/thermogreenenergy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:text-green-500 cursor-pointer"
            href="https://www.instagram.com/keshavvj_20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="hover:text-green-500 cursor-pointer"
            href={url}
            target="_blank"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Footer Text */}
        <hr className="w-full" />
        <div className="text-black text-sm text-center space-y-2 mt-4">
          {/* Copyright */}
          <p>
            &copy; {new Date().getFullYear()} Keshav Vijayvergiya. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
