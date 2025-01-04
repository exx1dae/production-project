import { validateProfileData } from "./validateProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ValidateProfileError } from "entities/Profile/model/types/profile";

const data = {
  name: "Sarkis",
  lastname: "Shainyan",
  country: Country.Armenia,
  currency: Currency.RUB,
  username: "admin",
  age: 21,
  city: "Zhukovsky",
};

describe("validateProfileData.test", () => {
  test("should be successful validate", async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test("should be bad validate (reason: INCORRECT_USER_DATA)", async () => {
    const result = validateProfileData({ ...data, name: "", lastname: "" });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("should be bad validate (reason: INCORRECT_AGE)", async () => {
    const result = validateProfileData({ ...data, age: NaN });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("should be bad validate (reason: INCORRECT_USER_DATA, INCORRECT_AGE, INCORRECT_COUNTRY)", async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
