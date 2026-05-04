import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const phoneNumber = "9352515020";
  const message = "Hello, I want to connect with you!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-[#0B0F19] text-gray-300 pt-14 pb-6 relative">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-cyan-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-semibold text-white tracking-wide">
            Keshav Vijayvergiya
          </h1>
          <p className="text-sm text-gray-400 mt-2">Full Stack Developer</p>

          <div className="flex items-center gap-2 mt-4 text-sm">
            <FaEnvelope />
            <span>keshavvijay8@gmail.com</span>
          </div>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-white font-medium mb-3">Navigation</h2>
          <div className="flex flex-col gap-2">
            {["about", "projects", "contact"].map((item) => (
              <NavLink
                key={item}
                to={`/${item}`}
                className="relative w-fit hover:text-white transition group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-white font-medium mb-3">Connect</h2>
          <div className="flex gap-4 text-lg">
            {[
              {
                icon: <FaFacebook />,
                link: "https://www.facebook.com/thermogreenenergy",
              },
              {
                icon: <FaGithub />,
                link: "https://www.github.com/KESHAVVIJAY20",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/company/thermogreenenergy",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/keshavvj_20",
              },
              {
                icon: <FaWhatsapp />,
                link: url,
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-indigo-500/20 hover:text-white transition duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Keshav Vijayvergiya
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute right-6 bottom-6 p-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg transition"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
