import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to={"/"} className="logolink">
      <div className="logo">
        <div className="firstletter">R</div>
        <div>eadable</div>
      </div>
    </Link>
  );
};

export default Logo;
