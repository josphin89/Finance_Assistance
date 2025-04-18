import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loginUsers:{},
  },
  reducers: {
    setLoginUsers: (state,action)=>{
      
      state.loginUsers = action.payload
    },
  },
})


export const { setLoginUsers } = loginSlice.actions

export default loginSlice.reducer