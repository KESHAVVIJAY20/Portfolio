import React, { useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLocationArrow,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const form = useRef();

  const phoneNumber = "9352515020";
  const message = "Hello, I want to connect with you!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message ❌");
        },
      );
  };

  return (
    <div className="bg-[#0B0F19] text-white min-h-screen">
      <Header />
      <Toaster position="top-right" />

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Let's Connect 👋</h2>

          <p className="text-gray-400 mb-8 max-w-md">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <div className="space-y-4 text-gray-400">
            <p className="flex items-center gap-3">
              <FaEnvelope />
              keshavvijay8@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <FaLocationArrow />
              Kota, Rajasthan, India
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            {[
              { icon: <FaGithub />, link: "https://github.com" },
              { icon: <FaLinkedin />, link: "https://linkedin.com" },
              { icon: <FaInstagram />, link: "https://instagram.com" },
              { icon: <FaWhatsapp />, link: url },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-white/5 hover:bg-indigo-500/20 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-transparent border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-indigo-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-transparent border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-indigo-500 transition"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full bg-transparent border border-gray-700 p-3 rounded-lg focus:outline-none focus:border-indigo-500 transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 py-3 rounded-lg transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
