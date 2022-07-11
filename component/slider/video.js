// import {
//   Box,
//   Button,
//   Divider,
//   Flex,
//   Grid,
//   Heading,
//   Icon,
//   Img,
//   Text,
// } from '@chakra-ui/react';
// import Carousel from 'react-multi-carousel';
// import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from 'react-icons/fa';

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 2,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

// const Video = () => {
//   const tempArr = [1, 2, 3, 4, 5];

//   return (
//     <>
//       <Carousel arrows={false} responsive={responsive} autoPlay={false}>
//         {tempArr.map((tempArr, index) => {
//           return (
//             <Box key={index} style={{ position: 'relative' }} mx={'2'}>
//               <Box
//                 p={4}
//                 style={{
//                   position: 'absolute',
//                   left: 0,
//                   top: '10px',
//                   color: 'white',
//                 }}
//               >
//                 <Button
//                   bg={'#03a9e7'}
//                   color="white"
//                   rounded={'none'}
//                   size="xs"
//                   fontWeight={'bold'}
//                 >
//                   {' '}
//                   METAVERSE
//                 </Button>
//               </Box>

//               <Box
//                 p={4}
//                 style={{
//                   position: 'absolute',
//                   right: 0,
//                   top: '10px',
//                   color: 'white',
//                 }}
//               >
//                 <Icon as={FaPlayCircle} boxSize={14} />
//               </Box>

//               <Img
//                 draggable={false}
//                 alt="text"
//                 style={{ width: '100%', height: '100%' }}
//                 src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/coin-banner.jpg"
//               />
//               <Box
//                 p={4}
//                 style={{
//                   position: 'absolute',
//                   left: 0,
//                   bottom: '10px',
//                   color: 'white',
//                 }}
//               >
//                 <Heading color={'white'} as="h4" size={'lg'}>
//                   {' '}
//                   The Joy of Petty Grievances in Death Becomes Her
//                 </Heading>
//                 <Flex mt="2" alignItems={'center'}>
//                   {' '}
//                   <Icon as={FaRegClock} color={'white'} />{' '}
//                   <Text color={'white'} ml={4}>
//                     Oct 18, 2019
//                   </Text>{' '}
//                 </Flex>
//               </Box>
//             </Box>
//           );
//         })}
//       </Carousel>
//     </>
//   );
// };

// export default Video;
