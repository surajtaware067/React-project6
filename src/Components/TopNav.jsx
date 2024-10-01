import { Box, Button, Container, Flex, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaBars, FaUserTie } from 'react-icons/fa6'

const TopNav = ({title,onOpen}) => {
    return (
        <Box px='4' bg="white">
            <HStack maxW="70rem" h="16" justify="space-between"  mx="auto">
                <Icon as={FaBars} onClick={onOpen}
                  display={{
                    base:"block",
                    lg:"none"
                  }}></Icon>
                 
                <Heading fontWeight="medium" fontSize="28px">
                    {title}
                </Heading>

                <Menu>
                    <MenuButton>
                        <Icon as={FaUserTie} fontSize="24px" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Support</MenuItem>

                    </MenuList>
                </Menu>


            </HStack>
        </Box>
    );
};

export default TopNav;
