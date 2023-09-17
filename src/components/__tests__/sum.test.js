import { sum } from "../sum";

test("Function to calculate sum of 2 numbers", () => {
  const result = sum(3, 5);
  expect(result).toBe(8);
});
