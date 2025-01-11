import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
// entities
import { ProfileSchema } from "entities/Profile";
import { ArticleDetailsSchema } from "entities/Article";
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
// features
import { LoginSchema } from "features/AuthByUsername";
import { AddNewCommentSchema } from "features/AddNewComment";
// pages
import { ArticlesPageSchema } from "pages/ArticlesPage";
// widgets
import { ScrollSaveSchema } from "widgets/Page/ScrollSave";
import { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollSave: ScrollSaveSchema;

  // Async
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addNewComment?: AddNewCommentSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore {
  reducerManager: ReducerManager;
}

export type ThunkExtraArg = {
  api: AxiosInstance;
};

export type ThunkConfig<T> = {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
};
