import UserContext from "../../utils/UserContext";
import { useContext, useState } from "react";

const ContextProvider = props => {
  const contextData = useContext(UserContext);

  const [userName, setUserName] = useState(contextData.loggedInUser);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
