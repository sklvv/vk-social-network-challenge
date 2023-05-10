import { setUser } from "@/entities/user";
import { SignUpForm } from "@/features/register";
import { useAppDispatch } from "@/shared/hooks/redux";
import { useAuth } from "@/shared/hooks/useAuth";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const userInfo = useAuth();
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    useEffect(() => {
        dispatch(setUser(userInfo));
        nav("/profile");
    }, [userInfo, dispatch, nav]);

    return (
        <Box px={"4"}>
            <SignUpForm />
        </Box>
    );
};

export default RegisterPage;
