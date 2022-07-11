import React from 'react';
import {
  Box,
  Grid,
  Stack,
  Heading,
  Text,
  Divider,
  UnorderedList,
  ListItem,
  Tag,
  Button,
  HStack,
  Flex,
  Avatar,
  Img,
  VStack,
  Icon,
  useColorMode,
} from '@chakra-ui/react';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaRegClock,
} from 'react-icons/fa';
import PostSeo from '../seo/PageSeo';
import PostData from './PostData';
import SocialShare from './SocialShare';
import { FaPlay } from 'react-icons/fa';
import { DragHandleIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { compareAsc, format } from 'date-fns';

const Trending = ({ props }) => {
  const listdata = [1, 2, 3, 4, 5, 6];
  const Trendinglist = [1, 2, 3, 4];

  // console.log('checktrending', props.trending);
  // store data
  const { trending } = props;

  return (
    <Box py={8}>
      <Heading as="h2" fontSize={'22px'}>
        {process.env.post.TRENDING.NAME}
      </Heading>
      <Grid
        templateColumns={{ md: '6fr 6fr', sm: 'repeat(1, 1fr)' }}
        // textColor="white"
        gap={6}
        my={6}
      >
        {trending.edges &&
          trending.edges.map((item, index) => {
            const author = item.node.author;
            const imagePath = item.node.featuredImage?.node.sourceUrl;
            // console.log('checktrending', item.node.slug);

            if (!imagePath) {
              return 'not found';
            }

            return (
              item &&
              item.node && (
                <Link href={item.node.slug} key={index}>
                  <Grid
                    cursor="pointer"
                    templateColumns={{ md: '9fr 3fr', sm: 'repeat(1, 1fr)' }}
                    // textColor="white"
                    gap={2}
                  >
                    <Box>
                      <Flex alignItems={'flex-start'}>
                        <Text
                          fontSize={'3xl'}
                          fontWeight="bold"
                          color={'green'}
                          mx={2}
                        >
                          {index + 1}
                        </Text>

                        <Box>
                          <Text color={'green'} fontWeight={'medium'}>
                            Markets
                          </Text>

                          <Heading as="h4" size={'md'} lineHeight={'normal'}>
                            {item.node.title}
                          </Heading>

                          <Flex mt="2" alignItems={'center'}>
                            <Text>By {author.node.name} </Text>
                            <Text ml={4}>
                              {format(new Date(item.node.date), 'yyyy-MM-dd')}
                            </Text>
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                    <Box>
                      <Img
                        h={'100%'}
                        objectFit={'cover'}
                        src={imagePath}
                        alt={item.node.title}
                      />
                    </Box>
                  </Grid>
                </Link>
              )
            );
          })}
      </Grid>
    </Box>
  );
};

export default Trending;
