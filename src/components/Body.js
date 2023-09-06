import Restaurant, { withMoreRatings, withMoreRatings2 } from "./Restaurant";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);
  //  console.log("Body rendered");
  // console.log(listOfRestaurant);

  const RestaurantWithMoreRating = withMoreRatings(Restaurant);

  //this will be called only once after the component renders for the first time
  useEffect(() => {
    // console.log("use Effect called in body called");
    fetchData();
  }, []);

  // console.log("code below use effect");

  const fetchData = async () => {
    try {
      let localResList = [];
      // console.log("fetch data in body called");
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

  const onlineStatus = useOnlineStatus();

  // console.log("online status fetched");
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline. Please check your internet connection</h1>
    );
  }

  return !listOfRestaurant || listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="m-5">
        <input
          className="border border-black rounded-md"
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
          className="ml-2 px-4 py-1 bg-orange-400 rounded-lg"
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
          className="ml-5 bg-lime-400 px-5 py-1 rounded-lg"
          onClick={() => {
            const topRatedRestaurants = listOfRestaurant.filter(
              item => item.info.avgRating > 4.0
            );
            setFilteredRestaurant(topRatedRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
        <input
          className="border border-black rounded-md pl-1 ml-5"
          type="text"
          value={loggedInUser}
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map(restaurant => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.info?.avgRating >= 4.0 ? (
              <RestaurantWithMoreRating resData={restaurant} />
            ) : (
              <Restaurant resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
