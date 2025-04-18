import { configureStore } from '@reduxjs/toolkit'

import loginReducer from '../Redux/Slices/login';
import  userDetailsSlice from './Slices/userDetails'
import { expertLoginSlice } from './Slices/expertLogin';
export default configureStore({
  reducer: {
    login: loginReducer,
    userDetails : userDetailsSlice,
    expertLogin : loginReducer
   
  },
})



