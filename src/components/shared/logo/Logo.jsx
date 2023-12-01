import React from "react";
import LogoImage from "../../../assets/images/westmontLogo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <section>
        <Link to={"/"}>
          <img src={LogoImage} alt={LogoImage} />
        </Link>
      </section>
    </>
  );
};

export default Logo;
