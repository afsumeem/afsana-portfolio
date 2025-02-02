import React from "react";
import "./About.css";
import aboutImg from "../../image/about.svg";

const About = () => {
  return (
    <div id="about" className="container about-me-section text-start mt-5">
      <div className="row about-me">
        <div className="col-md-6">
          <img
            src={aboutImg}
            alt="aboutImage"
            className="w-75 d-block m-auto pt-3"
          />
        </div>

        <div className="mt-4 col-md-6 ps-4">
          <h3 className="section-title mb-5">ABOUT ME</h3>
          <p className="text-white">
            I’m Afsana Meem, a professional and Creative Web Designer with front
            end development skills. I develop websites with HTML, CSS,
            JavaScript, TypeScript, React.JS, Next.Js etc.
            <br />
            <br />I use various web technologies to develop attractive websites
            which converts visitors to customers. I develop creative and
            responsive website layouts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
