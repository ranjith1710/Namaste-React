import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [menuType, setMenuType] = useState(null);
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  // console.log("start");
  const [resInfo, isLoading, isUpdateFilteredMenu] = useRestaurantMenu(resId);
  // console.log("Res menu " + isLoading);
  // console.log("Is Filtered menu needs to be updated " + isUpdateFilteredMenu);

  //Will be used to set menu items to filteredMenu
  if (isUpdateFilteredMenu) {
    const { itemCards } =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
    // console.log("assigning values to filtered menu");
    // console.log(resInfo);
    setFilteredMenu(itemCards);
  }

  const categories = !isLoading
    ? resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        category =>
          category?.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    : [];

  // console.log("Category ");
  // console.log(categories);

  // console.log("below filtered menu");

  if (isLoading) {
    return <Shimmer />;
  }

  const { name, costForTwo, avgRating } = resInfo?.cards[0]?.card?.card?.info;
  const handleItemFilter = e => {
    const value = e.target.value;
    console.log(value);
    const { itemCards } =
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card;
    if (value == "All") {
      setFilteredMenu(itemCards);
      setMenuType(null);
    } else if (itemCards) {
      const filtered = itemCards.filter(
        item => item?.card?.info?.itemAttribute?.vegClassifier == value
      );
      setFilteredMenu(filtered);
      setMenuType(value);
    }

    // console.log(value);
  };

  // console.log("above return");
  return (
    <div className="flex justify-center flex-col items-center">
      <div>
        <h1 className="font-bold text-4xl m-3">{name}</h1>
      </div>

      <div className=" w-2/12 flex justify-between">
        <div>
          <input
            type="radio"
            name="menu-type"
            value="All"
            onChange={e => handleItemFilter(e)}
            checked={menuType == null}
          />
          <label htmlFor="All" className="ml-1">
            All
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="menu-type"
            value="VEG"
            onChange={e => handleItemFilter(e)}
            checked={menuType == "VEG"}
          />
          <label htmlFor="Veg" className="ml-1">
            Veg
          </label>
        </div>
        <div>
          <input
            type="radio"
            name="menu-type"
            value="NONVEG"
            onChange={e => handleItemFilter(e)}
            checked={menuType == "NONVEG"}
          />
          <label htmlFor="NonVeg" className="ml-1">
            Non-Veg
          </label>
        </div>
      </div>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          category={category?.card?.card}
          setShowIndex={isExpand => setShowIndex(isExpand ? index : null)}
          showItems={showIndex === index}
          menuType={menuType}
        />
      ))}

      {/* <ul className="menu-list">
        {!filteredMenu ? (
          <></>
        ) : (
          filteredMenu.map(item => (
            <li key={item.card?.info?.id}>
              <MenuItem item={item.card?.info} />
            </li>
          ))
        )}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
