import { LOGO_URL } from "../Utilities/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilities/useOnlineStatus";
import UserContext from "../Utilities/UserContext";
import { useSelector } from "react-redux";

const HeadingComponent = () => {
  const [btnLoginReact, setBtnLoginReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

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
          <li className="px-4 font-bold text-xl">
            <Link to="/cart"> Cart - {cartItems.length} items</Link>
          </li>
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
          <li className="px-4 font-bold text-lg">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeadingComponent;
