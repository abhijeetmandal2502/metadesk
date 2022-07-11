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
import { compareAsc, format } from 'date-fns';
import Carousel from 'react-multi-carousel';

const CategoryG = (props) => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const primaryBgColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const secondaryBgColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';
  const subTitleTextColor = isLightTheme ? 'rgba(34, 34, 34, 0.6)' : 'white';

  // responsiveness of carousel

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // store data
  const { data } = props;

  // console.log('categoryG', data);

  // get post  from api

  const postArr = [];
  var k = 0;
  for (let i = 0; i < data.edges.length / 6; i++) {
    if (i > data.edges.length / 6) {
      break;
    }
    var postObj = [];
    for (let j = 0; j < 3; j++) {
      const title = data.edges[k].node.title;
      const featuredImage = data.edges[k].node.featuredImage.node.sourceUrl;
      const date = data.edges[k].node.date;
      const slug = data.edges[k].node.slug;
      const tag = data.edges[k].node.tags;
      const tempObj = {
        title: title,
        featuredImage: featuredImage,
        date: date,
        slug: slug,
        tag: tag,
      };

      postObj.push(tempObj);
      k = k + 1;
    }

    postArr.push(postObj);
  }
  // console.log('looptitle', postArr);

  return (
    <Box
      px={{ base: '4', lg: '24', xl: '40', '2xl': '80' }}
      mb="65px"
      py={{ base: '50px', md: '20' }}
    >
      {postArr && (
        <Grid
          templateColumns={{ md: '12fr ', lg: '9fr 3fr', sm: 'repeat(1, 1fr)' }}
          textColor="white"
          gap={4}
        >
          <Box>
            <Flex
              justifyContent={'space-between'}
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <Flex alignItems={'baseline'}>
                <Icon as={FaCircle} boxSize={5} mr="12px" color={'#ab20ef'} />
                <Box>
                  <Heading
                    as="h2"
                    fontSize={'24px'}
                    mb="8px"
                    color={primaryTextColor}
                  >
                    {process.env.home.categoryList.CATEGORY_G.NAME}
                  </Heading>
                  <Text color={subTitleTextColor}>
                    {process.env.home.categoryList.CATEGORY_G.DESC}
                  </Text>
                </Box>
              </Flex>
              <Box
                display={'flex'}
                alignItems="center"
                justifyContent={{ base: 'flex-end' }}
                mt={{ base: '4', md: '0' }}
              >
                <Flex>
                  <Icon as={ChevronLeftIcon} boxSize={6} />{' '}
                  <Icon as={ChevronRightIcon} boxSize={6} />
                </Flex>
                <Link href={process.env.home.categoryList.CATEGORY_G.SLUG}>
                  <Button
                    variant={'outline'}
                    colorScheme="blue"
                    rounded={'none'}
                    size="sm"
                    fontWeight={'bold'}
                    padding="6px 13px"
                    border="2px solid #166cf8"
                    color="#166cf8"
                    fontSize={'14px'}
                    lineHeight={'1.5'}
                  >
                    {process.env.text.MORE}
                  </Button>
                </Link>
              </Box>
            </Flex>
            <Grid
              templateColumns={{ md: '12fr', sm: 'repeat(1, 1fr)' }}
              textColor="white"
              gap={4}
              mt={6}
            >
              <Carousel responsive={responsive} autoPlay={false}>
                {postArr &&
                  postArr.map((post, index) => {
                    return (
                      <Grid
                        key={index}
                        templateColumns={{ md: '12fr', sm: 'repeat(1, 1fr)' }}
                        textColor="white"
                      >
                        {/* <Box px="4" borderRight={'1px solid #b3b3b3'}> */}
                        {post &&
                          post.map((item, j) => {
                            const tagName = item?.tag?.edges[0]?.node?.name;
                            return (
                              <Link key={j} href={item.slug}>
                                <Box
                                  cursor={'pointer'}
                                  px="4"
                                  borderRight={'1px solid #b3b3b3'}
                                >
                                  <Flex
                                    py="4"
                                    borderBottom={'1px solid #b3b3b3'}
                                  >
                                    <Box w={'70%'} pr="2">
                                      {/* {tagName && (
                                        <Button
                                          bg={'#03a9e7'}
                                          color="white"
                                          mb={2}
                                          rounded={'none'}
                                          size="xs"
                                          fontWeight={'bold'}
                                        >
                                          {tagName}
                                        </Button>
                                      )} */}
                                      <Text
                                        fontSize={'16px'}
                                        lineHeight="1.5"
                                        fontWeight={'bold'}
                                        noOfLines={2}
                                        color={
                                          isLightTheme
                                            ? 'rgba(0, 0, 0, 0.85)'
                                            : 'white'
                                        }
                                        // mb={'12px'}
                                      >
                                        {item.title}
                                      </Text>
                                      <Flex mt="2" alignItems={'center'}>
                                        <Icon
                                          as={FaRegClock}
                                          color={primaryTextColor}
                                          fontSize={'sm'}
                                        />
                                        <Text
                                          ml={2}
                                          color={primaryTextColor}
                                          fontSize={'sm'}
                                        >
                                          {format(
                                            new Date(item.date),
                                            'yyyy-MM-dd'
                                          )}
                                        </Text>
                                      </Flex>
                                    </Box>
                                    <Box w={'30%'}>
                                      {item.featuredImage && (
                                        <Img
                                          h={{ base: '100px', md: '100%' }}
                                          objectFit={'cover'}
                                          src={item.featuredImage}
                                          alt={item.title}
                                        />
                                      )}
                                    </Box>
                                  </Flex>
                                </Box>
                              </Link>
                            );
                          })}
                        {/* </Box> */}
                      </Grid>
                    );
                  })}
              </Carousel>
            </Grid>
          </Box>
          <Box h={{ base: '100px', lg: '100%' }} bg="#ededed"></Box>
        </Grid>
      )}
    </Box>
  );
};

export default CategoryG;
