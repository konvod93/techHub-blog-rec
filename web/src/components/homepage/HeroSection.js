import React from "react";
import { Link } from "gatsby";
import { HeroSectionStyles } from "../../styles/homePage/HeroSectionStyles";
import ParagraphText from "../typography/ParagraphText";
import Button from "../buttons/Button";
import { StaticImage } from "gatsby-plugin-image";

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="Left">
            <h1 className="hero__heading">
              {" "}
              Explore The World With Technology
            </h1>
            <ParagraphText className="hero__text">
              Ea excepteur tempor nulla officia non culpa exercitation occaecat.
            </ParagraphText>
            <Button to="/blogs" tag={Link} className="hero__button">
              Explore Blogs
            </Button>
          </div>
          <div className="right">
            <StaticImage
            className="hero__image"
            src="../../images/vr-guy.jpg"
            alt="vr guy"
            placeholder='blurred'
            objectPosition='50% 30%'
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
