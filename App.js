// importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

//this create an object
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React using parcel"
);

//creates a Root for ReactDOM for all the DOM manipulation can be done
const root = ReactDOM.createRoot(document.getElementById("root"));

//converts object into HTML element
root.render(heading);
