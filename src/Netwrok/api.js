export const baseUrl = process.env.APP_API_BASE_URl;
export const fileUrl = process.env.APP_API_URl;



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

export const newsApi = (slug = '') => `${process.env.NEWS_API_URL}${(slug === '')?'everything':'top-headlines'}`;