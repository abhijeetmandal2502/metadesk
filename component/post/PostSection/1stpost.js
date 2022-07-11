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
    AspectRatio,
} from '@chakra-ui/react';
import {
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaFacebookF,
    FaRegClock,
} from 'react-icons/fa';
import PostSeo from '../../seo/PageSeo';
// import PostData from '../';
import SocialShare from '../SocialShare';
import { FaPlay } from 'react-icons/fa';
import { DragHandleIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import ClassesPostBody from '../../../styles/post-body.module.css';

import Trending from '../Trending';
// import ReactPlayer from 'react-player';

export function Post1st({ props }) {
    // theming
    const { colorMode, toggleColorMode } = useColorMode();
    const isLightTheme = colorMode == 'light' ? true : false;
    const primaryTextColor = isLightTheme ? 'black' : 'white';
    const secondaryTextColor = isLightTheme ? 'white' : 'black';
    const primaryBgColor = isLightTheme ? 'white' : 'black';
    const secondaryBgColor = isLightTheme ? 'black' : 'white';

    // store data
    const data = props.data.post;
    // const tags = data?.tags?.edges;
    const post = props.postList.edges;

    const author = props.data.post.author.node;
    const date = new Date(data.date);
    const imagePath = data.featuredImage?.node.sourceUrl;
    const videoUrl = `https://www.youtube.com/watch?v=${data.youtube.videoId}`;

    const videoLink = `https://www.youtube.com/embed/${data.youtube.videoId}`;

    // console.log('checkpostdata', props);

    const listdata = [1, 2, 3, 4, 5, 6];
    // const Trending = [1, 2, 3, 4];
    //  const tags = data.tags.edges;

    if (!imagePath) {
        return 'not found';
    }

    return (
        <>
            <PostSeo data={data} />

            {/* Post Section */}


            <Box my={8} px={{ base: '4', lg: '24', xl: '58' }}>
                <Box mb={'6'}>
                    <Heading as="h2" size={'lg'} mb={4}>
                        {data.title}
                    </Heading>
                    <Flex mt="2" flexDirection={{ base: 'column', md: 'row' }} justifyContent={'space-between'}>
                        <Flex>
                            <Text mr={2} fontWeight={'bold'}>
                                By
                            </Text>
                            <Text>
                                {`${author.firstName == null ? '' : author.firstName} ${author.lastName == null ? '' : author.lastName
                                    }`}
                            </Text>
                        </Flex>
                        <Text> {date.toDateString()}</Text>
                    </Flex>
                </Box>
                <Box>
                    {/* end Post Section */}

                    {/* featured image  */}
                    {data.youtube.videoId !== null &&
                        data.youtube.videoId !== undefined &&
                        data.youtube.videoId !== '' ? (
                        // <Box textAlign={'center'} my={10}>
                        // <AspectRatio maxW="560px" ratio={1}>
                        //   <ReactPlayer url={videoUrl} />
                        // </AspectRatio>
                        <Box>
                            <AspectRatio ratio={16 / 9}>
                                <iframe title="naruto" src={videoLink} allowFullScreen />
                            </AspectRatio>
                        </Box>
                    ) : (
                        // </Box>
                        <Img objectFit={'cover'} src={imagePath} w={'100%'} />
                    )}
                </Box>
            </Box>

            <Box my={8} px={{ base: '4', lg: '24', xl: '58' }}>

                <Box display={{ base: 'block', md: 'none' }} my={6}>
                    <HStack position={'sticky'} top="10px" bottom="10px">
                        <SocialShare data={data} />
                    </HStack>
                </Box>


                <Grid
                    templateColumns={{ md: '2fr 8fr 2fr', sm: 'repeat(1, 1fr)' }}
                    //   textColor="white"
                    gap={6}
                    position={'relative'}
                >
                    <Box display={{ base: 'none', md: 'block' }}>
                        <VStack position={'sticky'} top="10px" bottom="20px">

                            <SocialShare data={data} />
                        </VStack>
                    </Box>
                    <Box>
                        <Text className='subheading' fontWeight={'medium'} mb={10} mx={2} wordSpacing={'2px'}
                            lineHeight='28px'
                            wordBreak={'break-word'}  >

                            {/* <Box mb={'6'}>
                                <Heading as="h2" size={'lg'} mb={4}>
                                    {data.title}
                                </Heading>
                                <Flex mt="2" flexDirection={{ base: 'column', md: 'row' }} justifyContent={'space-between'}>
                                    <Flex>
                                        <Text mr={2} fontWeight={'bold'}>
                                            By
                                        </Text>
                                        <Text>
                                            {`${author.firstName == null ? '' : author.firstName} ${author.lastName == null ? '' : author.lastName
                                                }`}
                                        </Text>
                                    </Flex>
                                    <Text> {date.toDateString()}</Text>
                                </Flex>
                            </Box> */}

                            <div
                                className={`${ClassesPostBody.content} contentBody`}
                                dangerouslySetInnerHTML={{ __html: data.content }}
                            />
                        </Text>

                        {/* author profile */}

                        {author && (
                            <Box p={'6'} bg={isLightTheme ? '#ededed' : 'black'}>
                                <Grid
                                    templateColumns={{ md: '2fr 10fr', sm: 'repeat(1, 1fr)' }}
                                    // textColor="white"
                                    gap={2}
                                >
                                    <Box>
                                        <Avatar size="lg" src={author.avatar} />
                                    </Box>
                                    <Box>
                                        <Text fontWeight={'bold'}>{author.firstName}</Text>

                                        <Text my={2}>
                                            Greg Ahlstrand is CoinDesks Asia News Editor. Greg has no
                                            significant crypto holdings.
                                        </Text>

                                        <Text color="green">Follow @trisha on Twitter</Text>
                                    </Box>
                                </Grid>
                            </Box>
                        )}
                    </Box>
                </Grid>
                <Trending props={props} />
            </Box>
        </>
    );
}

export default Post1st;
