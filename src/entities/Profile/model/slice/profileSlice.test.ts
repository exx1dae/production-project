import { Profile, ProfileSchema, ValidateProfileError } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";
import { updateProfileData } from "entities/Profile";

describe("profileSlice.test", () => {
  test("test set readonly", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({
      readonly: true,
    });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      validateErrors: undefined,
      form: {
        username: "editedUsername",
      },
      data: {
        username: "username",
      },
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      ...state,
      form: { ...state.data },
      readonly: true,
    });
  });

  test("test update edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      validateErrors: undefined,
      form: {
        username: "editedUsername",
      },
      data: {
        username: "username",
      },
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile(state.form as Profile),
      ),
    ).toEqual({
      ...state,
      form: { username: "editedUsername" },
    });
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      ...state,
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test("test update profile service fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: undefined,
    };

    const data = {
      username: "username",
      name: "Sarkis",
      lastname: "Shainyan",
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ""),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      data,
      form: data,
    });
  });
});
