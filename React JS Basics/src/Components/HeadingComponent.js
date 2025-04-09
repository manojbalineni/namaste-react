import { LOGO_URL } from "../Utilities/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeadingComponent = () => {
  const [btnLoginReact, setBtnLoginReact] = useState("Login");
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnLoginReact === "Login"
                  ? setBtnLoginReact("Logout")
                  : setBtnLoginReact("Login");
              }}
            >
              {" "}
              {btnLoginReact}{" "}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeadingComponent;
