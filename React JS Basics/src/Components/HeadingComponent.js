import { LOGO_URL } from "../Utilities/constants";
import { useState } from "react";

const HeadingComponent = () => {
  const [btnLoginReact, setBtnLoginReact] = useState("Login");
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
