import React from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Img,
  Text,
} from '@chakra-ui/react';

const category = () => {
  // theming

  const tempArr = [1, 2, 3];
  const tempArrTwo = [1, 2, 3, 4];

  return (
    <Box my={8} px={{ base: '4', lg: '16' }}>
      <Heading as="h2" size={'lg'}>
        Tech
      </Heading>

      <Grid
        templateColumns={{ md: '6fr 6fr', sm: 'repeat(2, 1fr)' }}
        textColor="white"
        gap={6}
        my={6}
      >
        <Box>
          <Img src="https://coindesk-coindesk-prod.cdn.arcpublishing.com/resizer/sJhdZdJGat0hlXq-gMd6gqnPkm8=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/PPOFTJUV7FBS5LXFRJXHMRCW4I.jpg" />

          <Box my={'2'}>
            <Heading as={'h2'} size={'lg'} color={'black'}>
              DeFi Lender Inverse Finance Exploited for $15.6M
            </Heading>
            <Text mt={'2'} color={'black'}>
              All That We See or Seem is but a Dream Within a Dream Becomes Her
            </Text>
            <Flex mt="2" alignItems={'center'}>
              <Text color={'black'} fontWeight={'bold'}>
                By Trisha Mistri
              </Text>
              <Text color={'black'} ml={4}>
                Oct 18, 2019
              </Text>
            </Flex>
          </Box>
        </Box>
        <Box>
          {tempArr.map((image, index) => {
            return (
              <Box key={index}>
                <Grid
                  templateColumns={{
                    md: '9fr 3fr',
                    sm: 'repeat(2, 1fr)',
                  }}
                  textColor="white"
                  gap={6}
                >
                  <Box>
                    {/* <Button bg={'#03a9e7'} color='white' mb={2} rounded={'none'} size='xs' fontWeight={'bold'} > BITCOIN</Button> */}
                    <Heading as="h4" size={'md'} color={'black'}>
                      Ola Finance Says Attackers Stole $4.7M in
                      &apos;Re-Entrancy&apos; Exploit
                    </Heading>
                    <Text mt={'2'} color={'black'}>
                      All That We See or Seem is but a Dream Within a Dream
                      Becomes Her
                    </Text>
                    <Flex mt="2" alignItems={'center'}>
                      <Text color={'black'} fontWeight={'bold'}>
                        By Trisha Mistri
                      </Text>
                      <Text color={'black'} ml={4}>
                        Oct 18, 2019
                      </Text>
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
                <Box my={6}>
                  <Divider />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Grid>

      <Divider />
      <Box py={6}>
        <Heading as="h2" size={'lg'} color={'black'}>
          tempArrTwo in Tech
        </Heading>
        <Grid
          templateColumns={{ md: '6fr 6fr', sm: 'repeat(2, 1fr)' }}
          // textColor="white"
          gap={6}
          my={6}
        >
          {tempArrTwo.map((no, index) => {
            return (
              <Grid
                key={index}
                templateColumns={{ md: '9fr 3fr', sm: 'repeat(2, 1fr)' }}
                // textColor="white"
                gap={2}
              >
                <Box>
                  <Flex alignItems={'baseline'}>
                    <Text
                      fontSize={'3xl'}
                      fontWeight="bold"
                      color={'blue'}
                      mx={2}
                    >
                      {no}
                    </Text>
                    {/* <Button bg={'#03a9e7'} color='white' mb={2} rounded={'none'} size='xs' fontWeight={'bold'} > BITCOIN</Button> */}
                    <Box>
                      <Heading as="h4" size={'md'}>
                        Ola Finance Says Attackers Stole $4.7M in &apos;
                        Re-Entrancy&apos; Exploit
                      </Heading>
                      <Flex mt="2" alignItems={'center'}>
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

      <Divider />
      <Box py={6}>
        <Grid
          templateColumns={{ md: '6fr 6fr', sm: 'repeat(2, 1fr)' }}
          // textColor="white"
          gap={6}
          my={6}
        >
          <Box>
            <Heading as="h2" size={'lg'} textAlign={'center'} my={6}>
              Opinion
            </Heading>

            {tempArr.map((image, index) => {
              return (
                <Box key={index}>
                  <Grid
                    templateColumns={{ md: '3fr 9fr', sm: 'repeat(2, 1fr)' }}
                    // textColor="white"
                    gap={6}
                  >
                    <Box>
                      <Img
                        h={'100%'}
                        objectFit={'cover'}
                        src="https://coindesk-coindesk-prod.cdn.arcpublishing.com/resizer/CT_KykRO7IW11c95ubeby5zH1Co=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/273UIMCF5VDQJJ4C2VHQIT3ASU.jpg"
                        alt="Woman paying for a purchase"
                      />
                    </Box>

                    <Box>
                      {/* <Button bg={'#03a9e7'} color='white' mb={2} rounded={'none'} size='xs' fontWeight={'bold'} > BITCOIN</Button> */}
                      <Heading as="h4" size={'md'}>
                        Ray Dalio, Sigma Males and the New Grindset
                      </Heading>

                      <Flex mt="2" alignItems={'center'}>
                        {' '}
                        <Text fontWeight={'bold'}>By Trisha Mistri</Text>{' '}
                        <Text ml={4}>Oct 18, 2019</Text>{' '}
                      </Flex>
                    </Box>
                  </Grid>

                  <Box my={6}>
                    <Divider />
                  </Box>
                </Box>
              );
            })}
          </Box>

          <Box>
            <Heading as="h2" size={'lg'} textAlign={'center'} mb={6}>
              Features
            </Heading>

            <Img src="https://coindesk-coindesk-prod.cdn.arcpublishing.com/resizer/sJhdZdJGat0hlXq-gMd6gqnPkm8=/1440x1080/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/PPOFTJUV7FBS5LXFRJXHMRCW4I.jpg" />

            <Box my={'2'} textAlign={'center'}>
              <Heading as={'h2'} size={'lg'}>
                DeFi Lender Inverse Finance Exploited for $15.6M
              </Heading>
              <Text mt={'2'}>
                All That We See or Seem is but a Dream Within a Dream Becomes
                Her
              </Text>
              <Flex justifyContent={'center'} mt="2" alignItems={'center'}>
                <Text fontWeight={'bold'}>By Trisha Mistri</Text>{' '}
                <Text ml={4}>Oct 18, 2019</Text>{' '}
              </Flex>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default category;
