import { createSlice } from '@reduxjs/toolkit'

export const Interests = createSlice({
    name: 'interests',
    initialState : {
        list : [],
    },
    reducers: {
        setList( state , action ) {
          state.list = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setList } = Interests.actions

export default Interests.reducer