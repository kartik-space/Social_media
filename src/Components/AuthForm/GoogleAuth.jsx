import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function GoogleAuth() {
  return (
 <Flex
    alignItems={"center"}
    justifyContent={"center"}
    cursor={"pointer"}
  >
    <Image src="/google.png" w={5} alt="Google icon" />
    <Text mx={2} color={"blue.100"}>
      Login With Google
    </Text>
  </Flex>
  )
}

export default GoogleAuth