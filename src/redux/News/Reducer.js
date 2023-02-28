import { createSlice } from '@reduxjs/toolkit'

export const News = createSlice({
    name: 'news',
    initialState: {
        list: [],
    },
    reducers: {
        setList(state, action) {
            state.list = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setList } = News.actions

export default News.reducer