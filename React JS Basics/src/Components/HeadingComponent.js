import { LOGO_URL } from "../Utilities/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilities/useOnlineStatus";

const HeadingComponent = () => {
  const [btnLoginReact, setBtnLoginReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {onlineStatus ? "🟢" : "🔴"}{" "}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
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
