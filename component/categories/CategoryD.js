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
// import ReactPlayer from 'react-player';
// import Video from '../slider/Video';

const CategoryD = (props) => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const primaryBgColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const secondaryBgColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';
  const subTitleTextColor = isLightTheme ? 'rgba(34, 34, 34, 0.6)' : 'white';

  // responsiveness

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

  // console.log('checkcategoryd', props.data);

  const { data } = props;

  const tempArr = [1, 2, 3, 4];

  return (
    <>
      <Box
        px={{ base: '4', lg: '24', xl: '40', '2xl': '80' }}
        mb="65px"
        py={{ base: '50px', md: '20' }}
        bg={'rgba(0, 0, 0, 0.85)'}
      >
        <Flex
          justifyContent={'space-between'}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Flex alignItems={'baseline'}>
            <Icon as={FaCircle} boxSize={5} mr="12px" color={'#ab20ef'} />
            <Box>
              <Heading as="h2" fontSize={'24px'} color={'white'} mb="8px">
                VIDEO
              </Heading>
              <Text color={'white'}>
                The latest entertainment news in the world
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
              <Icon as={ChevronLeftIcon} boxSize={6} color={'white'} />{' '}
              <Icon color={'white'} as={ChevronRightIcon} boxSize={6} />
            </Flex>
            <Link href={process.env.home.categoryList.CATEGORY_D.SLUG}>
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

        <Box my={'8'}>
          <Carousel arrows={false} responsive={responsive} autoPlay={false}>
            {data.edges &&
              data.edges.slice(0, 8).map((item, index) => {
                const videoId = item.node.youtube.videoId;
                const tagName = item?.tag?.edges[0]?.node?.name;

                const featuredImage =
                  videoId &&
                  `https://i1.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
                {
                  /* console.log('catD', tagName); */
                }
                return (
                  <Link key={index} href={item.node.slug}>
                    <Box
                      cursor="pointer"
                      style={{ position: 'relative' }}
                      mx={'2'}
                    >
                      <Box
                        p={4}
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '10px',
                          color: 'white',
                        }}
                      >
                        {tagName && (
                          <Button
                            bg={'#91b7e7'}
                            color="white"
                            rounded={'none'}
                            size="xs"
                            fontWeight={'bold'}
                          >
                            {tagName}
                          </Button>
                        )}
                      </Box>

                      <Box
                        p={4}
                        style={{
                          position: 'absolute',
                          right: 0,
                          top: '10px',
                          color: 'white',
                        }}
                      >
                        <Icon as={FaPlayCircle} boxSize={14} />
                      </Box>

                      {featuredImage && (
                        <Img
                          draggable={false}
                          style={{ width: '100%', height: '100%' }}
                          src={featuredImage}
                          alt={item.node.title}
                        />
                      )}
                      <Heading
                        color={'white'}
                        as="h4"
                        fontSize="22px"
                        noOfLines={2}
                        lineHeight="1.5"
                        mt={2}
                        mb={{ base: '12px', md: '12px' }}
                      >
                        {item.node.title}
                      </Heading>
                      <Flex mt="2" alignItems={'center'}>
                        <Icon as={FaRegClock} color={'white'} fontSize={'sm'} />
                        <Text color={'white'} ml={2} fontSize={'sm'}>
                          Oct 18, 2019
                        </Text>
                      </Flex>
                      {/* <Box
                      p={4}
                      style={{
                        position: 'absolute',
                        left: 0,
                        bottom: '10px',
                        color: 'white',
                      }}
                    >
                      <Heading color={'white'} as="h4" size={'lg'}>
                        {' '}
                        The Joy of Petty Grievances in Death Becomes Her
                      </Heading>
                      <Flex mt="2" alignItems={'center'}>
                        {' '}
                        <Icon as={FaRegClock} color={'white'} />{' '}
                        <Text color={'white'} ml={4}>
                          Oct 18, 2019
                        </Text>{' '}
                      </Flex>
                    </Box> */}
                    </Box>
                  </Link>
                );
              })}
          </Carousel>
          {/* <Video /> */}
        </Box>

        <Divider />

        <Grid
          templateColumns={{ md: '4fr 4fr 4fr 4fr', sm: 'repeat(1, 1fr)' }}
          textColor="white"
          gap={8}
          my={6}
        >
          {data.edges &&
            data.edges.slice(8, 16).map((item, index) => {
              return (
                <Link key={index} href={item.node.slug}>
                  <Box cursor="pointer">
                    <Flex py="4">
                      <Box w={'40%'}>
                        <Img
                          h={'100%'}
                          objectFit={'cover'}
                          src={item.node.featuredImage.node.sourceUrl}
                          alt={item.node.title}
                        />
                      </Box>
                      <Box w={'60%'} px={'4'}>
                        <Button
                          colorScheme={'orange'}
                          color="white"
                          mb={2}
                          rounded={'none'}
                          size="xs"
                          fontWeight={'bold'}
                        >
                          BITCOIN
                        </Button>
                        <Text
                          fontWeight={'medium'}
                          noOfLines={3}
                          lineHeight="1.5"
                          paddingRight="2"
                          color={'white'}
                          fontSize="16px"
                        >
                          {item.node.title}
                        </Text>
                        <Flex mt="2" alignItems={'center'}>
                          <Icon as={FaRegClock} color={'white'} />
                          <Text color={'white'} ml={4} fontSize={'14px'}>
                            {format(new Date(item.node.date), 'yyyy-MM-dd')}
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Link>
              );
            })}
        </Grid>
      </Box>
    </>
  );
};

export default CategoryD;
