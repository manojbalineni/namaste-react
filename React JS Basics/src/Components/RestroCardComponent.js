import { CDN_URL } from "../Utilities/constants";

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
      <img className="rest-logo" src={CDN_URL + imageId} alt="logo" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestroCardComponent;
