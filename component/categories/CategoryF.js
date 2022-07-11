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
// import Editorpicks from '../slider/EditorPicks';
// import VideoSecond from '../slider/VideoSecond';

const CategoryF = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const primaryBgColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const secondaryBgColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';
  const subTitleTextColor = isLightTheme ? 'rgba(34, 34, 34, 0.6)' : 'white';

  // store data
  const { data } = props;

  // console.log('categoryF', data);

  const tempArr = [1, 2, 3, 4];

  return (
    <Box
      px={{ base: '4', lg: '24', xl: '40', '2xl': '80' }}
      mb="65px"
      py={{ base: '50px', md: '20' }}
      bg={!isLightTheme ? 'rgba(0, 0, 0, 0.85)' : '#ededed'}
    >
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
              ACADEMY
            </Heading>
            <Text color={primaryTextColor}>
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
            <Icon as={ChevronLeftIcon} boxSize={6} />{' '}
            <Icon as={ChevronRightIcon} boxSize={6} />
          </Flex>
          <Link href={process.env.home.categoryList.CATEGORY_F.SLUG}>
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
            data.edges.slice(4, 8).map((item, index) => {
              const tagName = item?.node?.tags?.edges[0]?.node?.name;
              const videoId = item.node.youtube.videoId;

              const featuredImage =
                videoId &&
                `https://i1.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
              return (
                <Link key={index} href={item.node.slug}>
                  <Box
                    cursor={'pointer'}
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

                    <Img
                      draggable={false}
                      style={{ width: '100%', height: '100%' }}
                      src={featuredImage}
                      alt={item.node.title}
                    />
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
                      {item.node.title}
                    </Heading>
                    <Flex mt="2" alignItems={'center'}>
                      <Icon as={FaRegClock} color={'white'} />
                      <Text color={'white'} ml={4}>
                        {format(new Date(item.node.date), 'yyyy-MM-dd')}
                      </Text>
                    </Flex>
                  </Box> */}
                  </Box>
                </Link>
              );
            })}
        </Carousel>
      </Box>

      <Divider border={'1px solid gray !important'} />

      <Grid
        templateColumns={{ md: '4fr 4fr 4fr 4fr', sm: 'repeat(1, 1fr)' }}
        textColor="white"
        gap={6}
        my={6}
      >
        {data.edges &&
          data.edges.slice(4, 8).map((item, index) => {
            const tagName = item?.node?.tags?.edges[0]?.node?.name;

            return (
              item &&
              item.node && (
                <Link key={index} href={item.node.slug}>
                  <Box cursor="pointer">
                    <Flex py="4" w={'100%'}>
                      <Box w={'40%'}>
                        <Img
                          h={{ base: '100px', md: '100%' }}
                          objectFit={'cover'}
                          src={item.node.featuredImage.node.sourceUrl}
                          alt={item.node.title}
                        />
                      </Box>
                      <Box w={'60%'} px={'4'}>
                        {tagName && (
                          <Button
                            // colorScheme={'#fb7c00'}
                            bg={'#fb7c00'}
                            color="white"
                            mb={2}
                            rounded={'none'}
                            size="xs"
                            fontWeight={'bold'}
                          >
                            {tagName}
                          </Button>
                        )}
                        <Text
                          fontWeight={'bold'}
                          noOfLines={3}
                          lineHeight="1.5"
                          paddingRight="2"
                          color={primaryTextColor}
                        >
                          {item.node.title}
                          {/* {process.env.headerMenuName} */}
                        </Text>
                        <Flex mt="2" alignItems={'center'}>
                          <Icon
                            as={FaRegClock}
                            color={primaryTextColor}
                            fontSize={'sm'}
                          />
                          <Text ml={2} color={primaryTextColor} fontSize={'sm'}>
                            {format(new Date(item.node.date), 'yyyy-MM-dd')}
                          </Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Link>
              )
            );
          })}
      </Grid>
    </Box>
  );
};

export default CategoryF;
