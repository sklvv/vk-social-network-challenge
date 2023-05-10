import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { createUser } from "@/shared/api";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/redux";
import { setUser } from "@/entities/user";

export default function SignupCard() {
    const nav = useNavigate();

    const { uid } = useAppSelector(state => state.user);
    // useEffect(() => {
    //     if (uid) {
    //         nav("/profile");
    //     }
    // }, [nav, uid]);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSignUp = async (e: React.FormEvent<HTMLDivElement>) => {
        e.preventDefault();
        try {
            const res = await createUser(email, password);
            console.log(res);
            dispatch(setUser(res));
            // nav("/profile");
        } catch (error) {
            return;
        }
    };

    const handleHaveAnAccount = () => {
        nav("/login");
    };

    return (
        <Flex
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
            px={"24"}
        >
            <Stack
                spacing={8}
                mx={"auto"}
                // maxW={"lg"}
                py={12}
                px={6}
                w={"lg"}
            >
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Создать аккаунт
                    </Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack
                        spacing={4}
                        as="form"
                        onSubmit={e => handleSignUp(e)}
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
                            <InputGroup>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={e => handlePassword(e)}
                                />
                                <InputRightElement h={"full"}>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            setShowPassword(
                                                showPassword => !showPassword
                                            )
                                        }
                                    >
                                        {showPassword ? (
                                            <ViewIcon />
                                        ) : (
                                            <ViewOffIcon />
                                        )}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}
                                type="submit"
                            >
                                Зарегистрироваться
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={"center"}>
                                Уже есть аккаунт?{" "}
                                <Link
                                    color={"blue.400"}
                                    onClick={handleHaveAnAccount}
                                >
                                    Войти
                                </Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
