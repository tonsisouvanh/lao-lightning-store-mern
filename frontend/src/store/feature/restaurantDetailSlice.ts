import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Restaurant } from "../../type";
axios.defaults.baseURL = "http://localhost:5000";

interface RestaurantDetailSlice {
  restaurant: Restaurant | null;
  status: string;
  error: string | null;
}

const initialState: RestaurantDetailSlice = {
  restaurant: null,
  status: "idle" || "loading" || "succeeded" || "failed",
  error: "" || null,
};

export const fetchRestaurantById = createAsyncThunk<
  Restaurant,
  string,
  { rejectValue: { error: string } }
>(
  "restaurant/fetchRestaurantById",
  async (restaurantId: string, thunkApi): Promise<Restaurant> => {
    try {
      const { data } = await axios.get(`/api/restaurants/${restaurantId}`);
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

const restaurantDetailSlice = createSlice({
  name: "restaurantDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRestaurantById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.restaurant = action.payload;
        state.error = null;
      })
      .addCase(fetchRestaurantById.rejected, (state, action) => {
        state.status = "failed";
        state.restaurant = null;
        state.error = "" + action.payload;
      });
  },
});

export default restaurantDetailSlice.reducer;
