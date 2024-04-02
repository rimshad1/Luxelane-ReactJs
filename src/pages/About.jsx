import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="flex items-center px-20 justify-center pt-32">
        <img src="/img/about/a4.png" className="w-1/2 h-auto" />
        <div className="pl-10">
          <h2 className="font-bold text-4xl">Who We Are?</h2>
          <p className="font-semibold text-lg">
            We are the supplier the clothes brand in sri lanka
          </p>
          <abbr className="text-lg font-medium" title="">
            Create your own Design Clothes
          </abbr>
          <marquee
            className="mt-5"
            bgcolor="#ccc"
            loop="-1"
            scrollamount="5"
            width="100%"
          >
            Create your own creation
          </marquee>
        </div>
      </div>

      <div className="text-center flex-col px-20 mt-20">
        <h1 className="font-bold text-4xl">
          Download Our{" "}
          <Link className="underline text-blue-500" href="#">
            App
          </Link>
        </h1>
        <div className="mt-10">
          <video
            autoPlay
            muted
            loop
            src="/img/about/1.mp4"
            className="px-28 mb-10"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default About;
