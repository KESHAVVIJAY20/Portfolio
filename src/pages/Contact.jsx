import React, { useRef } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLocationArrow,
  FaFacebook,
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
  const message =
    "Hello, I want to know more about your Products & Services.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message ❌");
        }
      );
  };

  return (
    <div>
      <Header />
      <Toaster position="top-right" />

      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">
          
          {/* LEFT SIDE */}
          <div className="bg-linear-to-br from-green-500 to-green-700 text-white p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Let's Connect 👋</h2>
            <p className="mb-6 text-sm">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-3">
                <FaEnvelope /> keshavvijay8@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <FaLocationArrow /> 426, keshavpura, sector-7, Kota (Rajasthan)
                324009
              </p>

              <div className="flex gap-6 mt-10 text-2xl justify-center">
                <a href="https://www.facebook.com/thermogreenenergy" target="_blank" rel="noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://www.github.com/KESHAVVIJAY20" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/company/thermogreenenergy" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/keshavvj_20" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a href={url} target="_blank" rel="noreferrer">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              />

              {/* Message */}
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;