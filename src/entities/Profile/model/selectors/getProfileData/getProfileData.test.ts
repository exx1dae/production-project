import { StateSchema } from "app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

describe("getProfileData.test", () => {
  test("should return data", () => {
    const data = {
      name: "Sarkis",
      lastname: "Shainyan",
      country: Country.Armenia,
      currency: Currency.RUB,
      username: "admin",
      age: 21,
      city: "Zhukovsky",
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
