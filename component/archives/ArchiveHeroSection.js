import React from 'react';
import {
  Box,
  SimpleGrid,
  Button,
  Checkbox,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ChevronRightIcon, DragHandleIcon } from '@chakra-ui/icons';
import Link from 'next/link';

import {
  FaWhatsapp,
  FaCaretRight,
  FaPastafarianism,
  FaFacebookF,
  FaTwitter,
  FaRegEdit,
} from 'react-icons/fa';
import { useRouter } from 'next/router';

const ArchiveHeroSection = (props) => {
  const post = props.newsData;
  const router = useRouter();

  const pathName = router.asPath;

  const pathArr = router.asPath.split('/');
  const name = pathArr[pathArr.length - 1];

  const typeName = name.split('-').join(' ').toUpperCase();
  const breadcrumb = router.asPath.split('/');

  //   console.log('checkherosection', breadcrumb);

  //   for(let i=0; i<pathArr.length;i++){
  //       if()

  //   }

  return (
    <>
      {' '}
      <Box background="linear-gradient(to right, #a55901 0%, #c77d00 50%, #f7b700 100%)">
        <Box
          display={{ base: 'block', md: 'flex' }}
          px={'3%'}
          py={'6%'}
          justifyContent="space-between"
          alignItems="center"
          //   background="url(https://akm-img-a-in.tosshub.com/aajtak/resource/img/lf-circel.png), url(https://akm-img-a-in.tosshub.com/aajtak/resource/img/rh-circel.png)"
          backgroundRepeat=" no-repeat"
          backgroundPosition="center left, center right 15px"
          backgroundSize="auto"
          position="relative"
        >
          <Box>
            <Text as={'h3'} color={'white'}>
              {/* {pathName} */}
              {breadcrumb.map((item, key) => {
                // console.log("key and item", item)
                if (item === '') {
                  var name = 'Home';
                } else {
                  var name = item.replace(/-/g, ' ');
                }

                var firstLetter = name.slice(0, 1);
                var name = firstLetter.toUpperCase() + name.substring(1);

                return (
                  <span key={key}>
                    {name}

                    {key < breadcrumb.length - 1 ? <ChevronRightIcon /> : null}
                  </span>
                );
              })}
            </Text>
            <Flex alignItems={'center'} mt={5}>
              <Heading
                as={'h2'}
                fontSize="2xl"
                color={'white'}
                fontWeight={'bold'}
              >
                {typeName}
              </Heading>
            </Flex>
          </Box>
          <Box my={'2'}>
            {/* <Flex>
              <Button
                variant={'outline'}
                rounded={'full'}
                border={'1px solid #d71920 !important'}
                size={'sm'}
                bg="white"
                color="#d71920"
              >
                <Icon as={FaRegEdit} boxSize={4} />
                Feedback
              </Button>
            </Flex> */}
            {/* <Flex
              justifyContent={{ base: 'flex-start', md: 'space-around' }}
              mt={2}
            >
              <Icon as={FaWhatsapp} boxSize={4} color={'white'} mx={2} />
              <Icon as={FaFacebookF} boxSize={4} color={'white'} mx={2} />
              <Icon as={FaTwitter} boxSize={4} color={'white'} mx={2} />
            </Flex> */}
          </Box>
        </Box>
      </Box>
      <Box px="3%" py="4" bg={'#eeeeee'}>
        <Grid
          templateColumns={{ md: '8fr 4fr', sm: 'repeat(2, 1fr)' }}
          textColor="white"
          gap={4}
          mb={4}
        >
          {/* 1st box */}
          <Box>
            <Grid
              templateColumns={{ md: '6fr 6fr  ', sm: 'repeat(2, 1fr)' }}
              textColor="white"
              gap={4}
            >
              {post &&
                post.slice(0, 2).map((item, key) => {
                  return (
                    item &&
                    item.node && (
                      <Link href={item.node.uri}>
                        <Box key={key} mb={5} mt={0} cursor="pointer">
                          <Image
                            mb="6"
                            h="auto"
                            w="100%"
                            src={item.node.featuredImage.node.sourceUrl}
                            alt={item.node.title}
                          />
                          <Heading
                            as="h2"
                            fontSize="17px"
                            color="#000"
                            lineHeight="28px"
                            fontWeight="600"
                            mb="4"
                          >
                            {item.node.title}
                          </Heading>
                        </Box>
                      </Link>
                    )
                  );
                })}
            </Grid>
            <Grid
              mt={4}
              templateColumns={{ md: '4fr 4fr 4fr ', sm: 'repeat(3, 1fr)' }}
              textColor="white"
              gap={4}
            >
              {post &&
                post.slice(2, 5).map((item, key) => {
                  return (
                    item &&
                    item.node && (
                      <Link href={item.node.uri}>
                        <Box textColor="white" cursor="pointer">
                          <Image
                            h="auto"
                            w="100%"
                            src={item.node.featuredImage.node.sourceUrl}
                            alt={item.node.title}
                          />
                          <Heading
                            pt={2}
                            fontWeight={700}
                            fontSize="2xl"
                            noOfLines={4}
                          >
                            {item.node.title}
                          </Heading>
                        </Box>
                      </Link>
                    )
                  );
                })}
            </Grid>
          </Box>
          {/* 2nd box */}

          <Box>
            {post.slice(5, 12).map((item, key) => {
              return (
                <Box
                  cursor="pointer"
                  mb={4}
                  borderBottom={'1px solid #964300 '}
                >
                  <Grid
                    templateColumns={{
                      md: '3fr 7fr',
                      base: '3fr 7fr',
                    }}
                    gap="4"
                  >
                    {' '}
                    <Image
                      mb="2"
                      h="auto"
                      w="100%"
                      src={item.node.featuredImage.node.sourceUrl}
                      alt={item.node.title}
                    />
                    <Box>
                      <Text textAlign="justify" noOfLines={2} fontWeight="bold">
                        {item.node.title}
                      </Text>
                    </Box>
                  </Grid>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default ArchiveHeroSection;
