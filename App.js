// importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

//this create a react element object
const heading = React.createElement(
  "h1",
  { id: "heading", className: "head" },
  "React"
);

console.log(heading);

const jsxHeading = (
  <h1 id="heading" className="head">
    React
  </h1>
);

const Title = () => {
  return <h1>title functional component</h1>;
};

//using one component inside other component is call component composition
const Heading = () => {
  return (
    <div id="head">
      <Title />
      <h1>Heading functional component</h1>
    </div>
  );
};

console.log(jsxHeading);
//creates a Root for ReactDOM where all the DOM manipulation can be done
const root = ReactDOM.createRoot(document.getElementById("root"));

//converts react element object into HTML element
root.render(<Heading />);
