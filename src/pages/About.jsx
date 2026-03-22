import Header from "../components/Header";
import Footer from "../components/Footer";
import MyImage from "../assets/Keshav_Img2.png";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useNavigate } from "react-router-dom";
export default function About() {
  const el = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer", "Frontend Developer", "Mern Stack Developer"],
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
    <div>
      <Header />
      <div className="flex-1 md:flex justify-center items-center min-h-screen p-10 gap-10">
        {/* <img
          src={MyImage}
          alt="Keshav Vijayvergiya"
          className="md:w-70 md:h-70  drop-shadow-[0_0_40px_#6b7280] hover:scale-110 transition duration-300 md:rounded-b-full md:m-5"
        /> */}
        <img
          src={MyImage}
          alt="Keshav"
          className="md:w-70 md:h-70  
  mask-[linear-gradient(to_top,transparent_0%,black_50%)] 
  drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] hover:scale-120 transition duration-300 "
        />
        <div className="p-5">
          <h1 className="text-5xl font-bold mb-2">
            <span className="text-sm">Hello, I'm</span>
            <br /> Keshav Vijayvergiya
          </h1>
          <address>
            And I'm a{" "}
            <span
              ref={el}
              className="text-green-500 font-semibold text-xl"
            ></span>
          </address>
          <p className="text-lg mb-4 mt-10">
            I'm a passionate web developer with a knack for creating dynamic and
            responsive websites. With a strong foundation in HTML, CSS, and
            JavaScript, I specialize in building user-friendly interfaces and
            seamless user experiences. I thrive on turning complex problems into
            elegant solutions and am always eager to learn new technologies to
            stay ahead in the ever-evolving world of web development.
          </p>
          {/* <p className="text-lg">
            When I'm not coding, you can find me exploring the latest trends in
            technology, contributing to open-source projects, or simply enjoying
            a good cup of coffee while brainstorming my next big idea.
          </p> */}
          <button
            onClick={() => navigate("/contact")}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 cursor-pointer mt-5"
          >
            Contact Me
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
