import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/authSlice";
import restaurantReducer from "./feature/restaurantSlice";
import restaurantDetailReducer from "./feature/restaurantDetailSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurant:restaurantReducer,
    restaurantDetail:restaurantDetailReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
