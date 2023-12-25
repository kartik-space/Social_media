import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../assets/Constants';

const PostFooter = ({username}) => {
    const [Liked , setLiked] = useState(false)
    const [Likes , setLikes] = useState(1000);
    const handleLike = () => {
        if (Liked){
            setLiked(false)
            setLikes(Likes -1)
        }else{
            setLiked(true)
            setLikes(Likes + 1)
        }
    }
  return (
    <Box mb={10}>
    <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
            {!Liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
        </Box>
        <Box cursor={"pointer"} fontSize={17}>
            <CommentLogo />
        </Box>
    </Flex>
    <Text fontWeight={600} fontSize="sm">
        {Likes} likes
    </Text>
    <Text fontSize="sm" fontWeight={700}>
        {username}{" "}
        <Text as='span' fontWeight={400}>
            feeling good
        </Text>
    </Text>
    <Text fontSize='small' color='gray'>
        view all 1000 comments
    </Text>

    <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} w={"full"}>
        <InputGroup>
        <Input  variant={'flushed'} placeholder='add a comment...' fontSize={"14px"}/>
        <InputRightElement>
            <Button
            fontSize={14}
            color={"blue.500"}
            fontWeight={600}
            cursor={"pointer"}
            _hover={"white"}
            bg={"transparent"}
            >Post</Button>
        </InputRightElement>
        </InputGroup>
    </Flex>
    </Box>
  )
}

export default PostFooter