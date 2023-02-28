import React from "react";
import { Skeleton } from "@mui/material";
import Box from "@mui/material/Box";

const NewsList = () => {

    return (
        <>
            {
                [...new Array(18)].map((val,key)=>(
                    <div className={"col-lg-4 col-md-6 my-3"} key={key}>
                        <Skeleton variant="rectangular" width={'100%'} height={200} />
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton width="100%" />
                            <Skeleton width="100%" />
                            <Skeleton width="100%" />
                        </Box>
                    </div>
                ))
            }
        </>
    )
}

export default NewsList;
