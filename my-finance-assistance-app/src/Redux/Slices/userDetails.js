import { createSlice } from '@reduxjs/toolkit'

export const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: {
    userDataList: [],
  },
  reducers: {
    
    setUserlist: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUserlist } = userDetailsSlice.actions

export default userDetailsSlice.reducer