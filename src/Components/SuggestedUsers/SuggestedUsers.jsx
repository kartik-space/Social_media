import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Box fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Box>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
                SeeAll
            </Text>
        </Flex>
        <SuggestedUser name="Rishi Singh" followers="194" avatar="https://media.licdn.com/dms/image/D4D03AQGcuR3tL3_OoA/profile-displayphoto-shrink_100_100/0/1683396422187?e=1709164800&v=beta&t=xAHnTpSZJewcHEOO-yQf1R3JvT29hUC-lv3Ih5ouzA4" />
        <SuggestedUser name="Yashvi Sharma" followers="194" avatar="https://media.licdn.com/dms/image/D4D03AQExfwsJUO_I4A/profile-displayphoto-shrink_400_400/0/1679678803362?e=1709164800&v=beta&t=E17e9gIDlk9zRv-tpRD2QxTN04I374qyBo8OZ1jP0mE" />
        <SuggestedUser name="Yogesh Vashisth" followers="396" avatar="https://media.licdn.com/dms/image/D4D03AQHQ1_Pe8lSoqA/profile-displayphoto-shrink_400_400/0/1682240017320?e=1709164800&v=beta&t=TQYFaPKHck3GOIVgNGEMdUyNCTOaf5OR1HyNeRcsNb4" />
        <Box mt={5} color={"gray.500"} fontSize={12}>
            @ 2023 Built by{" "}
            <Link href='https://github.com/kartik-space' target='_blank' color={"blue.500"} fontSize={14}>
                kartik.__0
            </Link>
        </Box>

    </VStack>
  )
}

export default SuggestedUsers