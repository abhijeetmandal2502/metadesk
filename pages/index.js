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
import Head from 'next/head';
import React from 'react';
import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
// import Videoslider from '../component/slider/Video';
import Link from 'next/link';

import {
  getAllPostsForHome,
  getHeaderMenuByName,
  getCateogryRecentPostbyName,
  getCategoryByName,
  getCryptoStats,
} from '../lib/api';

import Home from '../component/Home';
import Navbar from '../component/menu/Navbar';

const Index = ({
  allPosts: { edges },
  preview,
  menu,
  cryptoData,
  heroSectionData,
  sideBarData,
  categoryAData,
  categoryBData,
  categoryCData,
  categoryDData,
  categoryEData,
  categoryFData,
  categoryGData,
  subCategoryData,
}) => {
  // theme
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

  //  data store
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  // console.log('checkdata', heroSectionData);
  const menuItems = menu;
  // console.log('menucheck=', menu);

  return (
    <>
      <Head>
        <title data-rh="true">Metadesk - get the latest blockchain news</title>
        <meta
          name="description"
          content="Get the latest news for Bollywood, IPL, Sports and Other Social breaking news"
        />

        {/* <link rel="canonical" href="https://newsctrls.com/" /> */}
      </Head>
      {/* <Navbar menu={menu} /> */}

      <Home
        post={edges}
        cryptoData={cryptoData}
        heroSectionData={heroSectionData}
        sideBarData={sideBarData}
        categoryAData={categoryAData}
        categoryBData={categoryBData}
        categoryCData={categoryCData}
        subCategoryData={subCategoryData}
        categoryDData={categoryDData}
        categoryEData={categoryEData}
        categoryFData={categoryFData}
        categoryGData={categoryGData}
      />
    </>
  );
};

export default Index;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const menuData = await getHeaderMenuByName(process.env.headerMenuName);
  const heroSectionData = await getAllPostsForHome(preview);
  // await getCateogryRecentPostbyName(
  //   'categoryName',
  //   process.env.home.heroSection.NAME
  // );

  const sideBarData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.SIDEBAR.SIDEBAR_NAME
  );
  const cryptoData = await getCryptoStats();
  const categoryAData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_A.NAME
  );
  const categoryBData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_B.NAME
  );
  const categoryCData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_C.NAME
  );
  const categoryDData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_D.NAME
  );
  const categoryEData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_E.NAME
  );
  const categoryFData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_F.NAME
  );
  const categoryGData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_G.NAME
  );

  const subCategoryData = await getCategoryByName();

  return {
    props: {
      allPosts,
      preview,
      menu: menuData.menu,
      cryptoData: cryptoData,
      heroSectionData: heroSectionData,
      sideBarData: sideBarData,
      categoryAData: categoryAData,
      categoryBData: categoryBData,
      categoryCData: categoryCData,
      categoryDData: categoryDData,
      categoryEData: categoryEData,
      categoryFData: categoryFData,
      categoryGData: categoryGData,
      subCategoryData: subCategoryData,
    },
    revalidate: 15, //10 minutes
  };
}
