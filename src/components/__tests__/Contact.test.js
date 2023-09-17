import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";
describe("Contact Us Page", () => {
  beforeAll(() => {
    // console.log("before all");
  });

  beforeEach(() => {
    // console.log("before each");
  });

  afterAll(() => {
    // console.log("After all");
  });

  afterEach(() => {
    // console.log("after each");
  });
  it("Should load heading in Contact us", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    // console.log(heading);
    expect(heading).toBeInTheDocument();
  });
});
