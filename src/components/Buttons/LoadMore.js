import React from "react";
import {useSelector} from "react-redux";

const LoadMore = ({form,load}) => {

    const news = useSelector((state) => state?.news?.list);

    return (
        <div className="row justify-content-center">
            {
                form.page > 1 && news.length > 0  &&
                <button type={"button"}
                        onClick={()=>load("-")}
                        className={"btn btn-info mx-1"}>
                    Previous
                </button>
            }
            {
                form.page > 0 && news.length >= 18 &&
                <button type={"button"}
                        onClick={()=>load("+")}
                        className={"btn btn-info mx-1"}>
                    Next
                </button>
            }
        </div>
    )
}

export default LoadMore;