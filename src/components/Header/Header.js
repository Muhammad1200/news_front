import React, { useState } from "react";
import '../../assets/css/header.css';


// mui icon
import PersonIcon from '@mui/icons-material/Person';

//mui dialog
import Dialog from '@mui/material/Dialog';

import Signin from './Signin';
import Signup from './Signup';
import SwipHeader from './SwipHeader';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/Auth/Reducer";
import { FilterAlt} from "@mui/icons-material";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLogin = useSelector((state)=>state?.auth?.isLogin);
    let currentUrl = window.location.href.split("/");

    const [login, setLogin] = useState(false);
    const [collapse, setCollapse] = useState(false);

    const [open, setOpen] = React.useState(false);
    const [state, setState] = useState(1);

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    }

    const SetHandleClick = (e) => {
        if (!login) {
            handleClickOpen(1);
        } else {
            navigate("/profile");
        }
    }

    const handleClickOpen = (e) => {
        setState(e);
        setOpen(true);
        if (e === 6) {
            setOpen(false);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const toggleCollapse = () => {
        setCollapse(!collapse);
    };
    return (
        <>
            <header className="Header">

                {/* full screen header  starts here*/}

                <div className='container header header-full px-0'>
                    <Dialog
                        fullWidth={true}
                        maxWidth={"xs"}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        {
                            ( state === 1 ) &&
                            <Signin onClose={handleClose} handleClickOpen={handleClickOpen} />
                        }
                        {
                            ( state === 2 ) &&
                            <Signup onClose={handleClose} handleClickOpen={handleClickOpen} />
                        }

                    </Dialog>


                    <div className={"mt-5"}>
                        <div className='col-sm-12'>
                            <div className='navigation-header-home'>
                                <Link className=' home_link' to="/">
                                    <p className={"align-self-center  home_link  gr-clr-hd"}>
                                        LOGO
                                    </p>
                                </Link>


                                <div className="profile_login_header">
                                    {
                                        isLogin?
                                            <>
                                                <Link className='home_link' to="/profile">
                                                    <p
                                                        className={`${
                                                            currentUrl?.[3] === "profile" ? 
                                                            "align-self-center  home_link home-clr mx-3" 
                                                            :
                                                            "align-self-center  home_link  gr-clr-hd mx-3"
                                                        }`}>
                                                        Profile
                                                    </p>
                                                </Link>
                                                <p className='brdr-right my-2'></p>
                                                <p
                                                    onClick={logoutHandler}
                                                    className={"align-self-center  home_link  gr-clr-hd mx-3"}>
                                                    Logout
                                                </p>
                                            </>
                                            :
                                            <>
                                                <p onClick={() => { handleClickOpen(1) }}
                                                    className={"align-self-center  home_link  gr-clr-hd mx-3"}>
                                                    Login
                                                </p>
                                                <p className='brdr-right my-2'></p>
                                                <p onClick={() => { handleClickOpen(2) }}
                                                    className={"align-self-center  home_link  gr-clr-hd mx-3"}>
                                                    Sign Up
                                                </p>
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* full screen header ends here*/}

                {/* small screen header starts here*/}
                <div className='header-small'>
                    <div className='bg-red-hdr'>
                        <div className='header-small'>
                            <SwipHeader handleClickOpen={handleClickOpen} />
                        </div>
                            <div className='d-flex'>
                                <div>
                                    {
                                        isLogin &&
                                        <Link className=' home_link' to="/profile">
                                            <PersonIcon style={{ fontSize: 30 }} className='p-1 bg-dark text-white rounded-circle align-self-center text-white mx-2 me-4' />
                                        </Link>
                                    }
                                    <Link className=' home_link' to="/">
                                        <FilterAlt style={{ fontSize: 30 }}  className='p-1 bg-dark text-white rounded-circle align-self-center mt-2 me-4' />
                                    </Link>
                                </div>
                            </div>
                    </div>
                </div>

                <div className='container-fluid  header header-small'>
                    <Dialog
                        fullWidth={true}
                        maxWidth={"xs"}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        {
                            (state === 1) &&
                            <Signin onClose={handleClose} handleClickOpen={handleClickOpen} />
                        }
                        {
                            (state === 2) &&
                            <Signup onClose={handleClose} handleClickOpen={handleClickOpen} />
                        }

                    </Dialog>
                </div>

                {/* small screen header  ends here*/}

            </header>
        </>
    );
};

export default Header;