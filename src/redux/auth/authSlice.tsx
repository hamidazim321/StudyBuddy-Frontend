import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signUpUser } from "./authThunk";

interface authState {
  currentUser: string | null;
  error: string | null;
  loading: boolean;
}

const initialState: authState = {
  currentUser: null,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginUser.fulfilled, (state, { payload }) => ({
      ...state,
      currentUser: payload?.username || null,
      error: null,
      loading: false,
    }));

    builder.addCase(loginUser.pending, (state) => ({
      ...state,
      loading: true,
      error: null,
    }));

    builder.addCase(loginUser.rejected, (state, { payload }) => ({
      ...state,
      loading: false,
      currentUser: null,
      error: payload?.message || "unknown error",
    }));

    builder.addCase(signUpUser.fulfilled, (state, { payload }) => ({
      ...state,
      currentUser: payload.username,
      error: null,
      loading: false,
    }));

    builder.addCase(signUpUser.pending, (state) => ({
      ...state,
      loading: true,
    }));

    builder.addCase(signUpUser.rejected, (state, { payload }) => ({
      ...state,
      currentUser: null,
      error: payload?.message || "unknown error",
      loading: false,
    }));
  },
});

export default authSlice.reducer;
