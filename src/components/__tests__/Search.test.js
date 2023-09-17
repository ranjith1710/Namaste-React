//Integration testing

import { render, screen, act, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resList.json";
import "@testing-library/jest-dom";

//fetch function in body component is provided by browser since we are rendering the component in jsdom we don't have access to fetch
//Create a global fetch function that can be used instead of fetch function in body component
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    }
  });
});

// the above code is equivalent to below code
// const data = await fetch(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9678217&lng=80.2185006&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//   );
//   const json = await data.json();

it("Should search for Restaurants with given input", async () => {
  //render method should be enclosed with act function when there is a state update after the render
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resItemsBeforeSearch = screen.getAllByTestId("resCard");
  expect(resItemsBeforeSearch.length).toBe(20);

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, {
    target: {
      value: "Cafe"
    }
  });

  const searchBtn = screen.getByRole("button", {
    name: "Search"
  });

  fireEvent.click(searchBtn);

  const resItemsAfterSearch = screen.getAllByTestId("resCard");

  expect(resItemsAfterSearch.length).toBe(2);
});

it("Should filter only top rated restaurants", async () => {
  await act(async =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resBeforeFilter = screen.getAllByTestId("resCard");

  expect(resBeforeFilter.length).toBe(20);

  const topRatedButton = screen.getByRole("button", {
    name: "Top Rated Restaurants"
  });

  fireEvent.click(topRatedButton);

  const resAfterFilter = screen.getAllByTestId("resCard");
  expect(resAfterFilter.length).toBe(16);
});
