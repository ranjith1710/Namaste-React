import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [test, setTest] = useState("Value 1");
  // let count = 1;
  console.log("header rendered");

  // console.log(count);
  // let newValue = count;
  // console.log("new value " + newValue);

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" className="logo" />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
          <button
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
              // setTest(test === "Value 2" ? "Value 1" : "Value 2");
              // count++;
              // console.log("count " + count);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
