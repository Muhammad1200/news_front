import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
// import LibraryAddCheckIcon from '@mui/icons-material/Info';
import ClassIcon from '@mui/icons-material/Class';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useSelector} from "react-redux";
// import '../../assests/css/smallheader.css';

const drawerBleeding = 1;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

function SwipHeader(props) {
    const { window } = props;
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;
    const isLogin = useSelector((state)=>state?.auth?.isLogin);

    return (
        <div className='swip_header_sml'>
            <Root className='header-small'>
                <CssBaseline />
                <Global
                    styles={{
                        '.MuiDrawer-root > .MuiPaper-root': {
                            // height: `calc(45% - ${drawerBleeding}px)`,
                            height: `460px`,
                            overflow: 'visible',
                        },
                    }}
                />
                <DensityMediumIcon className='mt-2 ms-2' style={{ background: "#dbdbdb", color: "white" }} onClick={toggleDrawer(true)} />
                {/* <Button >Open</Button> */}
                <SwipeableDrawer
                    container={container}
                    anchor="left"
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    swipeAreaWidth={drawerBleeding}
                    disableSwipeToOpen={false}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <div className='content_control_swiphead_res_header'>

                        <div className='d-flex mt-5'>

                            <div className='flx-2 list-style-type-circle'>
                                <div className='px-3 py-2'>
                                    <Link className='clr-hom-sml-hdr' to="/">
                                        <HomeIcon className='f-30' />
                                        <span className='mt-4 pt-4 pos-rel-top-four ms-2 '>Home</span>
                                    </Link>
                                </div>

                                {
                                    !isLogin &&
                                    <>
                                        <div className='px-3 py-2'>
                                            <div className='clr-hom-sml-hdr' onClick={()=>{
                                                toggleDrawer(false);
                                                props?.handleClickOpen(1);
                                            }}>
                                                <InfoIcon className='f-30' />
                                                <span className='pt-2 pos-rel-top-four ms-2'>Login </span>
                                            </div>
                                        </div>

                                        <div className='px-3 py-2'>
                                            <div className='clr-hom-sml-hdr' onClick={()=>{
                                                toggleDrawer(false);
                                                props?.handleClickOpen(2);
                                            }}>
                                                <ClassIcon className='f-30' />
                                                <span className='pt-2 pos-rel-top-four ms-2'> Sign Up</span>
                                            </div>
                                        </div>
                                    </>
                                }

                                {
                                    isLogin &&
                                    <div className='px-3 py-2'>
                                        <Link className='clr-hom-sml-hdr' to="/profile">
                                            <AccountCircleIcon className='f-30' />
                                            <span className='pt-2 pos-rel-top-four ms-2'>App Profile </span>
                                        </Link>
                                    </div>
                                }

                              
                            </div>

                            <div className='flx-1 flex-end-hdr-smll'>
                                <CloseIcon onClick={toggleDrawer(false)} className='close_btn_sml_hdr' />
                                {/* <p className='close_btn_sml_hdr pt-2'></p> */}
                            </div>
                        </div>

                    </div>

                </SwipeableDrawer>
            </Root>
        </div>
    );
}


export default SwipHeader;