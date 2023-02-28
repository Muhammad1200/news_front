import React from 'react';

const OTP = (props) => {
    return (
        <div>
            <div className='py-5 px-4 createNewPass-page'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <p className='f-25 mb-4'>Enter OTP Code Here</p>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-lg-12'>
                        <input type='number' placeholder='Enter OTP Code' className='f-pop-med form-control p-3 mb-4 f-14' />
                    </div>
                    <div className='col-lg-12 mb-4'>
                        <p className='f-pop-med f-12 clr-9f'>
                            Enter 6 digit code to reset your password.
                        </p>
                    </div>

                </div>
                <button onClick={() => { props.handleClickOpen(4) }} className='form-control p-3 border-0 bg-grad-login-header text-white'>Submit</button>
                <div className='row mt-4'>
                    <div className='col-lg-12 text-center'>
                        <p className='f-pop-med '>Already have an Account ?  <span onClick={() => { props.handleClickOpen(1) }} className='text-danger cursor-pointer cursor_pointr ms-2'>SIGN IN</span> </p>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-lg-12 text-center'>
                        <p className='f-pop-med '>Don't have an Account ?  <span onClick={() => { props.handleClickOpen(2) }} className='text-danger cursor-pointer cursor_pointr ms-2'>SIGN IN</span> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OTP;