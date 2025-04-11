import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utilities/useRestaurantMenu";

const RestaurantMenuComponent = () => {
  const { resId } = useParams();
  console.log(resId);
  const menuList = useRestaurantMenu(resId);
  if (menuList === null) {
    return <ShimmerUI />;
  }
  const { name, avgRating } = menuList?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menuList?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  return (
    <div>
      <h1>{name}</h1>
      <p>Rating is {avgRating}</p>
      <h3> Menu of the Restaurant</h3>

      <ul>
        {itemCards.map((menu) => (
          <li key={menu.card.info.id}>
            {menu.card.info.name} - price is {menu.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenuComponent;
