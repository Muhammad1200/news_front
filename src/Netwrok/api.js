// import * as dotenv from 'dotenv';
// dotenv.config();
// console.log("ENV",process.env.APP_API_URl);

export const baseUrl = process.env.REACT_APP_APP_API_URl;
export const fileUrl = process.env.REACT_APP_APP_API_BASE_URL;

export const getProfileApi = `${baseUrl}user/profile`;
export const profileUpdateApi = `${baseUrl}user/profile/update`;
export const profilePicUpdateApi = `${baseUrl}user/profile/update-avatar`;
export const changePasswordApi = `${baseUrl}me/change-password`;

export const interestsApi = `${baseUrl}me/sources`;
export const addInterestsApi = `${baseUrl}me/sources/add`;


// Auth Apis
export const loginApi = `${baseUrl}auth/login`;
export const resetPasswordApi = `${baseUrl}auth/reset-password`;
export const verifyOtpApi = `${baseUrl}auth/verify-otp`;
export const forgotPasswordApi = `${baseUrl}auth/forgot-password`;
export const signUpApi = `${baseUrl}auth/signup`;

export const newsApi = (slug = '') => `${process.env.REACT_APP_NEWS_API_URL}${(slug === '')?'everything':'top-headlines'}`;