import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About constructor");
  }

  componentDidMount() {
    console.log("About Component did mount");
  }

  render() {
    console.log("About render");
    return (
      <div>
        <h1>This is About Us Page</h1>
        <UserClass
          name={"Ranjith (class) "}
          location={"Chennai (class)"}
          index={1}
        />
        <User name={"Ranjith (function) "} location={"Chennai (function)"} />
      </div>
    );
  }
}

export default About;
