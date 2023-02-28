import {createAsyncThunk} from "@reduxjs/toolkit";
import {setError} from "../Errors/Reducer";
import axios from "axios";
import {addInterestsApi, blogDetailApi, blogsApi, interestsApi} from "../../Netwrok/api";
import {responseError} from "../../Netwrok/responseHandler";
import {setBlog, setBlogs, setList} from "./Reducer";
import {headers} from "../headers";


export const getInterestRequest = createAsyncThunk('get-interests-request',async (
    url = null,
    {
        dispatch,getState,
        rejectWithValue ,
        fulfillWithValue
    })=>{
    try {
        let token = getState().auth?.token;
        let resp = await axios.get(interestsApi,headers(token));
        dispatch(setList(resp.data.response.data));
        return fulfillWithValue(true);
    }catch (e){
        dispatch(setError(responseError(e)));
        return  rejectWithValue(false);
    }
});

export const addInterestRequest = createAsyncThunk('add-interests-request',async (
    data,
    {
        dispatch,getState,
        rejectWithValue ,
        fulfillWithValue
    })=>{
    try {
        let token = getState().auth?.token;
        let resp = await axios.post(addInterestsApi,data,headers(token));
        dispatch(setList(resp.data.response.data));
        return fulfillWithValue(true);
    }catch (e){
        dispatch(setError(responseError(e)));
        return  rejectWithValue(false);
    }
});
