import {Navigate} from "react-router-dom";
import {HOME} from "./RouteLinks";
import { useSelector} from "react-redux";

export const ProtectedRoute = ( { children } ) => {
    const { isLogin } = useSelector(state => state?.auth);

    if ( isLogin === false ) return <Navigate to={HOME} />;
    return children;
};