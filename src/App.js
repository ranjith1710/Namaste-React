// importing React and ReactDOM
import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import appStore from "./store/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

//lazy loading, code splitting, chunking, dynamic bundling, dynamic import, on demand loading
const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const App = () => {
  const contextData = useContext(UserContext);

  const [userName, setUserName] = useState(contextData.loggedInUser);
  // console.log("Display context data below");
  // console.log(contextData);

  return (
    // value for loggedInUser will be passed as default value given while creating context
    <UserContext.Provider
      value={{
        //updating the loggedInUser
        loggedInUser: userName,
        setUserName
      }}
    >
      <Provider store={appStore}>
        <div className="App">
          {/* value for loggedInUser will be passed as Ranjith only for components inside the below provider */}
          <UserContext.Provider
            value={{
              //since it is hardcoded, loggedInUser will always be Ranjith and it will not be updated for components(Header) inside this provider
              loggedInUser: "Ranjith"
            }}
          >
            <Header />
          </UserContext.Provider>
          <Outlet />
        </div>
      </Provider>
    </UserContext.Provider>
  );
};

//creates a Root for ReactDOM where all the DOM manipulation can be done
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        )
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ]
  }
]);

//converts react element object into HTML element
root.render(<RouterProvider router={router} />);
