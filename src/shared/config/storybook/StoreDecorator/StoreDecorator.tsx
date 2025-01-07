import { Story } from "@storybook/react";

import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "entities/Profile";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsSliceReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { addNewCommentReducer } from "features/AddNewComment/model/slice/addNewCommentSlice";
import { articleCommentsReducer } from "features/ArticleCommentList/model/slice/articleCommentListSlice";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsSliceReducer,
  addNewComment: addNewCommentReducer,
  articleComments: articleCommentsReducer,
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
