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
  Image,
  Input,
  Select,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import { compareAsc, format } from 'date-fns';
// import EditorPicks from '../slider/EditorPicks';
// import PressSlider from '../slider/PressSlider';

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

const CategoryB = (props) => {
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

  // console.log('vategoryB', data);

  return (
    <>
      <Box
        px={{ base: '4', lg: '24', xl: '40', '2xl': '80' }}
        mb="65px"
        py={{ base: '50px', md: '20' }}
        bg={isLightTheme ? '#ededed' : '#000000'}
      >
        <Flex
          justifyContent={'space-between'}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Flex alignItems={'baseline'}>
            <Icon as={FaCircle} boxSize={5} mr="12px" color={'#ab20ef'} />
            <Box>
              <Heading as="h2" fontSize={'24px'} mb="8px">
                {process.env.home.categoryList.CATEGORY_B.NAME}
              </Heading>
              <Text color={subTitleTextColor}>
                {process.env.home.categoryList.CATEGORY_B.DESC}
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

            <Link href={process.env.home.categoryList.CATEGORY_B.SLUG}>
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

        <Box my={6} bg={'white'} p={4}>
          <Carousel responsive={responsive} autoPlay={false}>
            {data.edges &&
              data.edges.map((item, key) => {
                return (
                  item &&
                  item.node && (
                    <Link key={key} href={item.node.slug}>
                      <Grid
                        cursor={'pointer'}
                        templateColumns={{ md: '12fr', sm: 'repeat(1, 1fr)' }}
                        textColor="white"
                      >
                        <Box>
                          <Flex py="4" alignItems={'center'}>
                            <Box>
                              {item?.node?.featuredImage && (
                                <Image
                                  h={'100px'}
                                  w={'100px'}
                                  rounded={'full'}
                                  objectFit={'cover'}
                                  src={item.node.featuredImage.node.sourceUrl}
                                  alt={item.node.title}
                                />
                              )}
                            </Box>
                            <Box w={'70%'} px={4} display={'grid'}>
                              <Text
                                fontWeight={'700'}
                                color={'rgba(0, 0, 0, 0.85)'}
                                fontSize="16px"
                                lineHeight={'1.5'}
                              >
                                {item.node.title}
                              </Text>
                              <Flex mt="2" alignItems={'center'}>
                                <Icon
                                  as={FaRegClock}
                                  color={subTitleTextColor}
                                  fontSize="sm"
                                />
                                <Text ml={2} color={subTitleTextColor}>
                                  {format(
                                    new Date(item.node.date),
                                    'yyyy-MM-dd'
                                  )}
                                </Text>
                              </Flex>
                            </Box>
                          </Flex>
                        </Box>
                      </Grid>
                    </Link>
                  )
                );
              })}
          </Carousel>
        </Box>
      </Box>
    </>
  );
};

export default CategoryB;
