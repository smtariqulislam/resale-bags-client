import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="px-4 py-5  bg-violet-700  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <Link
        to="/"
        aria-label="Old Bag Shop"
        title="Old Bag Shop"
        className="mb-8 inline-flex items-center"
      >
        <svg
          class="w-8 text-deep-purple-accent-400"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeWidth="2"
          strokeLinecap="round"
          strokeMiterlimit="10"
          stroke="currentColor"
          fill="none"
        >
          <rect x="3" y="1" width="7" height="12" />
          <rect x="3" y="17" width="7" height="6" />
          <rect x="14" y="1" width="7" height="6" />
          <rect x="14" y="11" width="7" height="12" />
        </svg>
        {/* <img className="w-14 text-deep-purple-accent-400" src={logo} alt="" /> */}

        <span class="ml-2  text-xl font-bold tracking-wide text-gray-100 uppercase">
          Old Bag Shop
        </span>
      </Link>
      <ul className="permalinks ">
        <li>
          <Link
            to="/home"
            aria-label="Home"
            title="Home"
            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/catorgory"
            aria-label="Home"
            title="Home"
            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            All Catorgory
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            aria-label="Blog"
            title="Blog"
            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            aria-label="About us"
            title="About us"
            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            About us
          </Link>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://facbook.com">
          <FaFacebookF></FaFacebookF>
        </a>
        <a href="https://facbook.com">
          <FaLinkedin></FaLinkedin>
        </a>
        <a href="https://facbook.com">
          <FaTwitter></FaTwitter>
        </a>
      </div>
      <div className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-400">
        <small> &copy; Old Bag Shop. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
