import React from "react";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router";

const ViewProfile = (props) => {

    const auth = useSelector((state) => state?.auth?.user);

    return (
        <div className="ViewProfile">
            <div className="row">
                <div className="col-lg-6">
                    <p className="profile_head mt-0">Profile</p>
                    <p className="User_details mb-3">User details</p>
                </div>
                <div className="col-lg-6 text-right">
                    <p onClick={() => { props.changeProfileTab(2) }} className="edit">Edit Profile</p>
                </div>
            </div>
            <div className="detail_box mb-5">
                <div className="row">
                    <div className="col-lg-4">
                        <p className="p-head">First Name</p>
                    </div>
                    <div className="col-lg-8">
                        <p className="p-detail">{auth?.first_name}</p>
                    </div>
                    <div className="col-lg-12 text-center">
                        <div className="bordr-btm-lightgrey">
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <p className="p-head">Last Name</p>
                    </div>
                    <div className="col-lg-8">
                        <p className="p-detail">{auth?.last_name}</p>
                    </div>
                    <div className={"col-lg-12 text-center"}>
                        <div className="bordr-btm-lightgrey">
                        </div>
                    </div>
                  
                    <div className="col-lg-4">
                        <p className="p-head">Email</p>
                    </div>
                    <div className="col-lg-8">
                        <p className="p-detail">{auth?.email}</p>
                    </div>
                    <div className="col-lg-12 text-center">
                        <div className="bordr-btm-lightgrey">

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <p className="p-head">Password</p>
                    </div>
                    <div className="col-lg-8">
                        <p className="p-detail">*********</p>
                    </div>
                    <div className="col-lg-12 text-center">
                        <div className="bordr-btm-lightgrey">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProfile;