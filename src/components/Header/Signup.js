import React, {useState} from 'react';
import {CATEGORIES} from "../../constant/Variables";
import {onInputChangeHandler} from "../../constant/helpers";
import {useDispatch} from "react-redux";
import {signUpRequest} from "../../redux/Auth/Action";

const Signup = (props) => {

    const initials = {
        'first_name' : '',
        'last_name' : '',
        'email' : '',
        'password' : '',
        'confirm_password' : '',
        'category' : '',
    }
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const [form,setForm] = useState({...initials});
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        let x = await dispatch(signUpRequest(form));
        setLoading(false);
        if(x.payload) props?.onClose();
    }

    return (
        <div>
            <div className='py-5 px-4 signin-page'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <p className='f-25 f-pop-med mb-4'>Sign Up</p>
                    </div>
                </div>
                <form onSubmit={onSubmitHandler}>
                    <div className='row mt-3'>
                        <div className='col-lg-6'>
                            <input
                                type='text'
                                placeholder='First Name'
                                name={'first_name'}
                                required={true} value={form?.first_name}
                                onChange={(e)=>onInputChangeHandler(e,setForm)}
                                className='f-pop-med form-control height-5 mb-4 f-14'
                            />
                        </div>
                        <div className='col-lg-6'>
                            <input
                                type={'text'}
                                placeholder={'Last Name'}
                                name={'last_name'}
                                required={true} value={form?.last_name}
                                onChange={(e)=>onInputChangeHandler(e,setForm)}
                                className={'f-pop-med form-control height-5 mb-4 f-14'} />
                        </div>
                        <div className='col-lg-12'>
                            <input
                                type='email'
                                placeholder='Email Address'
                                name={'email'}
                                required={true} value={form?.email}
                                onChange={(e)=>onInputChangeHandler(e,setForm)}
                                className={"f-pop-med form-control height-5 mb-4 f-14"} />
                        </div>
                        <div className='col-lg-6'>
                            <input
                                type={"password"}
                                placeholder={"Password"}
                                name={'password'}
                                required={true} value={form?.password}
                                onChange={(e)=>onInputChangeHandler(e,setForm)}
                                className={"f-pop-med form-control height-5 mb-4 f-14"} />
                        </div>
                        <div className='col-lg-6'>
                            <input
                                type={"password"}
                                placeholder={"Confirm Password"}
                                name={'confirm_password'}
                                required={true} value={form?.confirm_password}
                                onChange={(e)=>onInputChangeHandler(e,setForm)}
                                className={"f-pop-med form-control height-5 mb-4 f-14"} />
                        </div>
                        <div className='col-lg-12'>
                            <select
                                name="category" defaultValue={form?.category} value={form?.category}
                                onChange={(e)=>onInputChangeHandler(e,setForm)}
                                required={true} className={"f-pop-med form-control height-5 mb-4 f-14"} id="">
                                <option value="">Select Category</option>
                                {
                                    CATEGORIES.map((val,key)=>(
                                        <option value={val} key={key}>{val}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <button
                        type={"submit"}
                        className={"f-pop-med form-control height-5 border-0 bg-grad-login-header text-white"}
                    >
                        {
                            loading ?
                                <i className={"fa fa-spin fa-spinner"}></i>
                                :
                                'Sign up'
                        }
                    </button>
                </form>
                <div className='row mt-4'>
                    <div className='col-lg-12 text-center'>
                        <p className='f-13 f-pop-med'>
                            Already have an Account ?
                            <span className='text-danger ms-2 cursor_pointer'
                            onClick={() => { props.handleClickOpen(1) }}>
                                SIGN IN
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;