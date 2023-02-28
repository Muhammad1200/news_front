import React, {useState} from 'react';
import {onInputChangeHandler} from "../../constant/helpers";
import {CATEGORIES} from "../../constant/Variables";
import {useDispatch, useSelector} from "react-redux";
import {signUpRequest} from "../../redux/Auth/Action";

const Edit = () => {

    const auth = useSelector((state) => state?.auth?.user);

    return (
        <>
            <div className="Home py-4">
                {/* catergories */}

                {/* news section */}
                <div className="container">

                    <div className="card ">
                        <div className="card-header">
                            Edit Profile
                        </div>
                        <div className="card-body">
                                <div className='row mt-3 justify-content-center'>
                                    <div className={"col-lg-5 "}>
                                        <label>First Name :</label>
                                        <div className={"mx-1 f-pop-med form-control height-5 mb-4 f-14"}>
                                            {auth?.first_name}
                                        </div>
                                    </div>
                                    <div className={"col-lg-5 "}>
                                        <label>Last Name :</label>
                                        <div className={"mx-1 f-pop-med form-control height-5 mb-4 f-14"}>
                                            {auth?.last_name}
                                        </div>
                                    </div>
                                    <div className={"col-lg-5 "}>
                                        <label>Email :</label>
                                        <div className={"mx-1 f-pop-med form-control height-5 mb-4 f-14"}>
                                            {auth?.email}
                                        </div>
                                    </div>
                                    <div className={"col-lg-5 "}>
                                        <label>Category :</label>

                                        <div className={"mx-1 f-pop-med form-control height-5 mb-4 f-14"}>
                                            {auth?.category}
                                        </div>
                                    </div>
                                    <div className={"col-lg-10 "}>
                                        <label>Sources :</label>
                                        <div className={" d-flex align-items-center mx-1 f-pop-med form-control height-5 mb-4 f-14"}>
                                            <div className={"mx-1"}>
                                                <input
                                                    type="checkbox"
                                                    className={""}
                                                    id={"bbc-new"}
                                                    value={"bbc-new"}/>
                                                <label className={"ml-1"} htmlFor="bbc-new">BBC News</label>
                                            </div>
                                            <div className={"mx-1"}>
                                                <input
                                                    type="checkbox"
                                                    className={""}
                                                    id={"new-york-magazine"}
                                                    value={"new-york-magazine"}/>
                                                <label className={"ml-1"} htmlFor="new-york-magazine">New York Times</label>
                                            </div>
                                            <div className={"mx-1"}>
                                                <input
                                                    type="checkbox"
                                                    className={""}
                                                    id={"the-globe-and-mail"}
                                                    value={"the-globe-and-mail"}/>
                                                <label className={"ml-1"} htmlFor="the-globe-and-mail">New York Times</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <button className={" btn btn-info form-control"}
                                                type={"button"}>Update Profile</button>
                                    </div>

                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Edit;