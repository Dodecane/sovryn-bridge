import { Box, Flex, HStack } from '@chakra-ui/react';
import { GithubIcon } from 'icons/GithubIcon';
import React from 'react';

export const Footer = () => (
  <Flex
    position="relative"
    justify={{ base: 'center', sm: 'space-between' }}
    align="center"
    h={20}
    maxW="75rem"
    px={8}
    w="100%"
    color="grey"
  >
    <HStack spacing={4}>
      <Box _hover={{ color: 'blue.500' }} transition="0.25s">
        <a
          href="https://github.com/Dodecane/sovryn-bridge"
          rel="noreferrer noopener"
          target="_blank"
        >
          <GithubIcon />
        </a>
      </Box>
    </HStack>
  </Flex>
);