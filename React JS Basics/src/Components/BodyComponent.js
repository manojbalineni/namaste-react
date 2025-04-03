import RestroCardComponent from "./RestroCardComponent";
import resList from "../Utilities/mockData";
import { useState } from "react";

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="div-btn">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRest = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredRest);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
        {listOfRestaurants.map((r) => (
          <RestroCardComponent key={r.info.id} restaurant={r} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
