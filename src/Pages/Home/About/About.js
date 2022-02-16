import React from "react";
import "./About.css";
import bg from "../../../images/sectionBg.png";
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <div
      style={{
        background: `url(https://wallpaperaccess.com/full/4129330.jpg)`,
        backgroundAttachment: "fixed",
      }}
      className="about-container"
    >
      <div className="about-heading">
        <Zoom left cascade>
          <h4>About Us</h4>
          <p>
            Mahima Motors mission is to bring delight in two-wheeler buying, we
            offer a bouquet of reliable tools and services to help motorcycle
            and scooter consumers decide on buying the right two-wheeler, at the
            right price and from the right partner.
          </p>
        </Zoom>
      </div>

      <div>
        <h4 className="core-heading"> Our Core Values</h4>
        <div className="core-values">
          <Zoom>
            <div className="box">
              <img
                src="https://imgd.aeplcdn.com//0x0/cw/static/about-us/icon-respect.svg"
                alt=""
              />

              <div className="core-info">
                <h6>RESPECT</h6>
                <p>We respect our colleagues, customers and partners</p>
              </div>
            </div>
          </Zoom>

          <Zoom>
            <div className="box">
              <img
                src="https://imgd.aeplcdn.com//0x0/cw/static/about-us/icon-agile.svg"
                alt=""
              />

              <div className="core-info">
                <h6>AGILITY</h6>
                <p>We are extremely open and adaptable</p>
              </div>
            </div>
          </Zoom>
          <Zoom>
            <div className="box">
              <img
                src="https://imgd.aeplcdn.com//0x0/cw/static/about-us/icon-ownership.svg"
                alt=""
              />

              <div className="core-info">
                <h6>OWNERSHIP</h6>
                <p>We take ownership of our results</p>
              </div>
            </div>
          </Zoom>

          <Zoom>
            <div className="box">
              <img
                src="https://imgd.aeplcdn.com//0x0/cw/static/about-us/icon-we-before-i.svg"
                alt=""
              />

              <div className="core-info">
                <h6>WE BEFORE I</h6>
                <p>We always put our company ahead of ourselves</p>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default About;
