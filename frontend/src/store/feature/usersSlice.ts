import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { User } from "../../type";
axios.defaults.baseURL = "http://localhost:5000";

interface UserSlice {
  users: User[];
  status: string;
  error: string | null;
}

const initialState: UserSlice = {
  users: [],
  status: "idle" || "loading" || "succeeded" || "failed",
  error: "" || null,
};

export const signUp = createAsyncThunk<
  User,
  { fullname: string; email: string; password: string; image: string }
>("user/signup", async (userData, { rejectWithValue, getState, dispatch }) => {
  const { fullname, email, password, image } = userData;
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { fullname, email, password, image },
      config,
    );
    localStorage.setItem("userInfo", JSON.stringify(data));
    return data;
  } catch (error) {
    return rejectWithValue("Userentication error: " + error);
  }
});


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // sign up
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUp.fulfilled, (state) => {
        state.status = "succeeded";
        // state.user = action.payload;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.users = null;
        state.error = action.payload || "An error occurred during sign-in.";
      });
    //   // sign in
    //   .addCase(signIn.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(signIn.fulfilled, (state, action) => {
    //     state.status = "succeeded";
    //     state.user = action.payload;
    //     state.error = null;
    //   })
    //   .addCase(signIn.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.user = null;
    //     state.error = action.payload || "An error occurred during sign-in.";
    //   })
    //   // sign out
    //   .addCase(signOutUser.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(signOutUser.fulfilled, (state) => {
    //     state.status = "idle";
    //     state.user = null; // Set the user to null to indicate that they are logged out
    //     state.error = null;
    //   })
    //   .addCase(signOutUser.rejected, (state, action) => {
    //     state.status = "failed";
    //     state.user = null;
    //     state.error = action.payload || "An error occurred during sign-in.";
    //   });
  },
});

export default userSlice.reducer;
