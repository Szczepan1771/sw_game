import { selectWinner } from "../../utils";

const UNKNOWN_VALUE = "unknown";
const GREATER_VALUE = "20";
const VALUE = "10";
const SMALLER_VALUE = "5";

describe("Select winner test", () => {
  test("select winner test - first value and second value - non number string", () => {
    const result = selectWinner(UNKNOWN_VALUE, UNKNOWN_VALUE);
    expect(result).toBe("draw");
  })
  test("select winner test - first value - non number string, second value - number string", () => {
    const result = selectWinner(UNKNOWN_VALUE, VALUE);
    expect(result).toBe("second_player");
  })
  test("select winner test - first value - number string, second value - non number string", () => {
    const result = selectWinner(VALUE, UNKNOWN_VALUE);
    expect(result).toBe("first_player");
  })
  test("select winner test - first value - greater number string, second value - smaller number string", () => {
    const result = selectWinner(GREATER_VALUE, SMALLER_VALUE);
    expect(result).toBe("first_player");
  })
  test("select winner test - first value - smaller number string, second value - greater number string", () => {
    const result = selectWinner(SMALLER_VALUE, GREATER_VALUE);
    expect(result).toBe("second_player");
  })
  test("select winner test - first value === second value", () => {
    const result = selectWinner(VALUE, VALUE);
    expect(result).toBe("draw");
  })
})