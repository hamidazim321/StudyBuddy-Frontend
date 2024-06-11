import { createAsyncThunk } from "@reduxjs/toolkit";
import saveLogin from "../../helpers/authHelpers";
import currentUserData from "../../interfaces/authInterfaces";
import { mockLogin, mockSignup } from "../../mocks/mockAccounts";

export const loginUser = createAsyncThunk<
  currentUserData,
  FormData,
  { rejectValue: { status: number; message: string } }
>("auth/loginUser", async (loginData: FormData, { rejectWithValue }) => {
  try {
    const res: any = await mockLogin(loginData);
    if (res.status === 200) {
      saveLogin({
        username: res.data.username,
        token: res.data.token,
      });

      return {
        username: res.data.username,
        token: res.data.token,
      };
    } else {
      return rejectWithValue({
        status: res.status,
        message: res.message,
      });
    }
  } catch (error: any) {
    return rejectWithValue({
      status: error.status || 500,
      message: error.message || "Something went wrong",
    });
  }
});

export const signUpUser = createAsyncThunk<
  currentUserData,
  FormData,
  { rejectValue: { status: number; message: string } }
>("auth/signUpUser", async (signUpData: FormData, { rejectWithValue }) => {
  try {
    const res = mockSignup(signUpData);
    if (res.status == 200) {
      saveLogin({
        username: res.data.username,
        token: res.data.token,
      });
      return {
        username: res.data.username,
        token: res.data.token,
      };
    } else {
      return rejectWithValue({
        status: res.status,
        message: res.message,
      });
    }
  } catch (error: any) {
    return rejectWithValue({
      status: error.status || 500,
      message: error.message || "Something went wrong",
    });
  }
});
