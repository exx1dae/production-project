import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

const data = {
  name: "Sarkis",
  lastname: "Shainyan",
  country: Country.Armenia,
  currency: Currency.RUB,
  username: "admin",
  age: 21,
  city: "Zhukovsky",
};

const id = "1";

describe("fetchProfileData.test", () => {
  test("should be successful request", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk(id);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(data);
  });

  test("should be bad request", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(id);

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});
