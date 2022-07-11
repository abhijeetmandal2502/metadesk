import '../styles/globals.css';
import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  CSSReset,
  ColorModeScript,
  // theme,
  // ThemeProvider,
  ScaleFade,
  Button,
  Stack,
  Box,
} from '@chakra-ui/react';
import Layout from '../component/layout';
import 'react-multi-carousel/lib/styles.css';
import customTheme from '../styles/theme';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import CustomLoader from '../component/CustomLoader';
import Navbar from '../component/menu/Navbar';
import NewsLetter from '../component/NewsLetter';
import Fonts from '../styles/fonts/Font';
import Footer from '../component/menu/Footer';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useScrollDirection } from 'react-use-scroll-direction';

function MyApp({ Component, pageProps, router }) {
  const Router = useRouter();

  const [loading, setLoading] = useState(false);
  const [direction, setDirection] = React.useState(String);
  const { isScrollingUp, isScrollingDown } = useScrollDirection();
  var [position, setPosition] = useState();

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    setPosition(window.pageYOffset);
    isScrollingDown && setDirection('down');
    isScrollingUp && setDirection('up');
  }, [isScrollingDown, isScrollingUp]);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  console.log('chakapppae', position);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Fonts />
      <ChakraProvider theme={customTheme}>
        {/* <Layout> */}
        <Navbar menu={pageProps.menu} />

        <ScaleFade
          key={router.route}
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -16, opacity: 0 }}
          initialScale={0.9}
          in="true"
        >
          {/* <ColorModeScript initialColorMode="default"></ColorModeScript> */}
          <CSSReset />

          <Stack>
            {!loading ? <Component {...pageProps} /> : <CustomLoader />}

            {position > 500 ? (
              <Box display={{ base: 'none', md: 'contents' }}>
                <Box position="fixed" bottom={'30px'} alignSelf={'end'}>
                  <div>
                    <Button
                      w={'50px'}
                      h={'50px'}
                      mx={30}
                      onClick={() => {
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }, 0);
                      }}
                    >
                      <AiOutlineArrowUp style={{ fontSize: '30px' }} />
                    </Button>

                    {/* <CircularProgress
                    mr={10}
                    value={percentage * 100}
                    color="#3545ee"
                    size="80px"
                    thickness="2px"
                  >
                    <CircularProgressLabel>
                      {Math.round(percentage * 100) == 9
                        ? '0'
                        : Math.round(percentage * 100)}
                      %
                    </CircularProgressLabel>
                  </CircularProgress> */}
                  </div>
                </Box>
              </Box>
            ) : (
              <div></div>
            )}
          </Stack>

          {/* <Component {...pageProps} /> */}
        </ScaleFade>
        <NewsLetter />
        <Footer />
        {/* </Layout> */}
      </ChakraProvider>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const menuData = await getHeaderMenuByName(process.env.headerMenuName);

  // await getCateogryRecentPostbyName(
  //   'categoryName',
  //   process.env.home.heroSection.NAME
  // );

  return {
    props: {
      menu: menuData.menu,
    },
    revalidate: 15, //10 minutes
  };
}

export default MyApp;
