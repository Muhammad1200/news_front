import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {onInputChangeHandler} from "../../constant/helpers";
import {changePasswordRequest, resetPasswordRequest} from "../../redux/Auth/Action";


const EditProfile = (props) => {

    const dispatch = useDispatch();
    const auth = useSelector((state)=>state?.auth?.user);
    const [state, setState] = useState({
        first_name: "",
        last_name: "",
    });

    const [resetPass, setResetPass] = useState({
        old_password     : null,
        password         : null,
        confirm_password : null,
    });

    const onProfileChnage = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const onPasswordChange = (e) => {
        let { name, value } = e.target;
        setResetPass({ ...resetPass, [name]: value });
    }

    // change password
    const ChangePasswordFunction = async (e) => {
        e.preventDefault();
        if (resetPass.password !== resetPass.confirm_password) {
            toast.error("new password and confirm new password not matched");
        } else if (resetPass.password.length < 6) {
            toast.error("Password limit must be 8 character");
        } else {
            await dispatch(changePasswordRequest(resetPass));
        }
    }

    // del token to after change Password
    const LogoutFunction = () => {
        // dispatch(LogoutApiDelToken(ReduxState?.token))
        //     .then((res) => {
        //         dispatch({
        //             type: "DEL_TOKEN"
        //         })
        //         navigate('/login');
        //         // console.log(res, 'errrrrrrrrrrrrrrrrrrrrrrr');
        //     })
        //     .catch((e) => {
        //         dispatch({
        //             type: "DEL_TOKEN"
        //         })
        //         navigate('/login');
        //         console.log(e, 'errrrrrrrrrrrrrrrrrrrrrrr');
        //     })
    }

    const EditUserProfile = (e) => {
        e.preventDefault();
        console.log("edit profile working");
        // console.log("change profile", state);
        // let data = {
        //     first_name: state.first_name,
        //     last_name: state.last_name,
        //     phone_no: state.phone_no,
        //     zip_code: state.zip_code,
        //     street: state.street,
        //     state: state.state,
        //     city: state.city,
        //     country: state.country,
        //     address: state.address,
        // }

        // dispatch(UpdateProfileApi(data, ReduxState?.token))
        //     .then((res) => {
        //         // console.log(res?.response);
        //         props.changeProfileTab(1);
        //         toast.success("Profile updated successfully");
        //     }).catch((err) => {
        //         err?.response?.data?.errors.map((item) => {
        //             return (
        //                 toast.error(item)
        //             )
        //         }
        //         )
        //     })
    }

    // () => { props.changeProfileTab(1) }

    return (
        <div className="EditProfile">
            <div className="row">
                <div className="col-lg-6">
                    <p className="profile_head  mt-0">User Profile</p>
                    <p className="User_details mb-3">User details</p>
                </div>
                <div className="col-lg-6 text-right">
                    <p onClick={() => { props.changeProfileTab(1) }} className="edit">View Profile</p>
                </div>
            </div>
            <form onSubmit={EditUserProfile}>
                <div style={{ backgroundColor: "white", zIndex: "10" }} className="detail_box">
                    <div className="row">
                        <div className="col-lg-4">
                            <p className="p-head mt-4">First Name</p>
                        </div>
                        <div className="col-lg-8">
                            <input
                                name="first_name"
                                value={state.first_name || ""}
                                onChange={(e) =>onInputChangeHandler(e,setState)}
                                type="text"
                                className="inpt-fld my-1" placeholder={``} />
                        </div>
                        <div className="col-lg-12 text-center">
                            <div className="bordr-btm-lightgrey">

                            </div>
                        </div>
                        <div className="col-lg-4">
                            <p className="p-head mt-4">Last Name</p>
                        </div>
                        <div className="col-lg-8">
                            <input
                                name="last_name"
                                value={state.last_name || ""}
                                onChange={(e) =>onInputChangeHandler(e,setState)}
                                type="text"
                                className="inpt-fld my-1" placeholder={``} />
                        </div>
                        <div className="col-lg-12 text-center">
                            <div className="bordr-btm-lightgrey">

                            </div>
                        </div>

                        <div className="col-lg-4">
                            <p className="p-head">Email</p>
                        </div>
                        <div className="col-lg-8">
                            <input type="text"
                                   readOnly={true}
                                   className="inpt-fld my-1" defaultValue={auth?.email} />
                        </div>


                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col-lg-12 text-right">
                        <button type="submit" className="btn btn-info bt-website-orange ">Save</button>
                    </div>
                </div>
            </form>
            {/* zaam */}
            {/* {(ReduxState?.user?.google_id || ReduxState?.user?.facebook_id)
                ? */}
                <div className="my-5"></div>
                {/* : */}
                <form onSubmit={ChangePasswordFunction}>
                    <div style={{ backgroundColor: "white", zIndex: "10" }} className="detail_box mt-3">
                        <div className="row">
                            <div className="col-lg-4">
                                <p className="p-head mt-4">Current Password</p>
                            </div>
                            <div className="col-lg-8">
                                <input
                                    value={resetPass.old_password}
                                    name="old_password"
                                    onChange={(e)=>onInputChangeHandler(e,setResetPass)}
                                    required={true} type="password"
                                    className="inpt-fld my-1"
                                    placeholder="******" />
                            </div>
                            <div className="col-lg-12 text-center">
                                <div className="bordr-btm-lightgrey">

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <p className="p-head mt-4">New Password</p>
                            </div>
                            <div className="col-lg-8">
                                <input
                                    value={resetPass.password}
                                    name="password"
                                    onChange={(e)=>onInputChangeHandler(e,setResetPass)}
                                    required={true}
                                    type="password"
                                    className="inpt-fld my-1"
                                    placeholder="******" />
                            </div>
                            <div className="col-lg-12 text-center">
                                <div className="bordr-btm-lightgrey">

                                </div>
                            </div>
                            <div className="col-lg-4">
                                <p className="p-head mt-4">Confirm Password</p>
                            </div>
                            <div className="col-lg-8">
                                <input
                                    value={resetPass.confirm_password}
                                    name="confirm_password"
                                    onChange={(e)=>onInputChangeHandler(e,setResetPass)}
                                    required={true}
                                    type="password"
                                    className="inpt-fld my-1"
                                    placeholder="******"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2 mb-5 pb-5">
                        <div className="col-lg-12 text-right">
                            <button type="submit" className="btn btn-info bt-website-orange ">Reset Password</button>
                        </div>
                    </div>
                </form>
        </div>
    );
};

export default EditProfile;