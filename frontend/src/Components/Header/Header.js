import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo";
import Login from "../../Containers/Login";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Logo />
      </div>
      <div>
        <Link to="/posts/handlePost/create" className="link">
          Create Posts
        </Link>
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
};

export default Header;
