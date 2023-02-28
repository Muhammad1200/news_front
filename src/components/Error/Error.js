import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {resetError} from "../../redux/Errors/Reducer";


// toast.configure()
const options = {
    autoClose: 2000,
    className: '',
    position: toast.POSITION.BOTTOM_CENTER,
};

const Error = (props) => {

    const errors = useSelector((state)=>state.error.error);
    const dispatch = useDispatch();

    useEffect(()=>{
        errors.map((val,key)=>{
            if(val?.color === "warning"){
                toast.warn(val?.message, options);
            }
            else if(val?.color === "danger"){
                toast.error(val?.message, options);
            }
            else if(val?.color === "success"){
                toast.success(val?.message, options);
            }
            else if(val?.color === "info"){
                toast.info(val?.message, options);
            }
            dispatch(resetError(key));
        })
    },[errors])

    return (
        <>
            <ToastContainer />
        </>
    );
}

export default Error;