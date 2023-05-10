import { userSignOut } from "@/shared/api";
import {
    Avatar,
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";

const UserActions = () => {
    const handleSignOut = () => {
        userSignOut();
    };
    return (
        <Flex alignItems={"center"}>
            <Menu>
                <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                >
                    <Avatar
                        size={"sm"}
                        src={
                            "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        }
                    />
                </MenuButton>
                <MenuList>
                    <MenuItem>Link 1</MenuItem>
                    <MenuItem>Link 2</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={handleSignOut}>Выйти</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
};

export default UserActions;
