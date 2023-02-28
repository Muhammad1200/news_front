import React, {useState} from 'react';
import { Checkbox } from '@mui/material';
import { red } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import {onInputChangeHandler} from "../../constant/helpers";
import {loginRequest} from "../../redux/Auth/Action";
import {useDispatch} from "react-redux";


const Signin = (props) => {

    const initial = {
        email : '',
        password : '',
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const [form,setForm] = useState({...initial});
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        let x = await dispatch(loginRequest(form));
        setLoading(false);
        if(x.payload) props?.onClose();
    }

    return (
        <div>
            <div className='py-5 px-4 signin-page'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <p className='f-25 mb-4 f-pop-med'>Sign in</p>
                    </div>
                </div>

                <form onSubmit={onSubmitHandler}>
                    <input
                        type={"email"}
                        required={true} name={"email"} value={form?.email}
                        onChange={(e)=>onInputChangeHandler(e,setForm)}
                        placeholder='Email Address'
                        className='form-control p-3 mb-2 f-14' />

                    <input
                        type='password'
                        placeholder='Password'
                        required={true} name={"password"} value={form?.password}
                        onChange={(e)=>onInputChangeHandler(e,setForm)}
                        className='form-control p-3 mb-2 f-14' />

                    <button
                        type={"submit"}
                        className='form-control p-3 border-0 bg-grad-login-header  text-white f-pop-med'>
                        {loading ? <i className={"fa fa-spin fa-spinner"}></i> : 'Login'}
                    </button>
                </form>

                <div className='row mt-4'>
                    <div className='col-lg-12 text-center'>
                        <p className='f-13 f-pop-med'>
                            Don't have an Account ?
                            <span className='text-danger cursor_pointr f-pop-med'
                                  onClick={() => { props.handleClickOpen(2) }}>
                                SIGN UP
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signin;