import { loginByUsername } from "./loginByUsername";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { userActions } from "entities/User";

describe("loginByUsername.test", () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;
  //
  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });
  //
  // test("should be successful request", async () => {
  //   const authData = {
  //     username: "123",
  //     id: "1",
  //   };
  //
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: authData }));
  //
  //   const action = loginByUsername({
  //     username: "123",
  //     password: "123",
  //   });
  //
  //   const result = await action(dispatch, getState, undefined);
  //
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(authData));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(result.meta.requestStatus).toBe("fulfilled");
  //   expect(result.payload).toBe(authData);
  // });
  //
  // test("should be bad request", async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //
  //   const action = loginByUsername({
  //     username: "123",
  //     password: "123",
  //   });
  //
  //   const result = await action(dispatch, getState, undefined);
  //
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(result.meta.requestStatus).toBe("rejected");
  //   expect(result.payload).toBe("error");
  // });

  test("should be successful request", async () => {
    const authData = {
      username: "sarkis",
      id: "1",
    };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: authData }));

    const result = await thunk.callThunk({
      username: "sarkis",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(authData),
    );
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toBe(authData);
  });

  test("should be bad request", async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({
      username: "sarkis",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toBe("error");
  });
});
