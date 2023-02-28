import { createSlice } from '@reduxjs/toolkit'

export const Errors = createSlice({
    name: 'error',
    initialState : {
        error : [],
    },
    reducers: {
        setError : (state,action) => {
            state.error = action.payload;
        },
        resetError : (state,action) => {
            state.error = state.error.filter((val,key)=>key != action.payload);
        },
        setSuccess : (state,action) => {
            state.error = [{color : "success", message : action.payload}];
        },
    },
})

// Action creators are generated for each case reducer function
export const { setError , resetError , setSuccess } = Errors.actions

export default Errors.reducer