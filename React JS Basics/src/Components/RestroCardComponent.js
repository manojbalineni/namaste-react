import { useContext } from "react";
import { CDN_URL } from "../Utilities/constants";
import UserContext from "../Utilities/UserContext";

const RestroCardComponent = (props) => {
  const { restaurant } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    restaurant?.info;
  const imageId = cloudinaryImageId.replace("Image preview", "");

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="rest-card m-4 p-4 w-[250px] bg-gray-50 rounded-2xl hover:bg-gray-200">
      <img
        className="rounded-lg w-[220px] h-[200px]"
        src={CDN_URL + imageId}
        alt="logo"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime}</h4>
      <h1>{loggedInUser}</h1>
    </div>
  );
};

export const PromotedRestroCardComponent = (RestroCardComponent) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-md">
          {" "}
          Promoted
        </label>
        <RestroCardComponent {...props} />
      </div>
    );
  };
};

export default RestroCardComponent;
