import { createAsyncThunk } from "@reduxjs/toolkit";
import { setError } from "../Errors/Reducer";
import { setList } from "./Reducer";
import axios from "axios";
import { eventOrderApi, newsApi, newsletterApi } from "../../Netwrok/api";
import { responseError } from "../../Netwrok/responseHandler";
import { headers } from "../headers";
import {objectToQueryString} from "../../constant/helpers";


export const newsRequest = createAsyncThunk('news-request', async (
    query,
    {
        dispatch,
        rejectWithValue,
        fulfillWithValue
    }) => {
    try {
        let response = await axios.get(newsApi(query?.category) + objectToQueryString(query), headers());
        dispatch(setList(response.data.articles));
        return fulfillWithValue(true);
    } catch (e) {
        // dispatch(setError(responseError(e)));
        return rejectWithValue(false);
    }
});