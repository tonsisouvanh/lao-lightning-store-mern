import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Restaurant } from "../../type";
import { RootState } from "../store";
axios.defaults.baseURL = "http://localhost:5000";

interface RetaurantSlice {
  restaurants: Restaurant[] | null;
  listStatus: string;
  addStatus: string;
  deleteStatus: string;
  updateStatus: string;
  error: string | null;
}

const initialState: RetaurantSlice = {
  restaurants: [],
  listStatus: "idle" || "loading" || "succeeded" || "failed",
  addStatus: "idle" || "loading" || "succeeded" || "failed",
  deleteStatus: "idle" || "loading" || "succeeded" || "failed",
  updateStatus: "idle" || "loading" || "succeeded" || "failed",
  error: "" || null,
};

export const listRestaurants = createAsyncThunk<
  Restaurant[],
  { rejectValue: { error: string } }
>("restaurant/listRestaurants", async (_, thunkApi): Promise<Restaurant[]> => {
  try {
    //   const { auth } = (thunkAPI.getState() as RootState).auth;
    //   const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   };

    const { data } = await axios.get(
      // `/api/restaurants?keyword=${keyword}&pageNumber=${pageNumber}`,
      `/api/restaurants`,
    );
    return data.restaurants;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    throw thunkApi.rejectWithValue(message);
  }
});

export const createRestaurant = createAsyncThunk<
  Restaurant,
  { restaurantData: Restaurant },
  { rejectValue: { error: string } }
>(
  "restaurant/createRestaurant",
  async ({ restaurantData }, thunkApi): Promise<Restaurant> => {
    try {
      const { auth } = (thunkApi.getState() as RootState).auth;
      const config = {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      };

      const { data } = await axios.post(
        "/api/restaurants",
        restaurantData,
        config,
      );

      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      throw thunkApi.rejectWithValue(message);
    }
  },
);

export const deleteRestaurant = createAsyncThunk<
  string,
  { restaurantId: string },
  { rejectValue: { error: string } }
>(
  "restaurant/deleteRestaurant",
  async ({ restaurantId }, thunkApi): Promise<string> => {
    try {
      const { auth } = (thunkApi.getState() as RootState).auth;
      const config = {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      };

      await axios.delete(`/api/restaurants/${restaurantId}`, config);
      return restaurantId;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      throw thunkApi.rejectWithValue(message);
    }
  },
);

export const updateRestaurant = createAsyncThunk<
  Restaurant,
  { updatedRestaurant: Restaurant },
  { rejectValue: { error: string } }
>(
  "restaurant/updateRestaurant",
  async ({ updatedRestaurant }, thunkApi): Promise<Restaurant> => {
    try {
      const { auth } = (thunkApi.getState() as RootState).auth;
      const config = {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/restaurants/${updatedRestaurant._id}`,
        updatedRestaurant,
        config,
      );
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      throw thunkApi.rejectWithValue(message);
    }
  },
);

const resetRestaurantSlice = (state: RetaurantSlice) => {
  state.restaurants = initialState.restaurants;
  state.addStatus = "idle";
  state.deleteStatus = "idle";
  state.listStatus = "idle";
  state.updateStatus = "idle";
  state.error = null;
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    reset: resetRestaurantSlice,
  },
  extraReducers: (builder) => {
    builder
      .addCase(listRestaurants.pending, (state) => {
        state.listStatus = "loading";
      })
      .addCase(listRestaurants.fulfilled, (state, action) => {
        state.listStatus = "succeeded";
        state.restaurants = action.payload;
        state.error = null;
      })
      .addCase(listRestaurants.rejected, (state, action) => {
        state.listStatus = "failed";
        state.restaurants = initialState.restaurants;
        console.log(action.payload);
        state.error = "" + action.payload;
      })
      .addCase(createRestaurant.pending, (state) => {
        state.addStatus = "loading";
      })
      .addCase(createRestaurant.fulfilled, (state, action) => {
        state.addStatus = "succeeded";
        state.restaurants?.push(action.payload);
        state.error = null;
      })
      .addCase(createRestaurant.rejected, (state, action) => {
        state.addStatus = "failed";
        state.error = "" + action.payload;
      })
      .addCase(deleteRestaurant.pending, (state) => {
        state.deleteStatus = "loading";
      })
      .addCase(deleteRestaurant.fulfilled, (state, action) => {
        const deleteRestaurant = action.payload;
        const array: Restaurant[] =
          state.restaurants?.filter((item) => item._id !== deleteRestaurant) ||
          [];
        state.restaurants = array;
        state.deleteStatus = "succeeded";
      })
      .addCase(deleteRestaurant.rejected, (state, action) => {
        state.deleteStatus = "failed";
        state.error = "" + action.payload;
      })
      .addCase(updateRestaurant.pending, (state) => {
        state.updateStatus = "loading";
      })
      .addCase(updateRestaurant.fulfilled, (state, action) => {
        state.updateStatus = "succeeded";
        const updatedRestaurant = action.payload;
        const updateIndex = state.restaurants?.findIndex(
          (restaurant) => restaurant._id === updatedRestaurant._id,
        ) as number;

        if (updateIndex !== -1) {
          state.restaurants![updateIndex] = updatedRestaurant;
        }
      })
      .addCase(updateRestaurant.rejected, (state, action) => {
        state.updateStatus = "failed";
        state.error = "" + action.payload;
      });
  },
});
export const { reset } = restaurantSlice.actions;
export default restaurantSlice.reducer;
