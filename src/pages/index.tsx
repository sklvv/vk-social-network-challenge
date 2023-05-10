import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import UserPage from "./UserPage";
import ProfilePage from "./ProfilePage";
import AuthProvider from "@/shared/ui/AuthProvider";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>hello</>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="/profile"
                    element={
                        <AuthProvider>
                            <ProfilePage />
                        </AuthProvider>
                    }
                />
                <Route
                    path="/user/:id"
                    element={
                        <AuthProvider>
                            <UserPage />
                        </AuthProvider>
                    }
                />
                <Route path="*" element={<>404</>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
