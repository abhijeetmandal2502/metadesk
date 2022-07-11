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
import Link from 'next/link';
import CategoryA from './categories/CategoryA';
import CategoryB from './categories/CategoryB';
import CategoryC from './categories/CategoryC';
import CategoryD from './categories/CategoryD';
import CategoryE from './categories/CategoryE';
import CategoryF from './categories/CategoryF';
import CategoryG from './categories/CategoryG';
// import CategoryK from './categories/CategoryK';
import NewsLetter from './NewsLetter';
// import Brandlist from './slider/BrandList';
// import Bulletslider from './slider/BulletSlider';
import HeroSection from './HeroSection';

const Home = (props) => {
  // theme
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const primaryBgColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const secondaryBgColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';

  // data store

  const {
    post,
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
  } = props;

  //console.log('crytodata', cryptoData);

  return (
    <>
      {/* 1st section */}

      {/* 2nd section */}
      <HeroSection data={heroSectionData} cryptoData={cryptoData} />
      {/* 3nd section */}
      <CategoryA data={categoryAData} />
      {/* 4th section */}
      <CategoryB data={categoryBData} />
      {/* 5th section */}
      <CategoryC data={categoryCData} subCategoryData={subCategoryData} />
      {/* 6th section */}
      <CategoryD data={categoryDData} />
      {/* 7th section */}
      <CategoryE data={categoryEData} />
      {/* 8th section */}
      <CategoryF data={categoryFData} />
      {/* 9th section */}
      <CategoryG data={categoryGData} />
      {/* 10th section */}
    </>
  );
};

export default Home;
