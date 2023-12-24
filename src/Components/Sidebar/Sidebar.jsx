import { Avatar, Box, Flex, Link, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from "react-icons/bi";
import { Link as RouterLink } from 'react-router-dom';
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from '../../assets/Constants';
function Sidebar() {
    const SidebarItems = [
        {
            icon : <AiFillHome  size={25} />,
            text:"Home",
            Link:"/",
        },
        {
            icon : <SearchLogo />,
            text:"Search",
        },
        {
            icon : <NotificationsLogo />,
            text:"Notification",
        },
        {
            icon : <CreatePostLogo />,
            text:"Create",
        },
        {
            icon : <Avatar size={"sm"} name = 'Burak' src='/profilepic.png' />,
            text:"Profile",
            Link:"/asaprogrammer",
        }
    ]
  return (
    <Box height={"100vh"} borderRight={"1px solid"} borderColor={"whiteAlpha.300"} py={8} position={"sticky"} top={0} left={0} px={{base:2,md:4}}>
        <Flex direction={"column"} gap={10} w={"full"} h={"full"}>
            <Link to={"/"} as={RouterLink} pl={2} display={{base:"none" , md:"block"}} cursor={"pointer"}>
                <InstagramLogo />
            </Link>
            <Link to={"/"} as={RouterLink} p={2} display={{base:"block" , md:"none"}} cursor={"pointer"} borderRadius={6} _hover={{bg:"whiteAlpha.200"}} w={10}>
                <InstagramMobileLogo />
            </Link>
            <Flex direction={"column"} gap={5} cursor={"pointer"}>
                {SidebarItems.map((items , index) =>(
                    <Tooltip hasArrow 
                    label={items.text}
                    placement='right'
                    ml={1}
                    openDelay={500}
                    display={{base:"block" , md:"none"}}>
                        <Link 
                        to={items.Link}
                        display={"flex"}
                        as={RouterLink}
                        alignItems={"center"}
                        gap={4}
                        _hover={{bg:"whiteAlpha.400"}}
                        borderRadius={6}
                        p={2}
                        w={{base:"10" , md:"full"}}
                        justifyContent={{base:"center", md:"flex-start"}}
                        >
                            {items.icon}
                            <Box display={{base:"none" , md:"block"}}>
                                {items.text}
                            </Box>
                        </Link>
                    </Tooltip>
                ))}
            </Flex>
            <Tooltip hasArrow 
                    label={"Log Out"}
                    placement='right'
                    ml={1}
                    openDelay={500}
                    display={{base:"block" , md:"none"}}>
                        <Link 
                        to={"/auth"}
                        display={"flex"}
                        as={RouterLink}
                        alignItems={"center"}
                        gap={4}
                        _hover={{bg:"whiteAlpha.400"}}
                        borderRadius={6}
                        p={2}
                        w={{base:"10" , md:"full"}}
                        mt={"auto"}
                        justifyContent={{base:"center", md:"flex-start"}}
                        >
                            <BiLogOut  size={25} />
                            <Box display={{base:"none" , md:"block"}}>
                                LogOut
                            </Box>
                        </Link>
                    </Tooltip>
        </Flex>
    </Box>
  )
}

export default Sidebar