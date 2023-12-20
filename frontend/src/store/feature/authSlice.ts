import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { User } from "../../type";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://localhost:5000";

interface AuthSlice {
  auth: User | null;
  status: string;
  error: string | null;
}

const initialState: AuthSlice = {
  auth: localStorage.getItem("authInfo")
    ? JSON.parse(localStorage.getItem("authInfo") || "")
    : null,
  status: "idle" || "loading" || "succeeded" || "failed",
  error: null,
};

export const signUp = createAsyncThunk<
  User,
  { fullname: string; email: string; password: string }
>("auth/signup", async (authData, { rejectWithValue }) => {
  const { fullname, email, password } = authData;
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { fullname, email, password },
      config,
    );
    localStorage.setItem("authInfo", JSON.stringify(data));
    return data;
  } catch (error) {
    return rejectWithValue(
      "Authentication error: " + error.response.data.message,
    );
  }
});

// Define an async thunk for auth sign-in
export const signIn = createAsyncThunk<
  User,
  { email: string; password: string }
>("auth/signin", async (authData, { rejectWithValue }) => {
  const { email, password } = authData;
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config,
    );
    localStorage.setItem("authInfo", JSON.stringify(data));
    return data;
  } catch (error) {
    return rejectWithValue(
      "Authentication error: " + error.response.data.message,
    );
  }
});

export const signOut = createAsyncThunk(
  "auth/signout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.removeItem("authInfo");
      return null;
    } catch (error) {
      return rejectWithValue(
        "Authentication error: " + error.response.data.message,
      );
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // sign up
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUp.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = "succeeded";
        state.auth = action.payload;
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.auth = null;
        state.error = "" + action.payload;
      })
      // sign in
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = "succeeded";
        state.auth = action.payload;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed";
        state.auth = null;
        state.error = "" + action.payload;
      })
      //  sign out
      .addCase(signOut.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.status = "idle";
        state.auth = action.payload;
        state.error = null;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.status = "failed";
        state.auth = null;
        state.error = "" + action.payload;
      });
  },
});

export default authSlice.reducer;
