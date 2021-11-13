import {queryParser, messageParser, getRandomNumber, errorMessageParser, selectWinner} from "../../utils";

const ERROR_MESSAGE = "Error: Custom error message";
const TEST_QUERY = "/people";
const STORE_LENGTH = 10;

describe("converters test", () => {
  test("query parser test", () => {
    const result = queryParser(TEST_QUERY);
    expect(result).toBe("PEOPLE")
  })
  test("message parser test", () => {
    const result = messageParser(ERROR_MESSAGE);
    expect(result).toBe("Custom error message")
  })
  test("error message parser", () => {
    const result = errorMessageParser(ERROR_MESSAGE, TEST_QUERY);
    expect(result).toBe("Custom error message PEOPLE")
  })
  test("get random number test - with store length", () => {
    const result = getRandomNumber(STORE_LENGTH);
    expect(result).toBeLessThanOrEqual(STORE_LENGTH);
  })
})