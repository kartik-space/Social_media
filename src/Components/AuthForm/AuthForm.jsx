import {
    Box,
    Button,
    Flex,
    Image,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
    const navigate = useNavigate();
    const [inputs , setInputs] = useState({
        email:'',
        password:'',
        confirmPassword:''
    });
    const handleAuth = () =>{
        console.log("inputs" , inputs);
        if(! inputs.email || !inputs.password){
            alert("please fill all the fields");
        }
        navigate("/")
    };
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="Logo Image" />
          <Input placeholder="Email" fontSize={14} type="email"
          value={inputs.email}
          onChange={(e) => setInputs({...inputs,email:e.target.value})}
          />
          <Input placeholder="Password" fontSize={14} type="password"
            value={inputs.password}
            onChange={(e) => setInputs({...inputs,password:e.target.value})}
          />
          {!isLogin ? (
            <Input
              placeholder="confirm Password"
              fontSize={14}
              type="password"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}
            />
          ) : null}
          <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={handleAuth}>
            {isLogin ? "Login" : "Sign Up"}
          </Button>
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
