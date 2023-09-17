import { render, screen } from "@testing-library/react";
import Restaurant from "../Restaurant";
import RES_MOCK_DATA from "../mocks/resData.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card component with props data", () => {
  render(<Restaurant resData={RES_MOCK_DATA} />);

  const name = screen.getByText("KFC");

  expect(name).toBeInTheDocument();
});
