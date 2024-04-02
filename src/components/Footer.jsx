import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="px-28 py-5 flex flex-wrap justify-between">
        <div className="flex flex-col mb-20">
          <h4 className="mb-5 font-bold text-lg">LUXELANE</h4>
          <h4>Follow us</h4>
          <div>
            <FontAwesomeIcon className="px-0.5" icon={faTwitter} />
            <FontAwesomeIcon className="px-0.5" icon={faInstagram} />
            <FontAwesomeIcon className="px-0.5" icon={faLinkedin} />
            <FontAwesomeIcon className="px-0.5" icon={faFacebook} />
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className="mb-5 font-semibold text-lg">About</h4>
          <Link className="no-underline text-sm mb-2" href="#">
            About us
          </Link>
          <Link className="no-underline text-sm mb-2" href="#">
            Delivery Information
          </Link>
          <Link className="no-underline text-sm mb-2" href="#">
            Privacy Policy
          </Link>
          <Link className="no-underline text-sm mb-2" href="#">
            Terms & Conditions
          </Link>
          <Link className="no-underline text-sm mb-2" href="#">
            Contact Us
          </Link>
        </div>

        <div className="flex flex-col">
          <h4 className="mb-5 font-semibold text-lg">My Account</h4>
          <Link className="no-underline text-sm mb-2" href="#">
            Sign In
          </Link>
          <Link className="no-underline text-sm mb-2" href="#">
            View Cart
          </Link>
          <Link className="no-underline text-sm mb-2" href="#">
            My Wishlist
          </Link>
          <Link className="no-underline text-sm mb-2" href="#">
            Track My Order
          </Link>
          <Link className="no-underline text-sm mb-2" href="#">
            Help
          </Link>
        </div>
        <div className="text-center w-full mt-10">
          <p>© 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
