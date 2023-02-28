import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import MyInterest from "../pages/Profile/MyInterest";
import Profile from "../pages/Profile/Profile";
import {
	HOME, MY_INTEREST, PROFILE,
} from "./RouteLinks";
import {ProtectedRoute} from "./ProtectedRoute";

const PublicRoutes = () => {

	return (
		<>
			{/*<BrowserRouter>*/}
			<Routes>
				<Route path={HOME} element={<Home />} />

				{/* Auth Routes */}
				<Route element={ <ProtectedRoute /> }>
					<Route path={PROFILE} element={<Profile />} />
					<Route path={MY_INTEREST} element={<MyInterest />} />
				</Route>
				{/* Auth Ro	utes */}
			</Routes>
			{/*</BrowserRouter>*/}
		</>
	);
};

export default PublicRoutes;
