import { createSlice } from '@reduxjs/toolkit'

export const Loader = createSlice({
    name: 'loader',
    initialState : {
        loading : false,
    },
    reducers: {
        setLoader(state,action) {
          state.loading = action.payload;
        },
    },
})

export const { setLoader } = Loader.actions

export default Loader.reducer