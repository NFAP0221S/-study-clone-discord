import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user";

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case "DUMMY":
      return {
        ...state,
      };
    default: {
      const combinedReducers = combineReducers({
        user: userSlice,
      });
      return combinedReducers(state, action);
    }
  }
};

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
