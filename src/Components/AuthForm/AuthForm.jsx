import {
  Box,
  Flex,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";

import React, { useState } from "react";
import GoogleAuth from "./GoogleAuth";
import Login from "./Login";
import Signup from "./Signup";

const AuthForm = () => {
    const [inputs , setInputs] = useState({
        email:'',
        password:'',
        confirmPassword:''
    });
    // const handleAuth = () =>{
    //     console.log("inputs" , inputs);
    //     if(! inputs.email || !inputs.password){
    //         alert("please fill all the fields");
    //     }
    //     else{
    //         navigate("/")
    //     }

    // };
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Logo Image" />

          {isLogin ? <Login /> : <Signup />}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} height={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} height={"1px"} bg={"gray.400"} />
          </Flex>
          <GoogleAuth />
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
