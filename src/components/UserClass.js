import React from "react";
// import Test from "./test";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("UserClass constructor - index : " + this.props.index);
    this.state = {
      count: 0,
      count1: 1,
      count2: 2
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Hello");
    }, 1000);
    console.log("component did mount - index : " + this.props.index);
  }

  componentDidUpdate() {
    console.log("Component did update - index : " + this.props.index);
  }

  // this is used for clean up purpose
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component will unmount - index : " + this.props.index);
  }

  render() {
    const { name, location, index } = this.props;
    console.log("User class render - index : " + index);

    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            // this will update only the count value and will not affect other state variables.
            this.setState({
              count: this.state.count + 1
            });
          }}
        >
          Increment
        </button>
        <h2>Name : {name}</h2>
        {/* <Test index={index} /> */}
        <h3>Location : {location}</h3>
      </div>
    );
  }
}

export default UserClass;
