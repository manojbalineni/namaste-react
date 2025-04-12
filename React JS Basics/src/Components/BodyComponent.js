import RestroCardComponent, {
  PromotedRestroCardComponent,
} from "./RestroCardComponent";
import { useState, useEffect, useContext } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utilities/useOnlineStatus";
import UserContext from "../Utilities/UserContext";
const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  const { loggedInUser, setUserName } = useContext(UserContext);

  const WithPromotedRestaurantCard =
    PromotedRestroCardComponent(RestroCardComponent);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4496324&lng=78.3707122&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(json);
  };

  if (onlineStatus === false) {
    return <h1> You are offline!!!. Please check your internet connection</h1>;
  }
  if (filteredListOfRestaurants.length === 0) {
    return <ShimmerUI />;
  }
  return (
    <div className="body">
      <div className="flex items-center m-4 p-4 ">
        <input
          type="text"
          className="border border-solid border-black h-6"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className=" px-4 py-2 bg-blue-100 m-4 cursor-pointer rounded-lg text-start"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredListOfRestaurants(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-2 bg-gray-100 m-4 cursor-pointer rounded-lg"
          onClick={() => {
            const filteredRest = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredListOfRestaurants(filteredRest);
          }}
        >
          Top Rated Restaurants
        </button>

        <div>
          <input
            className="border border-black"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRestaurants.map((r) => (
          <Link key={r.info.id} to={"/restaurant/" + r.info.id}>
            {r.info.avgRating >= 4.4 ? (
              <WithPromotedRestaurantCard restaurant={r} />
            ) : (
              <RestroCardComponent restaurant={r} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
