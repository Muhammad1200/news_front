import React from 'react';

const CreateNewPassword = (props) => {
    return (
        <div>
            <div className='py-5 px-4 createNewPass-page'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <p className='f-25 mb-4 f-pop-med'>Create New Password</p>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-lg-12'>
                        <input type='email' placeholder='Email Address' className='f-pop-med form-control p-3 mb-4 f-14' />
                    </div>
                    <div className='col-lg-12 mb-4'>
                        <p className='f-12 f-pop-med  clr-9f'>
                            If you forgot your password, enter your e-mail address or login.
                            Your account information will be sent to you by email along
                            with code to reset your password.
                        </p>
                    </div>

                </div>
                <button onClick={() => { props.handleClickOpen(5) }} className='form-control f-pop-med   p-3 border-0 bg-grad-login-header  text-white'>Send Code</button>
                <div className='row mt-4'>
                    <div className='col-lg-12 text-center'>
                        <p className=' f-pop-med '>Already have an Account ?  <span onClick={() => { props.handleClickOpen(1) }} className='text-danger cursor_pointr ms-2 cursor-pointer'>SIGN IN</span> </p>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-12 text-center'>
                        <p className='f-pop-med '>Don't have an Account ?  <span onClick={() => { props.handleClickOpen(2) }} className='text-danger cursor_pointr ms-2 cursor-pointer' >SIGN UP</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNewPassword;