import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div>
      <div className="pt-32">
        <div className="flex py-10 px-20 justify-between items-center">
          <div className="w-2/5">
            <span className="text-sm">GET IN TOUCH</span>
            <h2 className="text-2xl py-5 font-bold">
              Visit one of our agency locations or contact us today
            </h2>
            <h3 className="text-base pb-3">Head Office</h3>
            <div>
              <li className="list-none flex py-2.5">
                <FontAwesomeIcon className="text-sm pr-2" icon={faMap} />
                <p className="m-0 text-sm">
                  Muddiyansage wattha thalalla Gandara
                </p>
              </li>
              <li className="list-none flex py-2.5">
                <FontAwesomeIcon className="text-sm pr-2" icon={faEnvelope} />
                <p className="m-0 text-sm">
                  Muddiyansage wattha thalalla Gandara
                </p>
              </li>
              <li className="list-none flex py-2.5">
                <FontAwesomeIcon className="text-sm pr-2" icon={faPhone} />
                <p className="m-0 text-sm">076-7878581</p>
              </li>
              <li className="list-none flex py-2.5">
                <FontAwesomeIcon className="text-sm pr-2" icon={faClock} />
                <p className="m-0 text-sm">
                  Monday to Saturday: 9.00am to 16.00pm
                </p>
              </li>
            </div>
          </div>

          <div className="w-1/2 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.808802525475!2d-1.2565554843351678!3d51.75481970040356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2slk!4v1676759299222!5m2!1sen!2slk"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full"
            >
              {" "}
            </iframe>
          </div>
        </div>

        <div className="m-8 p-20 border">
          <form action="form">
            <span>LEAVE A MESSAGE</span>
            <h2 className="text-2xl py-5 font-bold">
              We love to hear from you
            </h2>
            <input
              className="w-full px-6 py-7 outline-none border mb-10"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-full px-6 py-7 outline-none border mb-5"
              type="text"
              placeholder="E-mail"
            />
            <input
              className="w-full px-6 py-7 outline-none border mb-5"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="w-full px-6 py-7 outline-none border mb-5"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            />
            <button className="normal">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
