import React, { useEffect, useState } from 'react';
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
import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { compareAsc, format } from 'date-fns';
import { getCateogryRecentPostbyName, getCategoryByName } from '../../lib/api';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

const CategoryC = (props) => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const primaryBgColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const secondaryBgColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';
  const subTitleTextColor = isLightTheme ? 'rgba(34, 34, 34, 0.6)' : 'white';

  // store data
  const { data, subCategoryData } = props;

  var [apiUrl, setAPiUrl] = useState(
    process.env.home.categoryList.CATEGORY_C.NAME
  );

  const [subcategory, setSubcategory] = useState(subCategoryData);
  const [catagory, setCatagory] = useState(data.edges);

  // console.log('categoryC', data);
  // let subcategory;

  function subCategoryMethod(value) {
    return catagory.edges[0].node.tags.edges[0].node.name;
  }

  const filterMethod = (value) => {
    var tempArr = [];

    data.edges.filter((item) => {
      item.node.categories.edges.filter((post) => {
        // console.log('checkDtaa', post.node.name);
        if (post.node.name == value) {
          tempArr.push(item);
        } else {
        }

        return post.node.name == value;
      });
    });
    //
    setCatagory(tempArr);
    //console.log('checkDtaa', catagory.length);
  };

  // color

  const switchColor = (index) => {
    switch (index) {
      case 0:
        '#fb7c00 ';

        break;
      case 1:
        '#fb7c00 ';

        break;
      case 2:
        '#fb7c00 ';

        break;
      case 3:
        '#fb7c00 ';

        break;
      case 4:
        '#fb7c00 ';

        break;
      case 4:
        '#fb7c00 ';

        break;

      default:
        break;
    }
  };

  return (
    <Box
      px={{ base: '4', lg: '24', xl: '40', '2xl': '80' }}
      mb="65px"
      py={{ base: '50px', md: '20' }}
    >
      <Flex
        justifyContent={'space-between'}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Flex alignItems={'baseline'}>
          <Icon
            as={FaCircle}
            boxSize={5}
            mr="12px"
            color={'#ab20ef'}
            mb="10px"
          />
          <Box>
            <Heading as="h2" fontSize={'24px'} mb={'8px'}>
              {process.env.home.categoryList.CATEGORY_C.NAME}
            </Heading>
            <Text color={subTitleTextColor}>
              {process.env.home.categoryList.CATEGORY_C.DESC}
            </Text>
          </Box>
        </Flex>
        <Box
          display={'flex'}
          alignItems="center"
          justifyContent={{ base: 'flex-end' }}
          mt={{ base: '4', md: '0' }}
        >
          <Flex mr={'2'} display={{ base: 'none', md: 'flex' }}>
            <Button
              variant={'outline'}
              colorScheme="blue"
              rounded={'none'}
              size="sm"
              onClick={() => {
                setCatagory(data.edges);
              }}
            >
              ALL
            </Button>

            {subcategory &&
              subcategory.categories.edges.slice(0, 3).map((item, index) => {
                // console.log('cheksub', item);
                return (
                  <Button
                    key={index}
                    variant={'outline'}
                    colorScheme="blue"
                    rounded={'none'}
                    size="sm"
                    onClick={() => {
                      filterMethod(item.node.name);
                    }}
                  >
                    {item.node.name}
                  </Button>
                );
              })}
          </Flex>

          <Select
            placeholder="Select option"
            mr={'2'}
            display={{ base: 'block', md: 'none' }}
            size="sm"
            // onClick={() => {
            //   console.log("trisha", value);
            // }}
            onChange={(event) => {
              //console.log('trisha', event.target.value);
              filterMethod(event.target.value);
            }}
          >
            {subcategory &&
              subcategory.categories.edges.slice(0, 3).map((item, index) => {
                // console.log('cheksub', item);
                return (
                  <option
                    key={index}
                    value={item.node.name}
                    // onClick={() => {
                    //   console.log("trisha", value);
                    //   filterMethod(value);
                    //   // filterMethod();
                    // }}
                  >
                    {item.node.name}
                  </option>
                );
              })}
          </Select>

          <Link href={process.env.home.categoryList.CATEGORY_C.SLUG}>
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

      {catagory && catagory && catagory.length < 1 ? (
        <Box m="auto" my={100}>
          <Heading textStyles="h2" textAlign="center">
            No Data Found
          </Heading>
        </Box>
      ) : (
        <Grid
          templateColumns={{ md: '4fr 4fr 4fr', sm: 'repeat(1, 1fr)' }}
          textColor="white"
          gap={6}
          my={6}
        >
          {catagory &&
            catagory.slice(0, 1).map((item, index) => {
              const tagName = item?.node?.tags?.edges[0]?.node?.name;

              // .edges[0].node?.name
              return (
                <Link href={item.node.slug} key={index}>
                  <Box cursor="pointer" style={{ position: 'relative' }}>
                    <Flex
                      w={'full'}
                      h={
                        catagory.length == 1
                          ? { base: '250px', md: '450px' }
                          : { base: '250px', md: '100%' }
                      }
                      backgroundImage={item.node.featuredImage.node.sourceUrl}
                      backgroundSize={'cover'}
                      backgroundPosition={'center center'}
                    >
                      <VStack
                        w={'full'}
                        justify={'center'}
                        bgGradient={
                          'linear-gradient(to bottom, rgb(255 255 255 / 0%), #0f0e0e);'
                        }
                      >
                        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
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
                                bg={
                                  index == 0
                                    ? '#fb7c00'
                                    : index == 1
                                    ? '#dd03eb'
                                    : '#fb7c00'
                                }
                                // bg={switchColor}
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
                              fontSize="24px"
                              noOfLines={2}
                              lineHeight="1.5"
                              mb={{ base: '12px', md: '12px' }}
                            >
                              {item.node.title}
                            </Heading>
                            <Flex mt="2" alignItems={'center'}>
                              <Icon
                                as={FaRegClock}
                                color={'white'}
                                fontSize="sm"
                              />
                              <Text color={'white'} ml={2} fontSize="sm">
                                {format(new Date(item.node.date), 'yyyy-MM-dd')}
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

          <Box>
            {catagory && catagory.length > 1 ? (
              catagory.slice(1, 4).map((item, index) => {
                const tagName = item?.node?.tags?.edges[0]?.node?.name;
                return (
                  item &&
                  item.node && (
                    <Link href={item.node.slug} key={index}>
                      <Flex py="4" cursor="pointer">
                        <Box w={'70%'}>
                          {tagName && (
                            <Button
                              // bg={'#03a9e7'}
                              bg={
                                index == 0
                                  ? '#fb7c00'
                                  : index == 1
                                  ? '#dd03eb'
                                  : '#fb7c00'
                              }
                              color="white"
                              mb={2}
                              fontSize="14px"
                              lineHeight={'1.5'}
                              rounded={'none'}
                              size="xs"
                              fontWeight={'bold'}
                            >
                              {tagName}
                            </Button>
                          )}
                          <Text
                            fontWeight={'700'}
                            noOfLines={2}
                            fontSize="16px"
                            lineHeight={'1.5'}
                            paddingRight="2"
                            color={primaryTextColor}
                          >
                            {item.node.title}
                          </Text>
                          <Flex mt="2" alignItems={'center'}>
                            <Icon
                              as={FaRegClock}
                              color={'rgba(34, 34, 34, 0.6)'}
                              fontSize={'sm'}
                            />
                            <Text
                              ml={2}
                              color={'rgba(34, 34, 34, 0.6)'}
                              fontSize={'sm'}
                            >
                              {format(new Date(item.node.date), 'yyyy-MM-dd')}
                            </Text>
                          </Flex>
                        </Box>
                        {item.node.featuredImage && (
                          <Box w={'30%'}>
                            <Img
                              h={{ base: '100px', md: '100%' }}
                              objectFit={'cover'}
                              src={item.node.featuredImage.node.sourceUrl}
                              alt={item.node.title}
                            />
                          </Box>
                        )}
                      </Flex>
                    </Link>
                  )
                );
              })
            ) : (
              <div></div>
            )}
          </Box>

          <Box>
            {catagory &&
              catagory.slice(4, 7).map((item, index) => {
                const tagName = item?.node?.tags?.edges[0]?.node?.name;
                return (
                  <Link href={item.node.slug} key={index}>
                    <Flex py="4" key={index}>
                      <Box w={'70%'}>
                        {tagName && (
                          <Button
                            bg={
                              index == 0 || index == 1 ? '#fb7c00' : '#ecbd02'
                            }
                            color="white"
                            mb={2}
                            fontSize="14px"
                            lineHeight={'1.5'}
                            rounded={'none'}
                            size="xs"
                            fontWeight={'bold'}
                          >
                            {tagName}
                          </Button>
                        )}
                        <Text
                          fontWeight={'700'}
                          fontSize="16px"
                          lineHeight={'1.5'}
                          noOfLines={2}
                          paddingRight="2"
                          color={isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white'}
                        >
                          {item.node.title}
                        </Text>
                        <Flex mt="2" alignItems={'center'}>
                          <Icon
                            as={FaRegClock}
                            fontSize={'sm'}
                            color={'rgba(34, 34, 34, 0.6)'}
                          />
                          <Text
                            ml={2}
                            fontSize={'sm'}
                            color={'rgba(34, 34, 34, 0.6)'}
                          >
                            {format(new Date(item.node.date), 'yyyy-MM-dd')}
                          </Text>{' '}
                        </Flex>
                      </Box>
                      <Box w={'30%'}>
                        <Img
                          h={{ base: '100px', md: '100%' }}
                          objectFit={'cover'}
                          src={item.node.featuredImage.node.sourceUrl}
                          alt={item.node.title}
                        />
                      </Box>
                    </Flex>
                  </Link>
                );
              })}
          </Box>
        </Grid>
      )}

      <Box h={150} bg={'#ededed'} my={6}></Box>
    </Box>
  );
};

export default CategoryC;
