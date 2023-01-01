import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = (props) => {
    return localStorage.getItem("loggedInUser") ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
    );
};

export default PrivateRoute;
