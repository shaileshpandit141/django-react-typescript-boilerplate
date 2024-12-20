// Imports
import { createSlice } from "@reduxjs/toolkit"
import {
  SigninIntitlState,
  SigninErrorResponse,
  RefreshTokenErrorResponse
} from "./signin.types"
import {
  signinThunk,
  refreshTokenThunk
} from './signinThunk'

// Initial state
const signinIntitlState: SigninIntitlState = {
  status: 'idle',
  message: '',
  data: {
    access_token: localStorage.getItem('access_token'),
    refresh_token: localStorage.getItem('refresh_token')
  },
  errors: {
    email: undefined,
    non_field_errors: undefined,
    password: undefined
  },
  meta: null
}

// Slice definition
const signinSlice = createSlice({
  name: 'signin',
  initialState: signinIntitlState,
  reducers: {
    resetSigninState: (state) => {
      state.status = 'idle'
      state.message = ''
      state.data = {
        access_token: null,
        refresh_token: null
      }
      state.errors.email = undefined
      state.errors.non_field_errors = undefined
      state.errors.password = undefined
      state.meta = null
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
    }
  },
  extraReducers: (builder) => {
    builder
      // Sign in cases
      .addCase(signinThunk.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(signinThunk.fulfilled, (state, action) => {
        const { status, message, data, meta } = action.payload
        state.status = status
        state.message = message
        state.data.access_token = data.access_token
        state.data.access_token = data.access_token
        state.data.refresh_token = data.refresh_token
        state.meta = meta
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('refresh_token', data.refresh_token)
      })
      .addCase(signinThunk.rejected, (state, action) => {
        const { status, message, errors } = action.payload as SigninErrorResponse
        state.status = status
        state.message = message
        state.errors.email = errors?.email
        state.errors.non_field_errors = errors?.non_field_errors
        state.errors.password = errors?.password
      })

      // Refresh token cases
      .addCase(refreshTokenThunk.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(refreshTokenThunk.fulfilled, (state, action) => {
        const { status, message, data, meta } = action.payload
        state.status = status
        state.message = message
        state.data.access_token = data.access_token
        state.meta = meta
        localStorage.setItem('access_token', data.access_token)
      })
      .addCase(refreshTokenThunk.rejected, (state, action) => {
        const { status, message, errors } = action.payload as RefreshTokenErrorResponse
        state.status = status
        state.message = message
        console.error(errors)
      })
  }
})

const signinReducer = signinSlice.reducer;
export default signinReducer;
export const { resetSigninState } = signinSlice.actions
