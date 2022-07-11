import React from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Grid,
  Heading,
  Icon,
  Img,
  Input,
  Select,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const NewsLetter = () => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

  return (
    <>
      <Box px={{ base: '4', lg: '24', xl: '64' }} bg={'#166cf8'}>
        <Grid
          templateColumns={{ md: '3fr 6fr 3fr', sm: 'repeat(1, 1fr)' }}
          textColor="white"
          gap={4}
          py={'12'}
        >
          <Box> </Box>
          <Box textAlign={'center'}>
            <Heading as="h4" size={'md'} color={'white'}>
              GET THE BEST BLOG STORIES INTO YOUR INBOX!
            </Heading>
            <Text color={'white'}>
              The latest entertainment news in the world
            </Text>

            <FormControl>
              <Flex my={'4'}>
                <Input
                  bg="white"
                  placeholder="Enter Your Email ID"
                  mr={'4'}
                  rounded={'none'}
                />
                <Button
                  variant={'outline'}
                  color="white"
                  _hover={{ color: 'black', bg: 'white' }}
                  rounded={'none'}
                >
                  Submit
                </Button>
              </Flex>
            </FormControl>
          </Box>
          <Box></Box>
        </Grid>
      </Box>
    </>
  );
};

export default NewsLetter;
