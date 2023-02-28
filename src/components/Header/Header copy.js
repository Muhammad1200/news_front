import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
//css
import '../../assests/css/font-size-family.css'
import '../../assests/css/header.css'

//images
import Logo from '../../assests/images/logo.png';

// mui icon
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';

//mui dialog
import Dialog from '@mui/material/Dialog';

import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';
import CreateNewPassword from '../Auth/CreateNewPassword';
import OTP from '../Auth/OTP';
import EnterNewPassword from '../Auth/EnterNewPassword';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import SwipHeader from './SwipHeader';
// import Checkbox from '@mui/material/Checkbox';

const Header = () => {
    const navigate = useNavigate();
    let currentUrl = window.location.href.split("/");

    const [login, setLogin] = useState(false);
    const [collapse, setCollapse] = useState(false);

    const [open, setOpen] = React.useState(false);
    const [state, setState] = useState(1);

    const SetHandleClick = (e) => {
        if (!login) {
            handleClickOpen(1);
        } else {
            navigate("/myprofile");
        }
    }

    const handleClickOpen = (e) => {
        setState(e);
        // console.log(e);
        setOpen(true);
        if (e === 6) {
            setOpen(false);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };
    const toggleCollapse = () => {
        // console.log("collapse", collapse);
        setCollapse(!collapse);
    };

    return (
        <div>

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
                    {(state == 1) && <Signin handleClickOpen={handleClickOpen} />}
                    {(state == 2) && <Signup handleClickOpen={handleClickOpen} />}
                    {(state == 3) && <CreateNewPassword handleClickOpen={handleClickOpen} />}
                    {(state == 4) && <EnterNewPassword handleClickOpen={handleClickOpen} />}
                    {(state == 5) && <OTP handleClickOpen={handleClickOpen} />}
                    {/*  state == 6  (close of dialog) */}

                </Dialog>


                <div className=' '>
                    <div className='row '>
                        <div className='col-sm-4'>
                            <div className=''>
                                <Link to="/"><img style={{ height: "50px", width: "120px", objectFit: "contain" }} className='bg-white py-2 px-0' src={`https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1724px-Apple_logo_grey.svg.png`} alt='Logo' /></Link>
                            </div>
                        </div>
                        <div className='col-sm-8 align-self-center text-right'>
                            <div className="flx-header-box">
                                <a className='home_link' href="mailto:someone@example.com">
                                    <div className='mx-3'>
                                        <p className=' clr-sml-hdr-top f-pop-reg'><MailIcon className='color-red mr-3 ' /> Mail us</p>
                                        <small className='f-14 clr-gr f-pop-reg mt-3'>maazahmed03400@gmail.com</small>
                                    </div>
                                </a>
                                <a className='home_link' href="tel:+441279-247-247">
                                    <div className='mx-3'>
                                        <p className=' clr-sml-hdr-top f-pop-reg'><LocalPhoneIcon className='color-red mr-3  ' /> Call Us</p>
                                        <small className='f-14 clr-gr f-pop-reg mt-3'>+923400377689</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12'>
                        <div className='navigation-header-home'>
                            <Link className='f-pop-med home_link' to="/"><p className={`${currentUrl?.[3] === "" ? "align-self-center f-pop-reg home_link home-clr  gr-clr-hd" : "align-self-center f-pop-reg home_link  gr-clr-hd"}`}>Home</p></Link>
                            <p className='brdr-right my-2'></p>
                            <Link className='f-pop-reg  home_link' to="/data-security"><p className={`${currentUrl?.[3] === "data-security" ? "align-self-center f-pop-reg home_link home-clr " : "align-self-center f-pop-reg home_link  gr-clr-hd"}`}>Data Security</p></Link>
                            <p className='brdr-right my-2'></p>
                            <Link className='f-pop-reg  home_link' to="/app-security"><p className={`${currentUrl?.[3] === "app-security" ? "align-self-center f-pop-reg home_link home-clr " : "align-self-center f-pop-reg home_link  gr-clr-hd"}`}>App Security</p></Link>
                            <p className='brdr-right my-2'></p>
                            <Link className='f-pop-reg  home_link' to="/network-security"><p className={`${currentUrl?.[3] === "network-security" ? "align-self-center f-pop-reg home_link home-clr " : "align-self-center f-pop-reg home_link  gr-clr-hd"}`}>Network Security</p></Link>

                            <p className='brdr-right my-2'></p>
                            <Link className='f-pop-reg  home_link' to="/aboutus"><p className={`${currentUrl?.[3] === "aboutus" ? "align-self-center f-pop-reg home_link home-clr " : "align-self-center f-pop-reg home_link  gr-clr-hd"}`}>About Us</p></Link>
                            <p className='brdr-right my-2'></p>
                            <Link className='f-pop-reg  home_link' to="/contactus"><p className={`${currentUrl?.[3] === "contactus" ? "align-self-center f-pop-reg home_link home-clr " : "align-self-center f-pop-reg home_link  gr-clr-hd"}`}>Contact Us</p></Link>
                            <p className='brdr-right my-2'></p>
                            <Link className='f-pop-reg  home_link' to="/faqs"><p className={`${currentUrl?.[3] === "faqs" ? "align-self-center f-pop-reg home_link home-clr " : "align-self-center f-pop-reg home_link  gr-clr-hd"}`}>FAQ's</p></Link>
                            {/* <p className='brdr-right my-2'></p> */}
                            {/* <Link className='f-pop-reg  home_link' to="/reviews"><p className={`${currentUrl?.[3] === "reviews" ? "align-self-center f-pop-reg home_link home-clr " : "align-self-center f-pop-reg home_link  gr-clr-hd"}`}>Reviews</p></Link> */}
                            {/* <Link className='f-pop-reg  home_link' to="/joinus"><p className={`${currentUrl?.[3] === "joinus" ? "align-self-center f-pop-reg home_link home-clr " : "align-self-center f-pop-reg home_link  gr-clr-hd"}`}>Join Us</p></Link> */}
                            {/* <div>
                                <Link className='f-pop-reg  home_link' to="/myprofile"><PersonIcon className='align-self-center color-red' /></Link>
                                <button onClick={() => { handleClickOpen(1) }} className='btn btn-danger bt-red f-14 px-4 py-2 ms-3 f-pop-med'>Login</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* full screen header  ends here*/}

            {/* small screen header  starts here*/}
            <div className='header-small'>
                <div className='bg-red-hdr'>
                    <div className='header-small'>
                        <SwipHeader />
                    </div>
                    <div className='d-flex'>
                        <div>
                            <Link onClick={() => { SetHandleClick(1) }} className='f-pop-reg home_link' to="/myprofile">
                                <PersonIcon className='align-self-center text-white mt-2 me-4' />
                            </Link>
                        </div>
                        <div className=''>
                            <Link to="/">
                                <img className=' img_respon py-2 px-0' src={Logo} alt='Logo' />
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
                    {(state == 1) && <Signin handleClickOpen={handleClickOpen} />}
                    {(state == 2) && <Signup handleClickOpen={handleClickOpen} />}
                    {(state == 3) && <CreateNewPassword handleClickOpen={handleClickOpen} />}
                    {(state == 4) && <EnterNewPassword handleClickOpen={handleClickOpen} />}
                    {(state == 5) && <OTP handleClickOpen={handleClickOpen} />}
                    {/* state == 6 means close dialog */}
                </Dialog>
            </div>

            {/* small screen header  ends here*/}

        </div>
    )
}

export default Header;