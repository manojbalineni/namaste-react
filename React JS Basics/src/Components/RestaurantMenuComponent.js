import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utilities/useRestaurantMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const RestaurantMenuComponent = () => {
  const { resId } = useParams();
  console.log(resId);
  const menuList = useRestaurantMenu(resId);
  const [showItemIndex, setShowItemIndex] = useState(null);
  if (menuList === null) {
    return <ShimmerUI />;
  }
  const { name, avgRating, cuisines, costForTwoMessage } =
    menuList?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  console.log(
    menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  console.log(menuList?.data?.cards[2]?.card?.card?.info);

  const categrories =
    menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categrories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <h2 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      {categrories.map((c, index) => (
        <ResCategory
          key={c?.card?.card?.categoryId}
          data={c?.card?.card}
          showItemIndex={index === showItemIndex ? true : false}
          setShowItemIndex={() => setShowItemIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenuComponent;
