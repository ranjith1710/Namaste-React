import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Body from "../Body";
import { fireEvent, render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";
import RES_LIST_MOCK_DATA from "../mocks/resList.json";
// import App from "../../App";
// import "../../../index.css";
import UserContext from "../../utils/UserContext";
import ContextProvider from "../mocks/mockContext";
// import RES_DATA from "../mocks/resData.json";
// import Restaurant from "../Restaurant";
// import { useContext } from "react";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(RES_LIST_MOCK_DATA)
  })
);

// const context = useContext(UserContext);
it("Should update user name in header", async () => {
  await act(async () =>
    render(
      <ContextProvider>
        <Provider store={appStore}>
          <BrowserRouter>
            <Body />
          </BrowserRouter>
        </Provider>
      </ContextProvider>
    )
  );

  const userInput = screen.getByTestId("userUpdateInput");

  fireEvent.change(userInput, {
    target: {
      value: "Name"
    }
  });

  expect(screen.getAllByText("Name").length).toBe(20);

  // const input = screen.getByTestId("userUpdateInput");
  // fireEvent.change(input, {
  //   target: {
  //     value: "Name"
  //   }
  // });

  // expect(screen.getAllByText("Name")).toBe(20);
});
