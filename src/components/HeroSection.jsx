import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useNavigate } from "react-router-dom";
import MyImage from "../assets/Keshav_Img2.png";

export default function HeroSection() {
  const el = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "beautiful user interfaces",
        "scalable web apps",
        "modern frontend experiences",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="min-h-screen bg-[#0B0F19] text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-indigo-400 mb-3 text-sm tracking-widest">
            FULL STACK DEVELOPER
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-white">Keshav Vijayvergiya</span>
          </h1>

          <h2 className="mt-4 text-xl text-gray-400">
            I build{" "}
            <span ref={el} className="text-indigo-400 font-semibold"></span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-lg leading-relaxed">
            I create modern, responsive, and high-performance web applications
            using the MERN stack. Passionate about clean UI, smooth UX, and
            scalable solutions.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-lg transition"
            >
              Contact Me
            </button>

            <button
              onClick={() => navigate("/projects")}
              className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-white/10 transition"
            >
              View Projects
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={MyImage}
              alt="Keshav"
              //   className="w-72 md:w-96 rounded-2xl shadow-2xl hover:scale-105 transition duration-300"
              className="w-72 md:w-96 rounded-2xl mask-[linear-gradient(to_top,transparent_0%,black_40%)] drop-shadow-[0_0_25px_rgba(99,102,241,0.3)] hover:scale-105 transition duration-300"
            />

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-indigo-500/20 blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
