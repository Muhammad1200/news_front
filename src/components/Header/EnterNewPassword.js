import React from 'react';

const EnterNewPassword = (props) => {
    return (
        <div>
            <div className='py-5 px-4 createNewPass-page'>
                <div className='row'>
                    <div className='col-lg-12 text-center'>
                        <p className='f-25 f-pop-med  mb-4'>Create A New Password</p>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-lg-12'>
                        <input type='password' placeholder='New Password' className='f-pop-med form-control p-3 mb-4 f-14' />
                    </div>
                    <div className='col-lg-12'>
                        <input type='password' placeholder='Confirm New Password' className='f-pop-med form-control p-3 mb-4 f-14' />
                    </div>
                </div>
                <button onClick={() => { props.handleClickOpen(1) }} className='f-pop-med form-control p-3 border-0 bg-grad-login-header  text-white'>Set Password</button>

            </div>
        </div>
    )
};

export default EnterNewPassword;