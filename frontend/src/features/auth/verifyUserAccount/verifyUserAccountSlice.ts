import { createSlice } from "@reduxjs/toolkit";
import { VerifyUserAccountInitialState } from "./verifyUserAccount.types";
import { ErrorResponse } from "FeatureTypes";
import { verifyUserAccountAction } from "./verifyUserAccountAction";

/**
 * Initial state for Verify User Account slice
 * Contains status, message, data, errors and meta information
 */
const verifyUserAccount: VerifyUserAccountInitialState = {
  status: "idle",
  status_code: null,
  message: "",
  data: null,
  errors: [],
  meta: {
    request_id: "",
    timestamp: "",
    response_time: "",
    documentation_url: "",
    rate_limit: [],
  },
};

/**
 * Redux slice containing Verify User Account state logic and reducers
 */
const verifyUserAccountSlice = createSlice({
  name: "verifyUserAccount",
  initialState: verifyUserAccount,
  reducers: {
    // Reset Verify User Account state to initial values
    resetVerifyUserAccountState: (state) => {
      Object.assign(state, verifyUserAccount);
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle Verify User Account async states
      .addCase(verifyUserAccountAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(verifyUserAccountAction.fulfilled, (state, action) => {
        Object.assign(state, action.payload);
      })
      .addCase(verifyUserAccountAction.rejected, (state, action) => {
        Object.assign(state, action.payload as ErrorResponse);
      });
  },
});

// Extract reducer and actions
export const {
  reducer: verifyUserAccountReducer,
  actions: { resetVerifyUserAccountState },
} = verifyUserAccountSlice;
