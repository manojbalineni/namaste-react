import { CDN_URL } from "../Utilities/constants";

const RestroCardComponent = (props) => {
  const { restaurant } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    restaurant?.info;
  const imageId = cloudinaryImageId.replace("Image preview", "");

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
    </div>
  );
};

export default RestroCardComponent;
