import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("About constructor");
  }

  componentDidMount() {
    // console.log("About Component did mount");
  }

  render() {
    // console.log("About render");
    return (
      // we cannot use useContext hook in class based components so we are using Consumer component(it comes with createContext) to access the context data
      <UserContext.Consumer>
        {contextData => (
          <div>
            <h1>This is About Us Page for {contextData.loggedInUser}</h1>
            <UserClass
              name={"Ranjith (class) "}
              location={"Chennai (class)"}
              index={1}
            />
            <User
              name={"Ranjith (function) "}
              location={"Chennai (function)"}
            />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default About;
