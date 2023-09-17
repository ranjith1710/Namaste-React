import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should contain login button on load", () => {
  //render the component
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //query to get only the button with name Login
  const loginBtn = screen.getByRole("button", {
    name: "Login"
  });

  //Assertion
  expect(loginBtn).toBeInTheDocument();
});

it("Should have 0 items in cart", () => {
  //render the component
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //query to get exact text("Cart - (0) items") match from rendered component
  const cartItems = screen.getByText("Cart - (0) items");

  //Assertion
  expect(cartItems).toBeInTheDocument();
});

it("Should have 0 items in cart", () => {
  //render the component
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //query to get Cart from rendered component using regex =>/value/
  const cartItems = screen.getByText(/Cart/);

  //Assertion
  expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
  //render the component
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //query to get only the button with name Login
  const loginBtn = screen.getByRole("button", { name: "Login" });

  //perform click action on login button
  fireEvent.click(loginBtn);

  //query to get only the button with name Logout
  const logoutBtn = screen.getByRole("button", {
    name: "Logout"
  });

  //Assertion
  expect(logoutBtn).toBeInTheDocument();
});
