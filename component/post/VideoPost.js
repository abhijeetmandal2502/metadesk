// import {
//   Box,
//   Grid,
//   Stack,
//   Heading,
//   Text,
//   Divider,
//   UnorderedList,
//   ListItem,
//   Tag,
//   Button,
//   HStack,
//   Flex,
//   Avatar,
//   Img,
//   VStack,
//   Icon,
//   useColorMode,
// } from '@chakra-ui/react';
// import {
//   FaTwitter,
//   FaInstagram,
//   FaLinkedin,
//   FaFacebookF,
//   FaRegClock,
// } from 'react-icons/fa';
// import PostSeo from '../seo/PageSeo';
// import PostData from './PostData';
// import SocialShare from './SocialShare';
// import { FaPlay } from 'react-icons/fa';
// import { DragHandleIcon } from '@chakra-ui/icons';
// import Link from 'next/link';
// import ClassesPostBody from '../../styles/post-body.module.css';
// import ReactPlayer from 'react-player';

// import Trending from './Trending';

// export function VideoPost({ props }) {
//   // theming
//   const { colorMode, toggleColorMode } = useColorMode();
//   const isLightTheme = colorMode == 'light' ? true : false;
//   const primaryTextColor = isLightTheme ? 'black' : 'white';
//   const secondaryTextColor = isLightTheme ? 'white' : 'black';
//   const primaryBgColor = isLightTheme ? 'white' : 'black';
//   const secondaryBgColor = isLightTheme ? 'black' : 'white';

//   // store data
//   const data = props.data.post;
//   const tags = data.tags.edges;
//   const post = props.postList.edges;

//   const author = props.data.post.author.node;
//   const date = new Date(data.date);
//   const imagePath = data.featuredImage?.node.sourceUrl;

//   console.log('checkpostdata', data.youtube.videoId);

//   const listdata = [1, 2, 3, 4, 5, 6];
//   // const Trending = [1, 2, 3, 4];
//   //  const tags = data.tags.edges;

//   if (!imagePath) {
//     return 'not found';
//   }

//   const videoUrl = `https://www.youtube.com/watch?v=${data.youtube.videoId}`;

//   return (
//     <>
//       <PostSeo data={data} />

//       <Box my={8} px={{ base: '4', lg: '16' }}>
//         {/* <Link href="/">
//           <Heading as="h2" size={'lg'} color={'green'}>
//             Policy
//           </Heading>
//         </Link> */}
//         <Heading as="h2" size={'lg'}>
//           {data.title}
//         </Heading>

//         <Flex mt="2" flexDirection={{ base: 'column', md: 'row' }}>
//           <Box mr={'6'}>
//             <Text mr={4} fontWeight={'bold'}>
//               By{' '}
//               <b>{`${author.firstName == null ? '' : author.firstName} ${
//                 author.lastName == null ? '' : author.lastName
//               }`}</b>
//               {` `} on <b>{date.toDateString()}</b>
//             </Text>
//           </Box>

//           {/* <Flex alignItems={'center'} mr={'6'}>
//             <Icon as={FaRegClock} />
//             <Text fontWeight={'medium'} ml={2}>
//               {date.toDateString()}
//             </Text>
//           </Flex> */}

//           {/* <Box mr={'6'}>
//             <Text mr={4} fontWeight={'medium'}>
//               Updated Apr 1, 2022 at 8:39 a.m.
//             </Text>
//           </Box> */}
//         </Flex>

//         <Box display={{ base: 'block', md: 'none' }} my={6}>
//           <HStack position={'sticky'} top="10px" bottom="10px">
//             <Icon as={FaFacebookF} boxSize={6} />
//             <Icon as={FaTwitter} boxSize={6} />
//             <Icon as={FaInstagram} boxSize={6} />
//             <Icon as={FaLinkedin} boxSize={6} />
//           </HStack>
//         </Box>

//         {/* featured image  */}
//         {/* <Img my={6} objectFit={'cover'} src={imagePath} /> */}
//         {data.youtube.videoId && (
//           <Box textAlign={'center'} my={10}>
//             <ReactPlayer height={'480px'} width="1080px" url={videoUrl} />
//           </Box>
//         )}

//         <Grid
//           templateColumns={{ md: '2fr 8fr 2fr', sm: 'repeat(3, 1fr)' }}
//           //   textColor="white"
//           gap={6}
//           position={'relative'}
//         >
//           <Box display={{ base: 'none', md: 'block' }}>
//             <VStack position={'sticky'} top="10px" bottom="20px">
//               {/* <Icon as={FaFacebookF} boxSize={6} />
//               <Icon as={FaTwitter} boxSize={6} />
//               <Icon as={FaInstagram} boxSize={6} />
//               <Icon as={FaLinkedin} boxSize={6} /> */}
//               <SocialShare data={data} />
//             </VStack>
//           </Box>
//           <Box>
//             <Text fontSize={'xl'} fontWeight={'medium'} mb={10}>
//               <div
//                 className={`${ClassesPostBody.content} contentBody`}
//                 dangerouslySetInnerHTML={{ __html: data.content }}
//               />
//             </Text>

//             {/* author profile */}

//             {author && (
//               <Box p={'6'} bg={isLightTheme ? '#ededed' : 'black'}>
//                 <Grid
//                   templateColumns={{ md: '2fr 10fr', sm: 'repeat(2, 1fr)' }}
//                   // textColor="white"
//                   gap={2}
//                 >
//                   <Box>
//                     <Avatar size="lg" src={author.avatar} />
//                   </Box>
//                   <Box>
//                     <Text fontWeight={'bold'}>{author.firstName}</Text>

//                     <Text my={2}>
//                       Greg Ahlstrand is CoinDesks Asia News Editor. Greg has no
//                       significant crypto holdings.
//                     </Text>

//                     <Text color="green">
//                       Follow @{author.firstName} on Twitter
//                     </Text>
//                   </Box>
//                 </Grid>
//               </Box>
//             )}
//           </Box>
//         </Grid>

//         <Trending props={props} />
//       </Box>
//     </>
//   );
// }

// export default VideoPost;
