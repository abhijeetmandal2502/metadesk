import React, { useState } from 'react';
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
import { getHeaderMenuByName, getAllPostsForHome } from '../lib/api';
import { FaBell, FaRegMoon, FaUser, FaMoon, FaSearch } from 'react-icons/fa';
import { compareAsc, format } from 'date-fns';

const Search = (props) => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const primaryBgColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const secondaryBgColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';

  const { allPosts } = props;

  var [totalPost, setTotalPost] = useState(allPosts.edges);

  //console.log('serchpost', totalPost);
  // setTotalPost(allPosts);

  const searchString = (searchValue) => {
    if (searchValue != null) {
    }
    const filterData = totalPost.filter((post) => {
      return post.node.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setTotalPost(filterData);
    if (searchValue === '') {
      reset();
    }
  };

  const reset = () => {
    setTotalPost(allPosts.edges);
  };

  return (
    <>
      <Box px={{ base: '4', lg: '24', xl: '58' }}>
        <Box textAlign={'center'} py={10}>
          <FormControl>
            <Flex
              my={'4'}
              display={{ base: 'block', md: 'flex' }}
              // alignContent="center"
              alignItems={'center'}
              alignSelf="center"
            >
              <Input
                w={{ base: '80%', md: '50%' }}
                h="16"
                placeholder="Search Post"
                mr={'4'}
                rounded={'lg'}
                // bg="gray.300"
                onChange={(e) => searchString(e.target.value)}
              />
              <Icon as={FaSearch} boxSize={6} m={'0'} />
              {/* <Button
                variant={'outline'}
                bg="orange"
                color="blue"
                _hover={{ color: 'black', bg: 'white' }}
                rounded={'none'}
              >
                Submit
              </Button> */}
            </Flex>
          </FormControl>
        </Box>

        {totalPost.slice(0, 10).map((item, index) => {
          const author = item?.node?.author.node;
          const imagePath = item.node.featuredImage?.node.sourceUrl;
          return (
            item &&
            item.node && (
              <Link key={index} href={item.node.slug}>
                <Box cursor="pointer">
                  <Grid
                    templateColumns={{
                      md: '3fr 9fr',
                      sm: 'repeat(2, 1fr)',
                    }}
                    // textColor="white"
                    gap={6}
                  >
                    <Box>
                      <Img
                        h={'100%'}
                        objectFit={'cover'}
                        src={imagePath}
                        alt={item.node.title}
                      />
                    </Box>

                    <Box>
                      {/* <Button bg={'#03a9e7'} color='white' mb={2} rounded={'none'} size='xs' fontWeight={'bold'} > BITCOIN</Button> */}
                      <Heading as="h4" size={'md'}>
                        {item.node.title}
                      </Heading>

                      <Flex mt="2" alignItems={'center'}>
                        <Text>
                          By <b>{`${author.name} `}</b>
                        </Text>
                        <Text ml={4}>
                          {format(new Date(item.node.date), 'yyyy-MM-dd')}
                        </Text>
                      </Flex>
                    </Box>
                  </Grid>

                  <Box my={6}>
                    <Divider />
                  </Box>
                </Box>
              </Link>
            )
          );
        })}
      </Box>
    </>
  );
};
export async function getStaticProps({ preview = false }) {
  const menuData = await getHeaderMenuByName(process.env.headerMenuName);
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: {
      allPosts: allPosts,
      menu: menuData.menu,
    },
    revalidate: 15, //10 minutes
  };
}

export default Search;
