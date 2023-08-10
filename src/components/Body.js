import resList from "../utils/mockData";
import Restaurant from "./Restaurant";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  console.log(listOfRestaurant);
  return (
    <div className="body">
      <div className="btn">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter(
              item => item.info.avgRating > 4.0
            );
            setListOfRestaurant(filteredRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurant.map(restaurant => (
          <Restaurant key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
