import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {},
    devTools: DEV,
    preloadedState: initialState,
  });
}
