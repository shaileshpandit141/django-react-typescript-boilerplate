/**
 * Root reducer configuration that combines all feature reducers
 * Contains auth-related reducers for signin, signout and signup functionality
 */
import { combineReducers } from 'redux'
import {
  signinReducer,
  signoutReducer,
  signupReducer
} from 'features/auth'
import { userReducer } from 'features/user'
import { toastReducer } from 'features/toast'

const rootReducer = combineReducers({
  signin: signinReducer,  // Slice reducer for signin feature
  signout: signoutReducer,  // Slice reducer for signout feature
  signup: signupReducer,  // Slice reducer for signup feature
  toast: toastReducer,  // Slice reducer for toast feature
  user: userReducer  // Slice reducer for user feature
})

// Type definition for the complete app state
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
