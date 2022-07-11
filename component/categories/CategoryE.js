import React from 'react';
import {
  Box,
  Button,
  Circle,
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

const CategoryE = (props) => {
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

  // console.log('categoryE', data);

  // tempvar

  const tempArrFirst = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const tempArrSecond = [1, 2, 3, 4, 5];
  const tempArrThird = [1, 2, 3, 4, 5];

  return (
    <>
      <Box
        px={{ base: '4', lg: '24', xl: '40', '2xl': '80' }}
        mb="65px"
        py={{ base: '50px', md: '20' }}
      >
        <Grid
          templateColumns={{ md: '9fr 3fr', sm: 'repeat(1, 1fr)' }}
          textColor="white"
          gap={6}
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
                    {process.env.home.categoryList.CATEGORY_E.NAME}
                  </Heading>
                  <Text color={subTitleTextColor}>
                    {process.env.home.categoryList.CATEGORY_E.DESC}
                  </Text>
                </Box>
              </Flex>
            </Flex>
            <Grid
              templateColumns={{ md: '4fr 4fr 4fr', sm: 'repeat(1, 1fr)' }}
              textColor="white"
              gap={6}
              mt={6}
            >
              {data.edges &&
                data.edges.slice(0, 9).map((item, index) => {
                  const tagName = item?.node?.tags?.edges[0]?.node?.name;
                  return (
                    item &&
                    item.node && (
                      <Link href={item.node.slug} key={index}>
                        <Box cursor="pointer">
                          <Box style={{ position: 'relative' }}>
                            <Box
                              style={{
                                position: 'absolute',
                                left: 0,
                                bottom: '0',
                                color: 'white',
                              }}
                            >
                              {tagName && (
                                <Button
                                  bg={'#91b7e7'}
                                  color="white"
                                  rounded={'none'}
                                  size="sm"
                                  fontSize={'16px'}
                                  lineHeight="1.5"
                                  fontWeight={'bold'}
                                >
                                  {tagName}
                                </Button>
                              )}
                            </Box>
                            {item.node.featuredImage && (
                              <Img
                                src={item.node.featuredImage.node.sourceUrl}
                                alt={item.node.title}
                                objectFit={'cover'}
                                w={'100%'}
                                h={'162px'}
                              />
                            )}
                          </Box>
                          <Text
                            fontWeight={'600'}
                            mt={'4'}
                            fontSize="16px"
                            lineHeight="1.5"
                            color={primaryTextColor}
                          >
                            {item.node.title}
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
                              {format(new Date(item.node.date), 'yyyy-MM-dd')}
                            </Text>
                          </Flex>
                        </Box>
                      </Link>
                    )
                  );
                })}
            </Grid>
          </Box>

          <Box>
            <Grid
              templateColumns={{ md: '12fr', sm: 'repeat(1, 1fr)' }}
              textColor="white"
              gap={1}
            >
              {tempArrSecond.map((item, index) => {
                return (
                  <Link href={'item.node.slug'} key={index}>
                    <Flex
                      cursor="pointer"
                      bg={'#03a9e7'}
                      p={'4'}
                      alignItems={'center'}
                    >
                      <Stack direction="row">
                        <Icon
                          as={FaFacebook}
                          boxSize={10}
                          color={'white'}
                          mr={4}
                        />
                        <Divider
                          orientation="vertical"
                          borderColor={'1px solid gray'}
                        />
                      </Stack>
                      <Flex justifyContent={'space-around'} w={'100%'}>
                        <Text color={'white'}>0</Text>
                        <Text color={'white'}>Followers</Text>
                        <Icon
                          color={'white'}
                          as={ChevronRightIcon}
                          boxSize={6}
                        />
                      </Flex>
                    </Flex>
                  </Link>
                );
              })}
            </Grid>

            <Box my={4}>
              <Heading as={'h4'} size={'lg'} color={primaryTextColor}>
                Most Viewed
              </Heading>
              {data.edges &&
                data.edges.slice(9, 14).map((item, index) => {
                  return (
                    <Link key={index} href={item.node.slug}>
                      <Box cursor={'pointer'}>
                        <Flex my={4}>
                          {/* <Box
                            h={'30px'}
                            w={'40px'}
                            borderRadius="full"
                            bg={'#03a9e7'}
                            mr={'4'}
                            p="auto"
                          > */}
                          <Circle
                            size="34px"
                            bg="tomato"
                            color="white"
                            mr={4}
                            cursor="default"
                          >
                            <Text

                            // mx="auto"
                            // my="auto"
                            >
                              {index + 1}
                            </Text>
                          </Circle>

                          {/* </Box> */}

                          <Text
                            lineHeight={'1.5'}
                            fontSize="sm"
                            color={primaryTextColor}
                          >
                            {item.node.title}
                          </Text>
                        </Flex>
                        <Divider />
                      </Box>
                    </Link>
                  );
                })}
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default CategoryE;
