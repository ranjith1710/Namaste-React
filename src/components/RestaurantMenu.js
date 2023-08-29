import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [menuType, setMenuType] = useState("All");
  const [filteredMenu, setFilteredMenu] = useState([]);
  const { resId } = useParams();

  console.log("start");
  const [resInfo, isLoading, isUpdateFilteredMenu] = useRestaurantMenu(resId);
  console.log("Res menu " + isLoading);
  console.log("Is Filtered menu needs to be updated " + isUpdateFilteredMenu);

  //Will be used to set menu items to filteredMenu
  if (isUpdateFilteredMenu) {
    const { itemCards } =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
    console.log("assigning values to filtered menu");
    setFilteredMenu(itemCards);
  }

  console.log("below filtered menu");

  if (isLoading) {
    return <Shimmer />;
  }

  const { name, costForTwo, avgRating } = resInfo?.cards[0]?.card?.card?.info;
  const handleItemFilter = e => {
    const value = e.target.value;
    const { itemCards } =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
    if (value == "All") {
      setFilteredMenu(itemCards);
    } else if (itemCards) {
      const filtered = itemCards.filter(
        item => item?.card?.info?.itemAttribute?.vegClassifier == value
      );
      setFilteredMenu(filtered);
    }
    setMenuType(value);
    console.log(value);
  };

  console.log("above return");
  return (
    <div className="res-menu">
      <div className="res-data">
        <h1>{name}</h1>
      </div>
      <h3>Menu</h3>
      <div className="menu-filter">
        <input
          type="radio"
          name="menu-type"
          value="All"
          onChange={e => handleItemFilter(e)}
          checked={menuType == "All"}
        />
        <label htmlFor="All">All</label>
        <input
          type="radio"
          name="menu-type"
          value="VEG"
          onChange={e => handleItemFilter(e)}
          checked={menuType == "VEG"}
        />
        <label htmlFor="Veg">Veg</label>
        <input
          type="radio"
          name="menu-type"
          value="NONVEG"
          onChange={e => handleItemFilter(e)}
          checked={menuType == "NONVEG"}
        />
        <label htmlFor="NonVeg">Non-Veg</label>
      </div>
      <ul className="menu-list">
        {!filteredMenu ? (
          <></>
        ) : (
          filteredMenu.map(item => (
            <li key={item.card?.info?.id}>
              <MenuItem item={item.card?.info} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
