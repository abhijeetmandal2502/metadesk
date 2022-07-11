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
  VStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import { compareAsc, format } from 'date-fns';
import Brandlist from './slider/brand-list';
// import Bulletslider from './slider/BulletSlider';

const HeroSection = (props) => {
  // responsiveness

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  // theme
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const primaryBgColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const secondaryBgColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';

  // store data
  const { data, cryptoData } = props;

  // console.log('herosection', data);

  return (
    <>
      <Box
        my={{ base: '2', md: '8' }}
        px={{ base: '4', lg: '24', xl: '40', '2xl': '80' }}
      >
        <Box border={'1px solid '} px={2}>
          <Brandlist cryptoData={cryptoData} />
        </Box>
      </Box>

      <Box
        px={{ base: '4', lg: '24', xl: '40', '2xl': '80' }}
        mb="65px"
        mt={'8'}
      >
        {/* trisha */}

        <Grid
          templateColumns={{ md: '6fr 3fr 3fr', sm: 'repeat(1, 1fr)' }}
          textColor="white"
          gap={2}
        >
          <>
            <Carousel
              showDots={true}
              arrows={false}
              className="bulletslider"
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              transitionDuration={500}
              autoPlaySpeed={4000}
            >
              {data.edges &&
                data.edges.slice(0, 5).map((item, index) => {
                  const tagName = item?.node?.tags?.edges[0]?.node?.name;
                  {
                    /* console.log('checktaghero', item); */
                  }
                  return (
                    <Link key={index} href={item.node.slug}>
                      <Box cursor="pointer" style={{ position: 'relative' }}>
                        <Flex
                          w={'full'}
                          h={{ base: '320px', md: '470px' }}
                          backgroundImage={
                            item.node?.featuredImage?.node?.sourceUrl
                          }
                          backgroundSize={'cover'}
                          backgroundPosition={'center center'}
                        >
                          <VStack
                            w={'full'}
                            justify={'center'}
                            bgGradient={
                              'linear-gradient(to bottom, rgb(255 255 255 / 0%), #0f0e0e)'
                            }
                          >
                            <Stack
                              maxW={'2xl'}
                              align={'flex-start'}
                              spacing={6}
                            >
                              <Box
                                p={4}
                                style={{
                                  position: 'absolute',
                                  left: 0,
                                  top: '10px',
                                }}
                              >
                                {tagName && (
                                  <Button
                                    color="white"
                                    bg="#03a9e7"
                                    borderRadius="5px"
                                    size="xs"
                                    fontWeight={'bold'}
                                  >
                                    {tagName}
                                  </Button>
                                )}
                              </Box>

                              <Box
                                p={'25px 20px'}
                                w="100%"
                                style={{
                                  position: 'absolute',
                                  left: 0,
                                  bottom: 0,
                                  color: 'white',
                                }}
                              >
                                <Heading
                                  color={'white'}
                                  as="h4"
                                  fontWeight="700"
                                  fontSize={{ base: '19px', md: '2xl' }}
                                  noOfLines={2}
                                  lineHeight="1.5"
                                  mb={{ base: '12px', md: '12px' }}
                                >
                                  {item.node.title}
                                </Heading>
                                <Flex mt="2" alignItems={'center'}>
                                  <Icon
                                    as={FaRegClock}
                                    color={'rgba(255, 255, 255, 0.85)'}
                                    fontSize="sm"
                                  />
                                  <Text
                                    color={'rgba(255, 255, 255, 0.85)'}
                                    ml={2}
                                    fontSize="sm"
                                  >
                                    {format(
                                      new Date(item.node.date),
                                      'yyyy-MM-dd'
                                    )}
                                  </Text>
                                </Flex>
                              </Box>
                            </Stack>
                          </VStack>
                        </Flex>
                      </Box>
                    </Link>
                  );
                })}
            </Carousel>
          </>
          {data.edges &&
            data.edges.slice(5, 6).map((item, index) => {
              const tagName = item?.node?.tags?.edges[0]?.node?.name;
              return (
                item &&
                item.node && (
                  <Link key={index} href={item.node.slug}>
                    <Flex
                      w={'full'}
                      h={{ base: '250px', md: '100%' }}
                      backgroundImage={item.node.featuredImage.node.sourceUrl}
                      backgroundSize={'cover'}
                      backgroundPosition={'center center'}
                    >
                      <VStack
                        style={{ position: 'relative' }}
                        w={'full'}
                        justify={'center'}
                        bgGradient={
                          'linear-gradient(to bottom, rgb(255 255 255 / 0%), #0f0e0e);'
                        }
                      >
                        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                          <Box
                            p={'25px 20px'}
                            style={{
                              position: 'absolute',
                              left: 0,
                              top: '10px',
                              color: 'white',
                            }}
                          >
                            {tagName && (
                              <Button
                                bg={'#fb7c00'}
                                color="white"
                                borderRadius="5px"
                                size="xs"
                                fontWeight={'bold'}
                              >
                                {tagName}
                              </Button>
                            )}
                          </Box>

                          <Box
                            p={'25px 20px'}
                            style={{
                              position: 'absolute',
                              left: 0,
                              bottom: 0,
                              color: 'white',
                            }}
                          >
                            <Heading
                              color={'white'}
                              as="h4"
                              fontSize={{ base: '17px', md: 'lg' }}
                              fontWeight="700"
                              noOfLines={3}
                              lineHeight="1.5"
                              mb={{ base: '12px', md: '12px' }}
                            >
                              {item.node.title}
                            </Heading>
                            <Flex mt="2" alignItems={'center'}>
                              <Icon
                                as={FaRegClock}
                                color={'rgba(255, 255, 255, 0.85)'}
                                fontSize="sm"
                              />
                              <Text
                                color={'rgba(255, 255, 255, 0.85)'}
                                ml={2}
                                fontSize="sm"
                              >
                                {format(new Date(item.node.date), 'yyyy-MM-dd')}
                              </Text>
                            </Flex>
                          </Box>
                        </Stack>
                      </VStack>
                    </Flex>
                  </Link>
                )
              );
            })}

          <Box display={'grid'}>
            <Grid
              templateColumns={{ md: '12fr', sm: 'repeat(1, 1fr)' }}
              textColor="white"
              gap={2}
            >
              {data.edges &&
                data.edges.slice(6, 8).map((item, index) => {
                  const tagName = item?.node?.tags?.edges[0]?.node?.name;
                  // console.log('checkiteem', item);
                  return (
                    item &&
                    item.node && (
                      <Link key={index} href={item.node.slug}>
                        <Flex
                          w={'full'}
                          h={{ base: '250px', md: '100%' }}
                          backgroundImage={
                            item.node.featuredImage.node.sourceUrl
                          }
                          backgroundSize={'cover'}
                          backgroundPosition={'center center'}
                        >
                          <VStack
                            style={{ position: 'relative' }}
                            w={'full'}
                            justify={'center'}
                            bgGradient={
                              'linear-gradient(to bottom, rgb(255 255 255 / 0%), #0f0e0e);'
                            }
                          >
                            <Stack
                              maxW={'2xl'}
                              align={'flex-start'}
                              spacing={6}
                            >
                              <Box
                                p={'25px 20px'}
                                style={{
                                  position: 'absolute',
                                  left: 0,
                                  top: '10px',
                                  color: 'white',
                                }}
                              >
                                {tagName && (
                                  <Button
                                    bg={index == 0 ? '#dd03eb' : '#ecbd02'}
                                    color="white"
                                    borderRadius="5px"
                                    size="xs"
                                    fontWeight={'bold'}
                                  >
                                    {tagName}
                                  </Button>
                                )}
                              </Box>

                              <Box
                                p={'25px 20px'}
                                style={{
                                  position: 'absolute',
                                  left: 0,
                                  bottom: 0,
                                  color: 'white',
                                }}
                              >
                                <Heading
                                  color={'white'}
                                  as="h4"
                                  fontSize={{ base: '17px', md: 'lg' }}
                                  fontWeight="700"
                                  noOfLines={3}
                                  lineHeight="1.5"
                                  // mb={{ base: '12px', md: '12px' }}
                                >
                                  {item.node.title}
                                </Heading>
                                {/* <Flex mt="2" alignItems={'center'}>
                                  <Icon as={FaRegClock} color={'white'} fontSize="sm" />
                                  <Text color={'white'} ml={2} fontSize="sm">
                                    {format(new Date(item.node.date), 'yyyy-MM-dd')}
                                  </Text>
                                </Flex> */}
                              </Box>
                            </Stack>
                          </VStack>
                        </Flex>
                      </Link>
                    )
                  );
                })}
            </Grid>
          </Box>
        </Grid>

        {/* trisha */}
      </Box>
    </>
  );
};

export default HeroSection;
