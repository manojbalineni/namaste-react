import { useEffect } from "react";
import { MENU_URL } from "./constants";
import { useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menuList, setMenuList] = useState(null);
  useEffect(() => {
    fetchMenuOfRestaurant();
  }, []);

  const fetchMenuOfRestaurant = async () => {
    const data = await fetch(MENU_URL + resId);
    const jsonData = await data.json();
    console.log(jsonData);
    setMenuList(jsonData);
  };
  return menuList;
};

export default useRestaurantMenu;
