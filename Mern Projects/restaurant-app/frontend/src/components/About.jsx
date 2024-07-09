import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            dolores optio dolor et minima quam cupiditate eos doloremque.
            Maiores molestiae totam quis esse, earum repellendus odio ab vitae
            fuga dolorem maxime, sit eos porro quidem, facere ullam suscipit non
            sapiente consequuntur deleniti? Rerum molestias ipsa quas, eaque
            commodi nulla doloribus.
          </p>
          <Link to={"/"}>
            Explore Menu
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="./about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
