import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import ProfileSideTab from './ProfileSideTab';
import {useDispatch, useSelector} from 'react-redux';
import {addInterestRequest, getInterestRequest} from "../../redux/Interests/Action";

const MyInterest = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sources = useSelector((state)=>state?.interests?.list);

    const onCheckHandler = async (e) => {
        let { name , value  } = e.target;
        await dispatch(addInterestRequest({ name : value }));
    }

    useEffect(()=>{
        dispatch(getInterestRequest());
    },[])

    return (
        <div className="Profile Customer_loyality">
            <div className="Profile_content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <ProfileSideTab/>
                        </div>
                        <div className="col-lg-9 pos-rel pl-5 res-loylty-pad ">
                            <p className="profile_head mt-0 mb-0">My Interest</p>
                            <div className='row'>

                                <div className='col-md-4 d-flex justify-content-start align-items-center my-3'>
                                    <input id={"bbc-news"}
                                           value={"bbc-news"}
                                           name={"sources"}
                                           checked={(sources?.find((val)=>val?.name==='bbc-news' ))?true:false}
                                           style={{width:'10%'}}
                                           onClick={onCheckHandler}
                                           type="checkbox"/>
                                    <label htmlFor={"bbc-news"} style={{margin:0}}>
                                        BBC News
                                    </label>
                                </div>

                                <div className='col-md-4 my-3'>
                                    <input id={"new-york-magazine"}
                                           value={"new-york-magazine"}
                                           style={{width:'10%'}}
                                           checked={(sources?.find((val)=>val?.name==='new-york-magazine' ))?true:false}
                                           onClick={onCheckHandler}
                                           name={"sources"} type="checkbox"/>
                                    <label htmlFor={"new-york-magazine"} style={{margin:0}}>
                                        New York Magazine
                                    </label>
                                </div>

                                <div className='col-md-4 my-3'>
                                    <input id={"the-globe-and-mail"}
                                           style={{width:'10%'}}
                                           onClick={onCheckHandler}
                                           checked={(sources?.find((val)=>val?.name==='the-globe-and-mail' ))?true:false}
                                           value={"the-globe-and-mail"}
                                           name={"sources"} type="checkbox"/>
                                    <label htmlFor={"the-globe-and-mail"} style={{margin:0}}>
                                        The Guardian
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyInterest;