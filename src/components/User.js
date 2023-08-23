import { useEffect } from "react";

const User = props => {
  const { name, location } = props;

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Hello");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="user-card">
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
    </div>
  );
};

export default User;
