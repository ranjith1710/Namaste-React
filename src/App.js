// importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
import "../style.css";
import Header from "./components/Header";
import Body from "./components/Body";
/* Header
  Logo
  Nav-items
Body
  Search
  res-container
    res-card
Footer
  Copyright
  links
  contacts
  address */

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

//creates a Root for ReactDOM where all the DOM manipulation can be done
const root = ReactDOM.createRoot(document.getElementById("root"));

//converts react element object into HTML element
root.render(<App />);
