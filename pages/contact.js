import React from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  Img,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import Navbar from '../component/menu/Navbar';
import { getHeaderMenuByName } from '../lib/api';

const contact = () => {
  const contactdata = ['1', '2', '3', '4', '5', '6'];
  return (
    <Box px={{ base: '4', lg: '24', xl: '58' }} mb="20">
      <Grid
        templateColumns={{ md: '6fr 6fr  ', sm: 'repeat(1, 1fr)' }}
        // textColor="white"
        py={{ base: '0', md: '8' }}
        gap={4}
        alignItems={'center'}
      >
        <Box>
          <Heading as={'h2'} size="xl">
            Contact
          </Heading>
        </Box>
        <Box>
          <Text fontSize={'xl'}>
            For general press inquiries or United States and North America media
            requests, please get in touch at
          </Text>
          <Link>
            <Text fontSize={'xl'} fontWeight={'bold'}>
              contact.press@airbnb.com.
            </Text>
          </Link>
        </Box>
      </Grid>

      <Grid
        templateColumns={{ md: '6fr 6fr  ', sm: 'repeat(1, 1fr)' }}
        // textColor="white"
        py={{ base: '4', md: '8' }}
        gap={{ base: '2', md: '4' }}
        alignItems={'center'}
      >
        <Box>
          <Img
            width={{ base: '100%', md: '80%' }}
            rounded="lg"
            src="https://news.airbnb.com/wp-content/uploads/sites/4/2021/07/Contact_APAC@2X.jpg"
          />
        </Box>
        <Box>
          <Heading as={'h2'} size="lg">
            Asia-Pacific
          </Heading>
          <Grid
            templateColumns={{ md: '6fr 6fr  ', sm: 'repeat(1, 1fr)' }}
            // textColor="white"
            py={{ base: '0', md: '8' }}
            gap={4}
            alignItems={'center'}
          >
            {contactdata.map((data, index) => {
              return (
                <Box mb={2} key={index + 'contact'}>
                  <Text fontSize="xl">General Asia inquiries</Text>
                  <Link textDecoration={'underline'} href="#">
                    {' '}
                    <Text fontWeight={'semibold'} fontSize="xl">
                      press-asia@airbnb.com
                    </Text>
                  </Link>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};
export async function getStaticProps({ preview = false }) {
  const menuData = await getHeaderMenuByName(process.env.headerMenuName);

  return {
    props: {
      menu: menuData.menu,
    },
    revalidate: 15, //10 minutes
  };
}

export default contact;
