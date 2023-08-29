import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";
const useRestaurantMenu = resId => {
  const [resInfo, setResInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdateFilteredMenu, setIsUpdateFilteredMenu] = useState(false);

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
      setIsUpdateFilteredMenu(true);
      setResInfo(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isUpdateFilteredMenu) {
    setIsUpdateFilteredMenu(false);
  }
  return [resInfo, isLoading, isUpdateFilteredMenu];
};

export default useRestaurantMenu;
