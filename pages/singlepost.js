import React from 'react';
import {
  Box,
  Button,
  HStack,
  Divider,
  Flex,
  Avatar,
  Grid,
  Heading,
  Img,
  Text,
  VStack,
  Link,
  Icon,
  UnorderedList,
  ListItem,
  useColorMode,
} from '@chakra-ui/react';
import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from 'react-icons/fa';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
} from 'react-icons/fa';

const Singlepost = () => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

  const listdata = [1, 2, 3, 4, 5, 6];
  const Trending = [1, 2, 3, 4];

  return (
    <Box my={8} px={{ base: '4', lg: '24', xl: '58' }}>
      <Link href="#">
        <Heading as="h2" size={'lg'} color={'green'}>
          Policy
        </Heading>
      </Link>
      <Heading as="h2" size={'lg'}>
        Elizabeth Warren Calls for US to Create a CBDC
      </Heading>
      <Text fontSize={'xl'} fontWeight={'medium'}>
        I think its time for us to move in that direction, the Democratic
        senator told NBCs Chuck Todd in an interview to be aired Thursday night.
      </Text>

      <Flex mt="2" flexDirection={{ base: 'column', md: 'row' }}>
        <Box mr={'6'}>
          <Text mr={4} fontWeight={'bold'}>
            By Greg Ahlstrand
          </Text>
        </Box>

        <Flex alignItems={'center'} mr={'6'}>
          <Icon as={FaRegClock} />
          <Text fontWeight={'medium'} ml={2}>
            Oct 18, 2019
          </Text>
        </Flex>

        <Box mr={'6'}>
          <Text mr={4} fontWeight={'medium'}>
            Updated Apr 1, 2022 at 8:39 a.m.
          </Text>
        </Box>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} my={6}>
        <HStack position={'sticky'} top="10px">
          <Icon as={FaFacebookF} boxSize={6} />
          <Icon as={FaTwitter} boxSize={6} />
          <Icon as={FaInstagram} boxSize={6} />
          <Icon as={FaLinkedin} boxSize={6} />
        </HStack>
      </Box>

      <Img
        my={6}
        objectFit={'cover'}
        src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/2JQ34CYAJJEJZIR5RL3KBQHBVY.jpg"
      />

      <Grid
        templateColumns={{ md: '2fr 8fr 2fr', sm: 'repeat(3, 1fr)' }}
        //   textColor="white"
        gap={6}
        position={'relative'}
      >
        <Box display={{ base: 'none', md: 'block' }}>
          <VStack position={'sticky'} top="10px">
            <Icon as={FaFacebookF} boxSize={6} />
            <Icon as={FaTwitter} boxSize={6} />
            <Icon as={FaInstagram} boxSize={6} />
            <Icon as={FaLinkedin} boxSize={6} />
          </VStack>
        </Box>
        <Box>
          <Text>
            U.S. Sen. Elizabeth Warren (D-Mass.) says its time for the U.S. to
            create its own central bank digital currency (CBDC). Warren spoke
            with NBCs Chuck Todd on Meet the Press Reports, scheduled to air at
            10:30 p.m. ET on Thursday. NBCUniversal shared a partial transcript
            of the conversation with CoinDesk.
          </Text>

          <UnorderedList>
            {listdata.map((list, index) => {
              return (
                <ListItem key={index} my={3}>
                  So a lot that banks do wrong, if you think, We could improve
                  that in a digital world, the answer is, Sure you could. But in
                  that case, lets do a central bank digital currency, Warren
                  told Todd. Yes, I think its time for us to move in that
                  direction.
                </ListItem>
              );
            })}
          </UnorderedList>

          <Heading as={'h4'} size={'md'}>
            Read more: Warren Targets 6 More Crypto Miners for Their Energy Use
          </Heading>

          <Box my={'8'}>
            <Heading as={'h3'} size={'md'}>
              DISCLOSURE
            </Heading>
            <Text fontStyle={'italic'} my={'2'}>
              The leader in news and information on cryptocurrency, digital
              assets and the future of money, CoinDesk is a media outlet that
              strives for the highest journalistic standards and abides by a
              strict set of editorial policies. CoinDesk is an independent
              operating subsidiary of Digital Currency Group, which invests in
              cryptocurrencies and blockchain startups. As part of their
              compensation, certain CoinDesk employees, including editorial
              employees, may receive exposure to DCG equity in the form of stock
              appreciation rights, which vest over a multi-year period. CoinDesk
              journalists are not allowed to purchase stock outright in DCG.
            </Text>
          </Box>

          <Box p={'6'} bg={isLightTheme ? '#ededed' : 'black'}>
            <Grid
              templateColumns={{ md: '2fr 10fr', sm: 'repeat(2, 1fr)' }}
              // textColor="white"
              gap={2}
            >
              <Box>
                <Avatar size="lg" src="https://bit.ly/dan-abramov" />
              </Box>
              <Box>
                <Text fontWeight={'bold'}>Greg Ahlstrand</Text>

                <Text my={2}>
                  Greg Ahlstrand is CoinDesks Asia News Editor. Greg has no
                  significant crypto holdings.
                </Text>

                <Text color="green">Follow @trisha on Twitter</Text>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Grid>

      <Box py={8}>
        <Heading as="h2" size={'lg'}>
          Trending
        </Heading>
        <Grid
          templateColumns={{ md: '6fr 6fr', sm: 'repeat(2, 1fr)' }}
          // textColor="white"
          gap={6}
          my={6}
        >
          {Trending.map((no, index) => {
            return (
              <Grid
                key={index}
                templateColumns={{ md: '9fr 3fr', sm: 'repeat(2, 1fr)' }}
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
                      {no}
                    </Text>

                    <Box>
                      <Text color={'green'} fontWeight={'medium'}>
                        Markets
                      </Text>
                      <Link href="#">
                        {' '}
                        <Heading as="h4" size={'md'}>
                          Ola Finance Says Attackers Stole $4.7M in Re-Entrancy
                          Exploit
                        </Heading>
                      </Link>
                      <Flex mt="2" alignItems={'center'}>
                        {' '}
                        <Text>By Trisha Mistri</Text>{' '}
                        <Text ml={4}>Oct 18, 2019</Text>{' '}
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Img
                    h={'100%'}
                    objectFit={'cover'}
                    src="https://coindesk-coindesk-prod.cdn.arcpublishing.com/resizer/CT_KykRO7IW11c95ubeby5zH1Co=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/273UIMCF5VDQJJ4C2VHQIT3ASU.jpg"
                    alt="Woman paying for a purchase"
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Singlepost;
