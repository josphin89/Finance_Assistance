import { createSlice } from '@reduxjs/toolkit'

export const expertLoginSlice = createSlice({
  name: 'expertLogin',
  initialState: {
    expertLoginUsers:{},
  },
  reducers: {
    setExpertLoginUsers: (state,action)=>{
      
      state.loginUsers = action.payload
    },
  },
})


export const { setExpertLoginUsers } = expertLoginSlice.actions

export default expertLoginSlice.reducer