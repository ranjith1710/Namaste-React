import resList from "../utils/mockData";
import Restaurant from "./Restaurant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  //this will be called only once after the component renders for the first time
  useEffect(() => {
    console.log("use Effect called in body called");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let localResList = [];
      console.log("fetch data in body called");
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9678217&lng=80.2185006&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.log(error);
    }
  };

  return !listOfRestaurant || listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="btn">
        <input
          type="text"
          value={searchText}
          onChange={e => {
            const value = e.target.value;
            //if value is empty or undefined then show all the restaurants
            if (!value || value == "") {
              setFilteredRestaurant(listOfRestaurant);
            }
            setSearchText(value);
          }}
        />
        <button
          onClick={() => {
            const filteredRestaurants = !searchText
              ? listOfRestaurant
              : filteredRestaurant.filter(res =>
                  res.info.name.toLowerCase().includes(searchText)
                );

            setFilteredRestaurant(filteredRestaurants);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const topRatedRestaurants = listOfRestaurant.filter(
              item => item.info.avgRating > 4.0
            );
            setFilteredRestaurant(topRatedRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map(restaurant => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <Restaurant resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
