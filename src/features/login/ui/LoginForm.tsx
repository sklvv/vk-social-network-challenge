import { setUser } from "@/entities/user";
import { signinUser } from "@/shared/api";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SimpleCard() {
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { uid } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    // useEffect(() => {
    //     if (uid) {
    //         nav("/profile");
    //     }
    // }, [nav, uid]);

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleNotHaveAnAccount = () => {
        nav("/register");
    };

    const handleSignIn = async (e: React.FormEvent<HTMLDivElement>) => {
        e.preventDefault();
        try {
            const res = await signinUser(email, password);
            dispatch(setUser(res));
            // nav("/profile");
        } catch (error) {
            return;
        }
    };

    return (
        <Flex
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack
                spacing={8}
                mx={"auto"}
                // maxW={"lg"}
                w={"lg"}
                py={12}
                px={6}
                // minW={"lg"}
            >
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Войдите в свой аккаунт</Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack
                        spacing={4}
                        as={"form"}
                        onSubmit={e => handleSignIn(e)}
                    >
                        <FormControl id="email" isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                value={email}
                                onChange={e => handleEmail(e)}
                            />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Пароль</FormLabel>
                            <Input
                                type="password"
                                value={password}
                                onChange={e => handlePassword(e)}
                            />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}
                                type="submit"
                            >
                                Войти
                            </Button>
                            <Text>
                                Нет аккаунта?{" "}
                                <Link
                                    color={"blue.400"}
                                    onClick={handleNotHaveAnAccount}
                                >
                                    Зарегистрироваться
                                </Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
