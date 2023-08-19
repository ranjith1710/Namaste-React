import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);
  const [menuType, setMenuType] = useState("All");
  const [filteredMenu, setFilteredMenu] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    console.log("use effect in fetch menu called");
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      console.log("fetch menu called");
      const response = await fetch(MENU_URL + resId);
      const json = await response.json();
      const { data } = json;
      setResInfo(data);
      const { itemCards } =
        data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card;
      setFilteredMenu(itemCards);
    } catch (error) {
      console.log(error);
    }
  };

  if (!filteredMenu || filteredMenu.length === 0) {
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
    } else {
      const filtered = itemCards.filter(
        item => item?.card?.info?.itemAttribute?.vegClassifier == value
      );
      setFilteredMenu(filtered);
    }
    setMenuType(value);
    console.log(value);
  };

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
