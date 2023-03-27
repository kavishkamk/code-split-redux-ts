import { AnyAction, combineReducers, configureStore, Reducer } from '@reduxjs/toolkit'
import reducersSlice, {add} from './components/features/reducersSlice'
// import { combineReducers, createStore } from "@reduxjs/toolkit";
// import counterReducer from "./components/features/counterSlice";
// import counterSlice from './components/features/counterSlice';

// export default configureStore({
//   reducer: {
//     counter: counterReducer
//   }
// })

const staticReducers: Record<string, Reducer<any, AnyAction>> = {reducerList: reducersSlice};


export const store = configureStore({reducer: staticReducers, middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),});

export const injectReducer = (reducerMap: Record<string, Reducer<any, AnyAction>>) => {

  const state = store.getState();
  const previousReducers = (state['reducerList'])['reducerList'];
  console.log("This is previous state: ", state)
  console.log("This is previous reducers", previousReducers);

  const trackedReducersList: Record<string, Reducer<any, AnyAction>> = {
    ...previousReducers,
    ...reducerMap
  };

  const rootReducer = combineReducers({...staticReducers, ...trackedReducersList})

  store.replaceReducer(rootReducer);

  store.dispatch(add({trackerList: trackedReducersList}))
}