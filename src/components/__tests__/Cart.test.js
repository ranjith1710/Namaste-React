import { render, act, screen, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/menuList.json";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
  })
);
it("Should load Restaurant Menu Header", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const recommendedMenu = screen.getByText("Recommended (94)");

  expect(recommendedMenu).toBeInTheDocument();

  fireEvent.click(recommendedMenu);

  const menuItems = screen.getAllByTestId("menuItem");

  expect(menuItems.length).toBe(94);
});

it("Should load menu items on menu header click", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  const recommendedMenu = screen.getByText("Recommended (94)");

  fireEvent.click(recommendedMenu);

  const menuItems = screen.getAllByTestId("menuItem");

  expect(menuItems.length).toBe(94);
});

it("Should add items to cart on clicking add button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  const recommendedMenu = screen.getByText("Recommended (94)");

  fireEvent.click(recommendedMenu);

  const addBtns = screen.getAllByRole("button", {
    name: "Add +"
  });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1) items")).toBeInTheDocument();
});

it("Should show 1 items in Cart page", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Cart />
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  const recommendedMenu = screen.getByText("Recommended (94)");

  fireEvent.click(recommendedMenu);

  const addBtns = screen.getAllByRole("button", {
    name: "Add +"
  });
  fireEvent.click(addBtns[0]);

  const menuItems = screen.getAllByTestId("menuItem");

  expect(menuItems.length).toBe(96);
});

it("Should remove all items in cart on clicking clear cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Cart />
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const recommendedMenu = screen.getByText("Recommended (94)");

  fireEvent.click(recommendedMenu);

  const addBtns = screen.getAllByRole("button", {
    name: "Add +"
  });
  fireEvent.click(addBtns[0]);

  const clearCartBtn = screen.getByRole("button", {
    name: "Clear Cart"
  });

  fireEvent.click(clearCartBtn);
  expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
});
