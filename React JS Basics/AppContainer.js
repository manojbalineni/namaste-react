import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./src/Components/HeadingComponent";
import BodyComponent from "./src/Components/BodyComponent";
// const styleCards = {
//   backgroundColor: "#f0f0f0",
// };

const RestroCardComponent = (props) => {
  const { restaurant } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    restaurant?.info;
  const imageId = cloudinaryImageId.replace("Image preview", "");

  return (
    <div
      className="rest-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="rest-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          imageId
        }
        alt="logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

const AppComponent = () => {
  return (
    <div className="app-conatiner">
      <HeadingComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);
