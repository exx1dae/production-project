import { StateSchema } from "app/providers/StoreProvider";
import { getProfileForm } from "./getProfileForm";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

describe("getProfileForm.test", () => {
  test("should return form", () => {
    const form = {
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
        form,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
