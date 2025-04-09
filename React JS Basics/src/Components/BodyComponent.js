import RestroCardComponent from "./RestroCardComponent";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );
  useEffect(() => {
    fetchData();
  }, []);

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
  if (filteredListOfRestaurants.length === 0) {
    return <ShimmerUI />;
  }
  return (
    <div className="body">
      <div className="div-btn">
        <input
          type="text"
          className="search-text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-button"
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
          className="filter-btn"
          onClick={() => {
            const filteredRest = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredListOfRestaurants(filteredRest);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredListOfRestaurants.map((r) => (
          <Link key={r.info.id} to={"/restaurant/" + r.info.id}>
            <RestroCardComponent restaurant={r} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
