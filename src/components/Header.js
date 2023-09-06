import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  // console.log("header rendered");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between p-3">
      <div>
        <img src={LOGO_URL} alt="Logo" className="w-20 " />
      </div>
      <div>
        <ul className="flex items-center">
          <li className="p-5">{onlineStatus ? "online:✅" : "offline:🔴"}</li>
          <li className="p-5">
            <Link to="/"> Home </Link>
          </li>
          <li className="p-5">
            <Link to="/about"> About Us </Link>
          </li>
          <li className="p-5">
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li className="p-5">
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className="p-5">Cart</li>
          <button
            className="px-5 py-1 border border-gray-800"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
          <button className="px-5 py-1">{loggedInUser}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
