import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlcie.test", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginSchema> = {
      username: "username",
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername("another")),
    ).toEqual({
      username: "another",
    });
  });
  test("test set password", () => {
    const state: DeepPartial<LoginSchema> = {
      password: "password",
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("another")),
    ).toEqual({
      password: "another",
    });
  });
});
