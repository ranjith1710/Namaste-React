import RestaurantMenu from "../RestaurantMenu";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";
import MOCK_DATA from "../mocks/menuList.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
  })
);

it("should load restaurant menu header", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  expect(screen.getByText("Recommended (94)")).toBeInTheDocument();
});

it("should select all menu filter by default", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const menuType = screen.getByLabelText("All");

  expect(menuType).toBeChecked();
});

it("should contain 23 items on clicking veg filter", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const menuType = screen.getByRole("radio", { name: "Veg" });

  fireEvent.click(menuType, { target: { value: "VEG" } });
  expect(menuType).toBeChecked();

  expect(screen.getByText("Recommended (23)")).toBeInTheDocument();
});

it("should contain 71 items on clicking Non-Veg filter", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const menuType = screen.getByRole("radio", { name: "Non-Veg" });

  fireEvent.click(menuType, { target: { value: "NONVEG" } });
  expect(menuType).toBeChecked();

  expect(screen.getByText("Recommended (71)")).toBeInTheDocument();
});

it("should contain 94 items on clicking All option in menu type filter", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  const vegOption = screen.getByRole("radio", { name: "Veg" });

  fireEvent.click(vegOption, { target: { value: "Veg" } });

  const allOption = screen.getByRole("radio", { name: "All" });

  fireEvent.click(allOption, { target: { value: "All" } });

  expect(allOption).toBeChecked();
});
