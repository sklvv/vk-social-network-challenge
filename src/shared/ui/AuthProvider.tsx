import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";

const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const { uid } = useAppSelector(state => state.user);
    const location = useLocation();

    if (!uid) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else {
        return <Navigate to="/profile" state={{ from: location }} replace />;
    }

    return children;
};
export default AuthProvider;
