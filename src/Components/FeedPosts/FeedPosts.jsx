import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FeedPost from "./FeedPost";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  return (
    <Container maxW={"Container.sm"}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack alignItems={"flex-start"} gap={2}>
                <Skeleton h={"10px"} w={"200px"} />
                <Skeleton h={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
          <FeedPost img="/img2.png" avatar="/img2.png" username="kartik._.0" />
          <FeedPost
            img="/img1.png"
            avatar="/img1.png"
            username="asaprogrammer"
          />
          <FeedPost img="/img3.png" avatar="/img3.png" username="kritish.0" />
          <FeedPost
            img="/img4.png"
            avatar="/img4.png"
            username="vanshika_701"
          />
        </>
      )}
    </Container>
  );
};

export default FeedPosts;
