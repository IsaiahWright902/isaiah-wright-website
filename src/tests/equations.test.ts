import { TestFunction } from "@/utils/custom-equation-utils";

describe("this is a test", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(TestFunction(1, 2)).toBe(3);
  });
});
