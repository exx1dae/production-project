import { getQueryParams } from "./addQueryParams";

describe("shared/url/addQueryParams", () => {
  test("test with one param", () => {
    const params = getQueryParams({
      test: "value",
    });
    expect(params).toEqual("?test=value");
  });
  test("test with multiply params", () => {
    const params = getQueryParams({
      test: "value",
      test2: "value",
    });
    expect(params).toEqual("?test=value&test2=value");
  });
  test("test with undefined", () => {
    const params = getQueryParams({
      test: "value",
      test2: undefined,
    });
    expect(params).toEqual("?test=value");
  });
});
