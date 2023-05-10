import { HStack, Link } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
            textDecoration: "none",
        }}
        href={"#"}
    >
        {children}
    </Link>
);

const AuthActions = () => {
    return (
        <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map(link => (
                <NavLink key={link}>{link}</NavLink>
            ))}
        </HStack>
    );
};

export default AuthActions;
