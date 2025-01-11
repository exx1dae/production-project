import { Story } from "@storybook/react";

import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "entities/Profile";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsSliceReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { addNewCommentReducer } from "features/AddNewComment/model/slice/addNewCommentSlice";
import { articleDetailsPageReducer } from "pages/ArticleDetailsPage/model/types";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  addNewComment: addNewCommentReducer,
  articleDetails: articleDetailsSliceReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => {
  return (StoryComponent: Story) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
  };
};

export default StoreDecorator;
