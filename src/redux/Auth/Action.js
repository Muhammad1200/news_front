import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
    changePasswordApi,
    forgotPasswordApi, getProfileApi,
    loginApi, profilePicUpdateApi,
    profileUpdateApi, resetPasswordApi,
    signUpApi,
    verifyOtpApi
} from "../../Netwrok/api";
import {headers} from "../headers";
import {setError} from "../Errors/Reducer";
import {logout, setAsLogin, setUser} from "./Reducer";
import {responseError} from "../../Netwrok/responseHandler";


export const loginRequest = createAsyncThunk('login-request',async (form,{
    dispatch,
    rejectWithValue ,
    fulfillWithValue
})=>{
    try {
        let x = await axios.post(loginApi,form,headers());
        dispatch(setAsLogin({...x.data.response.data,isLogin:true}))
        dispatch(setError([{
            message : 'Login successfully!' , color : 'success'
        }]));
        return fulfillWithValue(true);
    }catch (e){
        console.log(e.response);
        dispatch(setError(responseError(e)));
        return  rejectWithValue(false);
    }
});

export const signUpRequest = createAsyncThunk('sign-request',async (form,{
    dispatch,
    rejectWithValue ,
    fulfillWithValue
})=>{
    try {
        let x = await axios.post(signUpApi,form,headers());
        dispatch(setAsLogin(x.data.response.data));
        console.log(x.data.response.data);
        dispatch(setError([{
            message : 'Account created successfully!' , color : 'success'
        }]));
        return fulfillWithValue(true);
    }catch (e){
        dispatch(setError(responseError(e)));
        return  rejectWithValue(false);
    }
});

export const forgotRequest = createAsyncThunk('forgot-request',async (form,{
    dispatch,
    rejectWithValue ,
    fulfillWithValue
})=>{
    try {
        let x = await axios.post(forgotPasswordApi,form,headers());
        dispatch(setError([{
            message : 'Email is send to your account!' , color : 'success'
        }]));
        return fulfillWithValue(true);
    }catch (e){
        // console.log(e.response);
        dispatch(setError(responseError(e)));
        return  rejectWithValue(false);
    }
});

export const verifyOtpRequest = createAsyncThunk('verify-otp-request',async (form,{
    dispatch,
    rejectWithValue ,
    fulfillWithValue
})=>{
    try {
        let x = await axios.post(verifyOtpApi,form,headers());
        return fulfillWithValue(true);
    }catch (e){
        dispatch(setError(responseError(e)));
        return  rejectWithValue(false);
    }
});

export const resetPasswordRequest = createAsyncThunk('reset-password-request',async (form,{
    dispatch,
    rejectWithValue ,
    fulfillWithValue
})=>{
    try {
        let x = await axios.post(resetPasswordApi,form,headers());
        dispatch(setError([{
            message : 'Password Changed Successfully!' , color : 'success'
        }]));
        return fulfillWithValue(true);
    }catch (e){
        dispatch(setError(responseError(e)));
        return  rejectWithValue(false);
    }
});

export const updateProfileRequest = createAsyncThunk('update-profile-request',async (form,{
    dispatch,getState,
    rejectWithValue ,
    fulfillWithValue
})=>{
    try {
        let token = getState().auth?.token;
        let x = await axios.post(profileUpdateApi,form,headers(token));
        dispatch(setError([{
            message : 'Profile updated successfully!' , color : 'success'
        }]));
        return fulfillWithValue(true);
    }catch (e){
        console.log(e.response);
        dispatch(setError(responseError(e)));
        return  rejectWithValue(false);
    }
});

export const changePasswordRequest = createAsyncThunk('change-password-request',async (form,{
    dispatch,getState,
    rejectWithValue ,
    fulfillWithValue
})=>{
    try {
        let token = getState().auth?.token;
        let x = await axios.post(changePasswordApi,form,headers(token));
        dispatch(setError([{
            message : 'Password changed successfully!' , color : 'success'
        }]));
        return fulfillWithValue(true);
    }catch (e){
        console.log(e.response);
        dispatch(setError(responseError(e)));
        return  rejectWithValue(false);
    }
});

export const changeProfilePicRequest = createAsyncThunk('change-pic-request',async (form,{
    dispatch,getState,
    rejectWithValue ,
    fulfillWithValue
})=>{
    try {
        let token = getState().auth?.token;
        await axios.post(profilePicUpdateApi,form,headers(token,true));
        dispatch(setError([{
            message : 'Picture updated successfully!' , color : 'success'
        }]));
        let x = await axios.get(getProfileApi,headers(token));

        return fulfillWithValue(true);

    }catch (e){

        dispatch(setError(responseError(e)));
        return  rejectWithValue(false);

    }
});

export const geteProfilePicRequest = createAsyncThunk('get-profile-request',async (form,{
    dispatch,getState,
    rejectWithValue ,
    fulfillWithValue
})=>{
    try {
        let token = getState().auth?.token;
        let x = await axios.get(getProfileApi,headers(token));
        dispatch(setUser(x.data.response.data));
        return fulfillWithValue(true);
    }catch (e){
        if(e.response.status === 401) dispatch(logout());
        dispatch(setError(responseError(e)));
        return  rejectWithValue(false);

    }
});