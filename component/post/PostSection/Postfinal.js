import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  Img,
  // Link,
  ListItem,
  OrderedList,
  Stack,
  Text,
  VStack,
  useColorMode,
  FormControl,
  Input,
  Textarea,
  Checkbox,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {
  FaFacebookSquare,
  FaEye,
  FaLinkedin,
  FaCircle,
  FaYoutube,
  FaTwitterSquare,
  FaFacebookF,
  FaInstagram,
  FaComment,
  FaPinterestSquare,
  FaRegClock,
  FaEnvelope,
  FaTwitter,
  FaStar,
} from 'react-icons/fa';
import PostSeo from '../../seo/PostSeo';
import ClassesPostBody from '../../../styles/post-body.module.css';
import Trending from '../Trending';
import { compareAsc, format } from 'date-fns';
import Link from 'next/link';
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  LinkedinShareButton,
  TumblrShareButton,
  WhatsappShareButton,
} from 'react-share';

import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';
import { RWebShare } from 'react-web-share';
import { FaShareAlt, FaTelegramPlane, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { useScrollPercentage } from 'react-scroll-percentage';
import { ScrollPercentage } from 'react-scroll-percentage';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { parseComment } from '../../../lib/api';
import { useToast } from '@chakra-ui/react';
import { useScrollDirection } from 'react-use-scroll-direction';
import { Fade, ScaleFade, Slide, SlideFade } from '@chakra-ui/react';

const Postfinal = ({ props }) => {
  // start here
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? '#222222' : 'white';
  const secondaryTextColor = !isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.5)';
  const primaryBgColor = isLightTheme ? 'white' : '#222222';
  const secondaryBgColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';

  // store data
  const data = props.data.post;
  // const tags = data?.tags?.edges;
  const post = props.postList.edges;

  const author = props.data.post.author.node;
  const date = new Date(data.date);
  const imagePath = data.featuredImage?.node.sourceUrl;
  const videoUrl = `https://www.youtube.com/watch?v=${data.youtube.videoId}`;
  const videoLink = `https://www.youtube.com/embed/${data.youtube.videoId}`;
  const postTitle = props.data?.post?.title;
  const toast = useToast();

  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    // threshold: 0,
  });

  const [prevNextPost, setPrevNextPost] = useState({
    previousPost: '',
    nextPost: '',
  });
  // const [enableNextPopup, setEnableNextPopup] = useState(false);

  // useEffect(() => {

  //   // return () => {

  //   // };
  // }, []);
  const [direction, setDirection] = React.useState(String);
  const { isScrollingUp, isScrollingDown } = useScrollDirection();

  var [position, setPosition] = useState();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setPosition(window.pageYOffset);
    isScrollingDown && setDirection('down');
    isScrollingUp && setDirection('up');
  }, [isScrollingDown, isScrollingUp]);

  console.log('checkdirection', position);

  const tagName = data?.tags?.edges[0]?.node?.name;
  var prevPostObj = [];
  var nextPageObj = [];
  console.log('postcheck', props.data.posts.edges[0].node);
  props.data.posts.edges.map((item, index) => {
    // console.log('postcheck', item.node.title);
    if (item.node.title == postTitle) {
      // console.log('postcheck', prevNextPost);
      prevPostObj = {
        id: index - 1,
        title: props.data.posts.edges[index - 1]?.node?.title,
        slug: props.data.posts.edges[index - 1]?.node?.uri,
        image:
          props.data.posts.edges[index - 1]?.node?.featuredImage?.node
            ?.sourceUrl,
        date: props.data.posts.edges[index - 1]?.node?.date,
      };
      nextPageObj = {
        id: index + 1,
        title: props.data.posts.edges[index + 1]?.node?.title,
        slug: props.data.posts.edges[index + 1]?.node?.uri,
        image:
          props.data.posts.edges[index + 1]?.node?.featuredImage?.node
            ?.sourceUrl,
        date: props.data.posts.edges[index + 1]?.node?.date,
      };
      // setPrevNextPost({
      //   previousPost: {
      //     id: props.data.posts.edges[index - 1],
      //     title: props.data.posts.edges[index - 1].node.title,
      //   },
      //   nextPost: {
      //     id: props.data.posts.edges[index + 1],
      //     title: props.data.posts.edges[index + 1].node.title,
      //   },
      // });
    }
  });

  // share

  const post_link = props.data.post.seo.canonical;
  const post_title = data.title;

  useEffect(() => {
    setPrevNextPost({
      previousPost: prevPostObj,
      nextPost: nextPageObj,
    });
  }, []);
  // console.log('checkprevnext', prevNextPost);

  // start

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [comment, setComment] = useState();

  //

  if (!imagePath) {
    return 'not found';
  }

  // end here
  const ALSOLIKE = [1, 2, 3];
  return (
    <>
      <PostSeo data={data} />
      <Box>
        <Img
          src={imagePath}
          h={{ base: '280px', md: '480px' }}
          w={'100%'}
          objectFit={'cover'}
          objectPosition="center"
        />
        <ScrollPercentage
          position="fixed"
          alignSelf={'end'}
          as="div"
          onChange={(percentage, entry) =>
            console.log('Percentage:', percentage)
          }
        >
          {/* px={{ base: '4', lg: '24', xl: '40', '2xl': '80' }} */}
          {({ percentage, ref, entry }) => (
            <Stack ref={ref} >


              <Box
                mx={{ md: '60px', lg: '165px', 'xl': '235px' }}
                position={'relative'}
                bottom={{ base: '40px', md: '100px' }}
                borderRadius="8px"
                bg={primaryBgColor}
              >
                <Box display={{ base: 'none', md: 'contents' }}>
                  <Box
                    zIndex={'9999'}
                    position="fixed"
                    alignSelf={'end'}
                    right="50px"
                    top="0px"
                  >
                    <div>
                      <CircularProgress
                        mr={10}
                        mt={20}
                        value={percentage * 100}
                        color="#3545ee"
                        size="60px"
                        thickness="2px"
                        zIndex={'9999'}
                      >
                        <CircularProgressLabel>
                          {Math.round(percentage * 100) == 9
                            ? '0'
                            : Math.round(percentage * 100)}
                          %
                        </CircularProgressLabel>
                      </CircularProgress>
                    </div>
                  </Box>
                </Box>

                <Grid
                  rounded={4}
                  pr={{ base: '15px', lg: '15px' }}
                  pl={{ base: '15px', lg: '15px', '2xl': '15px' }}
                  pt={{ base: '15px', lg: '40px' }}
                  templateColumns={{ md: '1fr 11fr ', sm: 'repeat(1, 1fr)' }}
                  textColor="white"
                  gap={10}
                  position={'relative'}

                >
                  <Box display={{ base: 'none', md: 'block' }}>
                    <VStack position={'sticky'} top="70px" >
                      <Text
                        color={primaryTextColor}
                        fontSize={'13px'}
                        mb={'15px'}
                      >
                        SHARE
                      </Text>
                      <Center height="50px" mt={'0px !important'}>
                        <Divider
                          orientation="vertical"
                          border="1px solid #888 !important"
                        />
                      </Center>

                      {/* Square Icon */}

                      {/* <Box h="1px"></Box>
                      <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                        <Icon as={FaFacebookF} boxSize={4} />
                      </Box>
                      <Box h="1px"></Box>
                      <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                        <Icon as={FaTwitter} boxSize={4} />
                      </Box>
                      <Box h="1px"></Box>
                      <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                        <Icon as={FaTelegramPlane} boxSize={4} />
                      </Box>
                      <Box h="1px"></Box>
                      <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                        <Icon as={FaWhatsapp} boxSize={4} />
                      </Box>
                      <Box h="1px"></Box>
                      <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                        <Icon as={FaLinkedinIn} boxSize={4} />
                      </Box> */}


                      {/* Square Icon */}


                      <Box h="1px"></Box>
                      <FacebookShareButton url={post_link}>
                        {/* <FacebookIcon size={'42px'} color={primaryTextColor} /> */}
                        <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                          <Icon as={FaFacebookF} boxSize={4} />
                        </Box>
                      </FacebookShareButton>
                      <Box h="1px"></Box>
                      <TwitterShareButton url={post_link}>
                        {/* <TwitterIcon size={'42px'} color={primaryTextColor} /> */}
                        <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                          <Icon as={FaTwitter} boxSize={4} />
                        </Box>
                      </TwitterShareButton>
                      <Box h="1px"></Box>
                      <TelegramShareButton url={post_link}>
                        {/* <TelegramIcon size={'42px'} color={primaryTextColor} /> */}
                        <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                          <Icon as={FaTelegramPlane} boxSize={4} />
                        </Box>
                      </TelegramShareButton>
                      <Box h="1px"></Box>
                      <WhatsappShareButton url={post_link}>
                        {/* <WhatsappIcon size={'42px'} color={primaryTextColor} /> */}
                        <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                          <Icon as={FaWhatsapp} boxSize={4} />
                        </Box>
                      </WhatsappShareButton>{' '}
                      <Box h="1px"></Box>
                      <LinkedinShareButton edinShareButton url={post_link}>
                        {/* <LinkedinIcon size={'42px'} color={primaryTextColor} /> */}
                        <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                          <Icon as={FaLinkedinIn} boxSize={4} />
                        </Box>
                      </LinkedinShareButton>
                      <Box h="1px"></Box>

                    </VStack>

                    <Flex
                      display={{ base: 'block', md: 'none' }}
                      className="mobileShareContainer"
                    >
                      <RWebShare
                        data={{
                          text: post_title,
                          url: post_link,
                          title: 'Share this news to',
                        }}
                        onClick={() => console.log('shared successfully!')}
                      >
                        <FaShareAlt size={30} />
                      </RWebShare>
                    </Flex>
                  </Box>

                  <Box>
                    <Box mb={'30px'}>
                      <Box
                        bg="#0ab3af !important"
                        px="10px"
                        py="4px"
                        width="max-content"
                        textDecoration="none"
                        rounded={'5px'}
                        fontSize={'13px'}
                        // color={primaryTextColor}
                        color="white"
                        size={'xs'}
                        alignContent="center"
                        textAlign={'center'}

                      // px="auto"
                      >
                        {tagName}
                      </Box>

                      <Heading
                        color={primaryTextColor}
                        as="h2"
                        my={'15px !important'}
                        fontSize={{ base: '24px', md: '28px' }}
                        lineHeight="1.4"
                      >
                        {data.title}
                      </Heading>

                      <Flex
                        alignItems={{ base: 'left', md: 'center' }}
                        flexDirection={{ base: 'column', md: 'row' }}
                      >
                        <Flex
                          alignItems={'center'}
                          mr={'12px'}
                          mb={{ base: '10px', md: '0px' }}
                        >
                          <Avatar
                            src={author.avatar}
                            h={'30px'}
                            w={'30px'}
                            mr="6px"
                          />
                          <Text
                            pl={'5px'}
                            fontSize={'12px'}
                            // color={primaryTextColor}
                            color={'#777'}
                          >
                            {`${author.firstName == null ? '' : author.firstName
                              } ${author.lastName == null ? '' : author.lastName
                              }`}
                          </Text>
                        </Flex>
                        <Flex
                          alignItems={'center'}
                          mr={'12px'}
                          mb={{ base: '10px', md: '0px' }}
                        >
                          <Icon
                            as={FaRegClock}
                            boxSize={3}
                            // color={'rgba(0, 0, 0, 0.5)'}
                            // color={secondaryTextColor}
                            color={'#777'}
                          />
                          <Text
                            pl={'5px'}
                            fontSize={'12px'}
                            // color={'rgba(0, 0, 0, 0.5)'}
                            // color={secondaryTextColor}
                            color={'#777'}
                          >
                            {date.toDateString()}
                          </Text>
                        </Flex>
                        <Flex alignItems={'center'} mr={'12px'}>
                          <Text fontSize={'12px'}>
                            <Icon
                              mr={'5px'}
                              as={FaEye}
                              boxSize={3}
                              // color={'rgba(0, 0, 0, 0.5)'}
                              // color={secondaryTextColor}
                              color={'#777'}
                            />
                          </Text>
                          <Text
                            pl={'5px'}
                            fontSize={'12px'}
                            // color={'rgba(0, 0, 0, 0.5)'}
                            // color={secondaryTextColor}
                            color={'#777'}
                          >
                            0 views
                          </Text>
                        </Flex>
                      </Flex>
                    </Box>
                    <Text
                      mb={'30px'}
                      className={'postfinaldata'}
                      // className={'lightThemeWpContent'}
                      // color={'red'}
                      // textColor="white"
                      // colorScheme={'purple'}
                      // as={'p'}
                      style={{
                        color: isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white',
                      }}
                    >
                      <div
                        className={
                          (`${ClassesPostBody.content} contentBody`,
                            'lightThemeWpContent')
                        }
                        dangerouslySetInnerHTML={{ __html: data.content }}
                      />
                    </Text>
                    {/* share icon for mobile */}

                    <Box display={{ base: 'block', md: 'none !important' }}>
                      <Flex flexDirection="column">
                        <Heading
                          // color={'black'}
                          color={primaryTextColor}
                          as="h4"
                          mb={'25px !important'}
                          fontSize={'18px'}
                          lineHeight="1.2"
                        >
                          Share
                        </Heading>

                        <Flex justifyContent={'center'} >

                          {/* 
                          <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                            <Icon as={FaFacebookF} boxSize={4} />
                          </Box>
                          <Box w="15px"></Box>
                          <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                            <Icon as={FaTwitter} boxSize={4} />
                          </Box>
                          <Box w="15px"></Box>
                          <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                            <Icon as={FaTelegramPlane} boxSize={4} />
                          </Box>
                          <Box w="15px"></Box>
                          <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                            <Icon as={FaWhatsapp} boxSize={4} />
                          </Box>
                          <Box w="15px"></Box>
                          <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                            <Icon as={FaLinkedinIn} boxSize={4} />
                          </Box> */}



                          <FacebookShareButton url={post_link}>
                            {/* <FacebookIcon
                              size={'42px'}
                              color={primaryTextColor}
                            /> */}

                            <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                              <Icon as={FaFacebookF} boxSize={4} />
                            </Box>
                          </FacebookShareButton>
                          <Box w="15px"></Box>

                          <TwitterShareButton url={post_link}>
                            {/* <TwitterIcon
                              size={'42px'}
                              color={primaryTextColor}
                            /> */}
                            <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                              <Icon as={FaTwitter} boxSize={4} />
                            </Box>
                          </TwitterShareButton>
                          <Box w="15px"></Box>

                          <TelegramShareButton url={post_link}>
                            {/* <TelegramIcon
                              size={'42px'}
                              color={primaryTextColor}
                            /> */}
                            <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                              <Icon as={FaTelegramPlane} boxSize={4} />
                            </Box>
                          </TelegramShareButton>
                          <Box w="15px"></Box>

                          <WhatsappShareButton url={post_link}>
                            {/* <WhatsappIcon
                              size={'42px'}
                              color={primaryTextColor}
                            /> */}
                            <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                              <Icon as={FaWhatsapp} boxSize={4} />
                            </Box>
                          </WhatsappShareButton>
                          <Box w="15px"></Box>

                          <LinkedinShareButton edinShareButton url={post_link}>
                            {/* <LinkedinIcon
                              size={'42px'}
                              color={primaryTextColor}
                            /> */}
                            <Box borderRadius={'5px'} px={"3"} pt={'3'} pb={'1'} color="gray" _hover={{ bg: "blue", color: "white" }} border={"1px solid lightgray"}>
                              <Icon as={FaLinkedinIn} boxSize={4} />
                            </Box>
                          </LinkedinShareButton>

                        </Flex>
                      </Flex>
                    </Box>

                    <Box px={{ base: '15px', md: '90px' }} py={'35px'}>
                      <Flex
                        alignItems={'center'}
                        flexDirection={{ base: 'column', md: 'row' }}
                      >
                        <Avatar
                          h={'70px'}
                          w={'70px'}
                          // src="https://secure.gravatar.com/avatar/662a272c8be177be19f47db7acac0cb9?s=180&d=mm&r=g"
                          src={author.avatar}
                          mr={{ base: '0px', md: '30px' }}
                          mb={{ base: '10px', md: '0px' }}
                        />
                        <Box textAlign={{ base: 'center', md: 'left' }}>
                          <Text
                            fontSize={'15px'}
                            fontWeight={'600'}
                            color={primaryTextColor}
                          >
                            {`${author.firstName == null ? '' : author.firstName
                              } ${author.lastName == null ? '' : author.lastName
                              }`}
                          </Text>
                          <Text
                            my={'8px'}
                            fontSize={'15px'}
                            color={primaryTextColor}
                          >
                            A 26-year-old health centre receptionist who enjoys
                            going to the movies, photography and social media.
                          </Text>

                          <Flex justifyContent={{ base: 'center', md: 'left' }}>
                            <Icon
                              color={'rgba(0, 0, 0, 0.7)'}
                              as={FaFacebookF}
                              boxSize={4}
                              mr={2}
                            />
                            <Icon
                              color={'rgba(0, 0, 0, 0.7)'}
                              as={FaTwitter}
                              boxSize={4}
                              mr={2}
                            />
                            <Icon
                              color={'rgba(0, 0, 0, 0.7)'}
                              as={FaInstagram}
                              boxSize={4}
                              mr={2}
                            />
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>

                    <Flex
                      justifyContent={'space-between'}
                    // flexDirection={{ base: 'column', md: 'row' }}
                    >
                      <Flex flexDirection={{ base: 'column', md: 'row' }}>
                        <Flex>
                          {data?.tags?.edges.map((item, index) => {
                            return (
                              <Text
                                m={'4px 6px'}
                                fontSize="13px"
                                // color={'rgba(34,34,34,0.5)'}
                                color={secondaryTextColor}
                              >
                                #{item.node.name}
                              </Text>
                            );
                          })}
                        </Flex>
                        {/* <Flex>
                          <Text
                            m={'4px 6px'}
                            fontSize="13px"
                            // color={'rgba(34,34,34,0.5)'}
                            color={secondaryTextColor}
                          >
                            #Fashion
                          </Text>
                          <Text
                            m={'4px 6px'}
                            fontSize="13px"
                            // color={'rgba(34,34,34,0.5)'}
                            color={secondaryTextColor}
                          >
                            #Style
                          </Text>
                        </Flex>
                        <Text
                          m={'4px 6px'}
                          fontSize="13px"
                          // color={'rgba(34,34,34,0.5)'}
                          color={secondaryTextColor}
                        >
                          #Trend
                        </Text> */}
                      </Flex>

                      <Flex>
                        <Text color={'rgba(34,34,34,0.5)'} mr={'10px'}>
                          <Icon
                            as={FaComment}
                            color={'rgba(34,34,34,0.5)'}
                            mr={'5px'}
                          />{' '}
                          0
                        </Text>
                        <Text color={'rgba(34,34,34,0.5)'} mr={'10px'}>
                          <Icon
                            as={FaEye}
                            color={'rgba(34,34,34,0.5)'}
                            mr={'5px'}
                          />{' '}
                          0
                        </Text>
                      </Flex>
                    </Flex>

                    {prevNextPost.previousPost !== '' &&
                      prevNextPost.nextPost !== '' ? (
                      <Grid
                        templateColumns={{
                          md: '6fr 6fr',
                          sm: 'repeat(1, 1fr)',
                        }}
                        // textColor="white"
                        color={primaryTextColor}
                        mt={'10px'}
                      >
                        {prevNextPost.previousPost.slug !== undefined ? (
                          <Box
                            borderTop="1px solid gray"
                            borderBottom="1px solid gray"
                            // borderRight={{ base: "0px solid gray", md: "1px solid gray" }}
                            py={'30px'}
                            pr={{ base: '0px', md: '40px' }}
                            textAlign={{ base: 'left', md: 'end' }}
                          >
                            <Text
                              color={primaryTextColor}
                              opacity="0.5"
                              fontWeight="500"
                              mb={'7px'}
                              fontSize="13px"
                            >
                              PREVIOUS
                            </Text>
                            <Link href={prevNextPost.previousPost?.slug}>
                              <Text
                                cursor={'pointer'}
                                fontSize="18px"
                                lineHeight="1.5"
                                fontWeight="600"
                              >
                                {prevNextPost.previousPost?.title}
                              </Text>
                            </Link>
                          </Box>
                        ) : (
                          <div></div>
                        )}
                        {prevNextPost.nextPost.slug !== undefined ? (
                          <Box
                            borderTop={{
                              base: '0px solid gray',
                              md: '1px solid gray',
                            }}
                            borderBottom="1px solid gray"
                            borderLeft={{
                              base: '0px solid gray',
                              md: '1px solid gray',
                            }}
                            py={'30px'}
                            pl={{ base: '0px', md: '40px' }}
                            textAlign={{ base: 'end', md: 'left' }}
                          >
                            <Text
                              // color="#222222"
                              color={primaryTextColor}
                              opacity="0.5"
                              fontWeight="500"
                              mb={'7px'}
                              fontSize="13px"
                            >
                              NEXT
                            </Text>
                            <Link href={prevNextPost.nextPost?.slug}>
                              <Text
                                cursor={'pointer'}
                                fontSize="18px"
                                lineHeight="1.5"
                                fontWeight="600"
                              >
                                {prevNextPost.nextPost?.title}
                              </Text>
                            </Link>
                          </Box>
                        ) : (
                          <div></div>
                        )}
                      </Grid>
                    ) : (
                      <div>ok</div>
                    )}
                  </Box>
                </Grid>
              </Box>
            </Stack>

            // <div ref={ref}>
            //   <h2>{`Percentage scrolled: ${percentage.toPrecision(2)}%.`}</h2>
            // </div>
          )}
        </ScrollPercentage>
      </Box>
      <Box
        // mx={{ md: '0px', lg: '230px', '2xl': '465px' }}
        py={{ base: '40px', md: '80px' }}
        px={{ base: '15px', lg: '120px', '2xl': '370px' }}
        bg={isLightTheme ? '#fafafa' : 'blackAlpha.400'}
      >
        <Flex alignItems={'baseline'}>
          <Icon
            as={FaCircle}
            boxSize={5}
            mr="12px"
            color={'#ab20ef'}
            mb="10px"
          />

          <Heading as="h4" fontSize={'22px'} mb={'8px'}>
            YOU MAY ALSO LIKE
          </Heading>
        </Flex>

        {/* <Trending props={props} /> */}

        <Grid
          templateColumns={{ md: '4fr 4fr 4fr', sm: 'repeat(1, 1fr)' }}
          textColor={primaryBgColor}
          gap={8}
          my={6}
        >
          {props.trending.edges &&
            props.trending.edges.slice(0, 3).map((item, index) => {
              const author = item.node.author;
              const imagePath = item.node.featuredImage?.node.sourceUrl;
              const tags = item.node?.tags?.edges[0].node.name;
              // item.node?.tags?.edges[0];
              // console.log('checktrending', author);

              if (!imagePath) {
                return 'not found';
              }
              return (
                item &&
                item.node && (
                  <Link href={item.node.slug} key={index}>
                    <Box cursor="pointer" style={{ position: 'relative' }}>
                      <Flex
                        w={'full'}
                        h={{ base: '320px', lg: '420px' }}
                        backgroundImage={imagePath}
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
                              <Button
                                color="white"
                                // bg={index == 0 ? "#fb7c00" : index == 1 ? "#dd03eb" : "#fb7c00"}
                                // bg={switchColor}
                                bg={'#fc4a00 !important'}
                                rounded={'5px'}
                                size="xs"
                                fontWeight={'bold'}
                              >
                                {tags}
                                {/* {tagName} */}
                              </Button>
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
                                fontSize="20px"
                                noOfLines={2}
                                lineHeight="1.5"
                                mb={{ base: '12px', md: '12px' }}
                              >
                                {item.node.title}
                                {/* {item.node.title} */}
                              </Heading>

                              <Flex alignItems={'center'}>
                                <Flex alignItems={'center'} mr={'12px'}>
                                  <Avatar
                                    // src="https://bit.ly/dan-abramov"
                                    src={author.node?.avatar?.url}
                                    h={'30px'}
                                    w={'30px'}
                                    mr="6px"
                                  />
                                  <Text
                                    pl={'5px'}
                                    fontSize={'14px'}
                                    color="rgba(255, 255, 255, 0.85) !important"
                                  >
                                    {author.node.name}
                                  </Text>
                                </Flex>
                                <Flex alignItems={'center'}>
                                  <Icon
                                    as={FaRegClock}
                                    color={'rgba(255, 255, 255, 0.85)'}
                                    fontSize={'12px'}
                                  />
                                  <Text
                                    color={
                                      'rgba(255, 255, 255, 0.85) !important'
                                    }
                                    ml={2}
                                    fontSize={'12px'}
                                  >
                                    {format(
                                      new Date(item.node.date),
                                      'yyyy-MM-dd'
                                    )}
                                  </Text>
                                </Flex>
                              </Flex>
                            </Box>
                          </Stack>
                        </VStack>
                      </Flex>
                    </Box>
                  </Link>
                )
              );
            })}
        </Grid>
      </Box>
      <Box
        py={{ base: '40px', md: '60px' }}
        px={{ base: '15px', lg: '235px', '2xl': '470px' }}
      >
        <Heading as="h3" fontSize={'22px'} mb={'15px'} lineHeight="1.2">
          LEAVE A REPLY
        </Heading>
        <Text fontSize={'15px'} mb="30px">
          Your email address will not be published. Required fields are marked *
        </Text>
        <FormControl isRequired>
          <Flex flexDirection={{ base: 'column', md: 'row' }}>
            <Input
              type="text"
              placeholder="Name *"
              mr={{ base: '0px', md: '15px' }}
              mb={{ base: '35px', md: '0px' }}
              size="sm"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email *"
              ml={{ base: '0px', md: '15px' }}
              size="sm"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Flex>
          <Textarea
            placeholder="Your Comment "
            my="35px"
            size="sm"
            h="204px"
            onChange={(e) => setComment(e.target.value)}
          />
          <Checkbox
            alignItems={'flex-start'}
            opacity={'0.8'}
            fontSize="15px !important"
          >
            Save my name, email, and website in this browser for the next time I
            comment.
          </Checkbox>
          <Box mt="15px" textAlign={'end'}>
            <Button
              fontSize={'14px'}
              fontWeight="500"
              borderRadius={'20px'}
              bg="#3545EE"
              color={'white'}
              _hover={{ bg: '#3545EE', color: 'white' }}
              onClick={async () => {
                await parseComment(props.data.post.id, comment, name)
                  .then((val) => {
                    console.log('checkerrora', val);
                    toast({
                      title: 'Successfull !.',
                      description: val,
                      status: 'success',
                      duration: 4000,
                      isClosable: true,
                    });
                  })
                  .catch((err) => {
                    console.log('checkerror', err.message);
                    toast({
                      title: 'Attention!',
                      description: err.message,
                      status: 'error',
                      duration: 4000,
                      isClosable: true,
                    });
                  });
              }}
            >
              Post Comment
            </Button>
          </Box>
        </FormControl>
      </Box>

      {/* popup */}
      {isVisible ? (
        direction === 'down' ? (
          prevNextPost.nextPost.slug !== undefined ? (
            <Slide direction="bottom" style={{ zIndex: 10 }}>
              <Box
                position="fixed"
                bottom={'40px'}
                alignSelf={'start'}
                left={'40px'}
                p="25px"
                w="275px"
                boxShadow="-1px 2px 12px rgb(0 0 0 / 10%)"
                display={{ base: 'none', md: 'block' }}
                bg="white"
                shadow={'md'}
                rounded="md"
              >
                <Flex justifyContent={'end'}>
                  <Icon
                    as={CloseIcon}
                    boxSize={2}
                    color={'#777'}
                    fontSize="11px"
                    cursor={'pointer'}
                    onClick={() => {
                      setIsVisible(!isVisible);
                    }}
                  />
                </Flex>

                <Text
                  fontWeight="400"
                  fontSize="13px"
                  fontStyle="italic"
                  color="#999"
                  letterSpacing="0.5px"
                >
                  Next Article:
                </Text>

                <Link href={prevNextPost.nextPost.slug}>
                  <Heading
                    as="h3"
                    lineHeight={'1.5'}
                    fontWeight="600"
                    fontSize="16px"
                    margin="8px 0 10px 0"
                    cursor="pointer"
                    color={'black'}
                  >
                    {prevNextPost.nextPost?.title}
                  </Heading>
                </Link>

                <Flex>
                  <Text mr={'10px'} fontSize="11px" color={'#777'}>
                    <Icon as={FaRegClock} boxSize={2} color={'#777'} mr={1} />
                    {format(
                      new Date(prevNextPost.nextPost?.date),
                      'yyyy-MM-dd'
                    )}
                  </Text>
                  <Text fontSize="11px" color={'#777'}>
                    <Icon
                      as={FaStar}
                      boxSize={2}
                      color={'#777'}
                      fontSize="11px"
                    />
                    7 min read
                  </Text>
                </Flex>
              </Box>
            </Slide>
          ) : (
            <div></div>
          )
        ) : (
          <div></div>
        )
      ) : (
        <div></div>
      )}
      {/* popup */}
    </>
  );
};

export default Postfinal;
