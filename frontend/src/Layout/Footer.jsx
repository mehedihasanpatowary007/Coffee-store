import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import coffeeMug from "../assets/images/more/logo1.png";

const Footer = () => {
  return (
    <>
      <div className="bg-contact-bg bg-center bg-cover">
        <div className="container mx-auto pt-16 pb-5">
          <img className="h-[90px]" src={coffeeMug} alt="" />
          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-5">
              <h2 className="text-3xl font-bold text-[#331A15]">
                Espresso Emporium
              </h2>
              <p className="text-base text-gray-700">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div className="flex items-center gap-4 text-2xl text-[#331A15]">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
              </div>
              <h3 className="text-2xl font-bold text-[#331A15]">
                Get In Touch
              </h3>
              <div>
                <div className="flex items-center gap-2">
                  <span>
                    <FaPhone />
                  </span>
                  <span>+88 01533 333 333</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <MdEmail />
                  </span>
                  <span>example@gmal.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>
                    <FaLocationDot />
                  </span>
                  <span>72, Wall street, King Road, Dhaka</span>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#331A15]">
                Connect with Us
              </h1>
              <form className="flex flex-col items-start gap-5 mt-5">
                <input
                  className="px-3 py-2 outline-none border-none rounded w-full"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
                <input
                  className="px-3 py-2 outline-none border-none rounded w-full"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                />
                <textarea
                  className="px-3 py-2 outline-none border-none rounded w-full"
                  name="message"
                  id="message"
                  placeholder="Your message"
                />
                <input
                  className="px-4 py-2 text-[#331A15] border-2 border-[#331A15] rounded-full"
                  type="button"
                  value="Send Message"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-footer-bg h-[50px] flex justify-center items-center">
        <p className="text-2xl text-white">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
