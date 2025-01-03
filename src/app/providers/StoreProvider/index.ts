import { StoreProvider } from "./ui/StoreProvider";
import { AppDispatch, createReduxStore } from "./config/store";
import type {
  ReduxStoreWithManager,
  StateSchema,
  ThunkConfig,
  ThunkExtraArg,
} from "./config/StateSchema";

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithManager,
  AppDispatch,
  ThunkExtraArg,
  ThunkConfig,
};
