// <<<<<<< HEAD
// import React, {useState} from 'react';
// import {onInputChangeHandler} from "../../constant/helpers";
// import {CATEGORIES} from "../../constant/Variables";
// import {useDispatch, useSelector} from "react-redux";
// import {signUpRequest} from "../../redux/Auth/Action";
// import {useNavigate} from "react-router";
// import {EDIT_PROFILE} from "../../routes/RouteLinks";
//
// const Profile = () => {
//
//
//     return (
//         <>
//             <div className="Home py-4">
//                 {/* catergories */}
//
//                 {/* news section */}
//                 <div className="container">
//
//                     <div className="card ">
//                         <div className="card-header">
//                             Profile
//                         </div>
//                         <div className="card-body">
//                                 <div className='row mt-3 justify-content-center'>
//                                     <div className={"col-lg-5 "}>
//                                         <label>First Name :</label>
//                                         <div className={"mx-1 f-pop-med form-control height-5 mb-4 f-14"}>
//                                             {auth?.first_name}
//                                         </div>
//                                     </div>
//                                     <div className={"col-lg-5 "}>
//                                         <label>Last Name :</label>
//                                         <div className={"mx-1 f-pop-med form-control height-5 mb-4 f-14"}>
//                                             {auth?.last_name}
//                                         </div>
//                                     </div>
//                                     <div className={"col-lg-5 "}>
//                                         <label>Email :</label>
//                                         <div className={"mx-1 f-pop-med form-control height-5 mb-4 f-14"}>
//                                             {auth?.email}
//                                         </div>
//                                     </div>
//                                     <div className={"col-lg-5 "}>
//                                         <label>Category :</label>
//                                         <div className={"mx-1 f-pop-med form-control height-5 mb-4 f-14"}>
//                                             {auth?.category}
//                                         </div>
//                                     </div>
//                                     <div className={"col-lg-10 "}>
//                                         <label>Sources :</label>
//                                         <div className={" d-flex align-items-center mx-1 f-pop-med form-control height-5 mb-4 f-14"}>
//                                             {
//                                                 auth?.sources?.map((val,key)=>(
//                                                     <h3 key={key} className="badge text-white bg-success mx-1 p-2">
//                                                         {val?.name}
//                                                     </h3>
//                                                 ))
//                                             }
//                                             {
//                                                 !auth?.sources || auth?.sources?.length <= 0 &&
//                                                 <h3 className="badge text-white bg-dark mx-1 p-2">
//                                                     no sources selected
//                                                 </h3>
//                                             }
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-3">
//                                         <button
//                                             onClick={()=>navigate(EDIT_PROFILE)}
//                                             className={" btn btn-info form-control"}
//                                             type={"button"}>
//                                             Edit Profile
//                                         </button>
//                                     </div>
//
//                                 </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
// =======
import React, { useState } from "react";
import '../../assets/css/profile.css';
import ProfileSideTab from "./ProfileSideTab";
import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";

const Profile = () => {

    const [profileTab, setProfileTab] = useState(1);

    return (
        <div className="Profile">
            <div className="Profile_content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <ProfileSideTab />
                        </div>
                        <div className="col-lg-9 pos-rel">
                            {(profileTab === 1)
                                ?
                                <ViewProfile changeProfileTab={setProfileTab} />
                                :
                                null}
                            {(profileTab === 2)
                                ?
                                <EditProfile changeProfileTab={setProfileTab} />
                                :
                                null}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Profile;