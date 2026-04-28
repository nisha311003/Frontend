import React from "react";
import "./App.css";
import logo1 from "../src/assests/7e-logo-color.svg";
import sandwich from "../src/assests/sandwich.png";
import pic1 from "../src/assests/7NOW-26-HP-Tile.png";
import pic2 from "../src/assests/ScanSipScore-26-HP-Tile.png";
import pic3 from "../src/assests/MtnDewBronco-dfg2.png";
import image1 from "../src/assests/WhatIsEspresso-Hero-ContentHub.jpeg";
import image2 from "../src/assests/TasteTheDifference-Hero-ContentHub.jpeg";
import image3 from "../src/assests/WhatIsALatte-Hero-ContentHub.jpeg";
import image4 from "../src/assests/PumpkinSomething-Tile-Article.jpeg";
import backImage from "../src/assests/7Collection-Homepage-dbg.png";
import logo from "../src/assests/7Collection-Homepage-Logo-Pill.png";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import logo2 from "../src/assests/7e-logo-white.svg";

const App = () => {
  const socials = [
    { icon: <FaInstagram />, name: "Instagram" },
    { icon: <FaXTwitter />, name: "Twitter" },
    { icon: <FaFacebook />, name: "Facebook" },
    { icon: <FaYoutube />, name: "Youtube" },
    { icon: <FaTiktok />, name: "Tiktok" },
  ];
  return (
    <div>
      <div className="bg-green-400 p-2 text-center">
        <p>
          We accept SNAP/EBT. <u>Find a Store</u>.
        </p>
      </div>
      <nav className="flex justify-between items-center bg-black text-white px-8 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-10">
          <img src={logo1} alt="logo" className="w-8 h-8" />

          <div className="flex gap-8 font-bold text-lg">
            <p className="cursor-pointer hover:text-green-400">Food</p>
            <p className="cursor-pointer hover:text-green-400">Drinks</p>
            <p className="cursor-pointer hover:text-green-400">7REWARDS®</p>
            <p className="cursor-pointer hover:text-green-400">
              Order 7NOW® Delivery
            </p>
            <p className="cursor-pointer hover:text-green-400">
              Shop 7Collection®
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-green-400 font-semibold ">
          <p className="cursor-pointer underline">Find a Store</p>
          <p className="text-xl cursor-pointer">👤</p>
        </div>
      </nav>
      <div className="bg-black w-full min-h-screen text-white flex items-center px-12 md:px-10 overflow-hidden">

        <div className="w-[40%] space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            A Lil'Savory, A Lil'Sweet
          </h1>

          <p className="text-lg text-gray-300 max-w-md">
            The Waffle Sandwich brings the best of both worlds. Make it yours
            for $4.
          </p>

          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">
            Find a Store
          </button>
        </div>

        <div className="w-[60%] flex justify-center">
          <div className="p-4">
            <img
              src={sandwich}
              alt="sandwich"
              className="w-full scale-[1.45] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="bg-black flex justify-center gap-20 text-center py-12">
        <div className="text-white space-y-3">
          <img src={pic1} alt="" />
          <p>
            Get $7 OFF your first 7NOW® Delivery order** with code: 711TREAT
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-bold">
            Sign Up Now
          </button>
        </div>
        <div className="text-white space-y-3">
          <img src={pic2} alt="" />
          <p>GET the 7-Eleven app and reap the rewards</p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-bold">
            Get the App
          </button>
        </div>
      </div>
      <div className="w-full bg-[#57B847] flex items-center px-11 py-6">
        <div className="w-[40%] text-white space-y-2">
          <p className="text-yellow-300 font-bold text-xl">
            BUY DEW® (20 oz) WITH
          </p>

          <h1 className="text-4xl font-extrabold leading-tight">7REWARDS®</h1>

          <p className="text-lg font-semibold">TO ENTER FOR A CHANCE TO</p>

          <h1 className="text-yellow-300 text-5xl font-extrabold">
            WIN A BRONCO®
          </h1>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-full font-semibold">
            Learn More
          </button>
        </div>

        <div className="w-[60%] flex justify-end">
          <img src={pic3} alt="" className="w-full scale-110 object-contain" />
        </div>
      </div>

      <div className="bg-black text-white px-16 py-16">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-extrabold">Inside 7-Eleven</h2>
          <p className="text-green-400 font-semibold cursor-pointer">
            View All
          </p>
        </div>

        <div className="grid grid-cols-4 gap-10">
          <div className="space-y-3">
            <img
              src={image1}
              alt=""
              className="w-full h-[350px] object-cover"
            />
            <h3 className="text-lg font-extrabold">What Is Espresso?</h3>
            <p className="text-green-400 cursor-pointer font-extrabold">
              Read More
            </p>
          </div>

          <div className="space-y-3">
            <img
              src={image2}
              alt=""
              className="w-full h-[350px] object-cover"
            />
            <h3 className="text-lg font-extrabold">
              Taste The Difference: The Different Types of Coffee Beans and
              Roasts
            </h3>
            <p className="text-green-400 cursor-pointer font-extrabold">
              Read More
            </p>
          </div>

          <div className="space-y-3">
            <img
              src={image3}
              alt=""
              className="w-full h-[350px] object-cover"
            />
            <h3 className="text-lg font-extrabold">
              What is A Latte? Enjoy One Today!
            </h3>
            <p className="text-green-400 cursor-pointer font-extrabold">
              Read More
            </p>
          </div>

          <div className="space-y-3">
            <img
              src={image4}
              alt=""
              className="w-full h-[350px] object-cover"
            />
            <h3 className="text-lg font-extrabold">The Pumpkin Somethin'</h3>
            <p className="text-green-400 cursor-pointer font-extrabold">
              Read More
            </p>
          </div>
        </div>
      </div>
      <div className="bg-black py-16">
        <div className="relative">
          <img src={backImage} alt="" className="w-full" />
          <img
            src={logo}
            alt=""
            className="absolute bottom-1/2 left-30 w-[200px]"
          />
          <button className="absolute bottom-42 left-30 bg-green-600 text-white px-6 py-3 rounded-full font-semibold">
            Shop Now
          </button>
        </div>
      </div>
      <div className="bg-black py-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-16">
          LET'S SOCIALIZE
        </h1>

        <div className="max-w-8xl mx-auto grid grid-cols-2 md:grid-cols-5 divide-x divide-gray-700">
          {socials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 py-10 hover:text-gray-300 transition"
            >
              <div className="text-8xl">{item.icon}</div>
              <p className="font-extrabold">{item.name}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-lg">
          <span className="font-bold">We’re Hiring!</span> Employees can save
          15¢/gal.{" "}
          <span className="text-green-500 underline cursor-pointer">
            Apply Now
          </span>
        </p>
      </div>
      <div className="bg-white py-5 px-8 text-xs">
        <p>
          *Valid thru 04/28/2026. Consumer pays appilcable sales tax. Available
          while supplies last. Offer good at participating 7-Eleven/Speedway
          stores
        </p>
        <br />
        <p>
          **Valid thru 12/31/26. Applicable for new 7NOW® customers, on products
          from 7-Eleven only, with minimum $7 basket. Offer cannot be combines
          with any other basket discounts. 7-Eleven reserves the right to cancel
          or modify at any time. Consumer will pay taxes and applicable fees for
          delivery. Limited Delivery Area. See 7NOW App for Full Terms. ©2026
          7-Eleven, Inc. All rights reserved.
        </p>
      </div>

      <div className="bg-green-800 py-16">
        <div className="max-w-3xl mx-auto flex items-center justify-between border-b border-white/40 pb-4">
          <div className="flex items-center gap-4 text-white text-xl font-bold">
            <FaMapMarkerAlt className="text-2xl" />
            <span>Store Locator</span>
          </div>
          <FaArrowRight className="text-white text-2xl cursor-pointer" />
        </div>
      </div>

      <div className="bg-black text-white py-16 px-10">
        <div className="max-w-8xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">
          <div>
            <h2 className="font-extrabold mb-6">Get To Know Us</h2>
            <ul className="space-y-4 text-gray-300">
              <li>About 7-Eleven</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Newsroom</li>
            </ul>
          </div>

          <div>
            <h2 className="font-extrabold mb-6">Franchise Info</h2>
            <ul className="space-y-4 text-gray-300 ">
              <li>Our Business Model</li>
              <li>Franchise Process</li>
              <li>Franchising for Veterans</li>
            </ul>
          </div>

          <div>
            <h2 className="font-extrabold mb-6">How Can We Help?</h2>
            <ul className="space-y-4 text-gray-300 ">
              <li>Contact Us</li>
              <li>Feedback</li>
              <li>New Vendor Information</li>
              <li>Vendor Guidelines</li>
              <li>Financial Services</li>
              <li>Business Fuel Cards</li>
            </ul>
          </div>
          <div>
            <h2 className="font-extrabold mb-6">Download</h2>
            <ul className="space-y-4 text-gray-300">
              <li>7-Eleven App</li>
              <li>7Now Delivery App</li>
              <li>7Charge App</li>
            </ul>
          </div>

          <div className="flex items-start md:justify-end">
            <img
              src={logo2}
              alt="logo"
              className="w-24 md:w-32 object-contain"
            />
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12"></div>
      </div>
    </div>
  );
};

export default App;
