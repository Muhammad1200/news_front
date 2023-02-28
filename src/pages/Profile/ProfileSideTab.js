import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {logout} from "../../redux/Auth/Reducer";

const ProfileSideTab = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
        navigate('/');
    }

    return (
        <div className='ProfileSideTab'>
            <div className="grey_porfile_div">
                <p className="my_acc_brdr">
                    <span className="iconz"></span> My Account
                </p>

                <p onClick={() => { navigate('/profile') }} className="prof-p cursor_pointer">
                    <PersonOutlineIcon className="iconz" />
                    Profile
                </p>
                <p onClick={() => { navigate('/my-interest') }} className="prof-p cursor_pointer">
                    <CalendarTodayOutlinedIcon className="iconz" />
                    My Interest
                </p>
                <div className="logout_div">
                    <p onClick={logoutHandler} className="prof-p cursor_pointer">Logout</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileSideTab;