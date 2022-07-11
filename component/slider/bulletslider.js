import { Box, Button, Flex, Heading, Icon, Img, Text } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import { FaRegClock } from 'react-icons/fa';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const images = [
  'https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/coin-banner.jpg',
  'https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/coin-banner.jpg',
  'https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/coin-banner.jpg',
];

const BulletSlider = () => {
  return (
    <Carousel
      showDots={true}
      arrows={false}
      className="bulletslider"
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      transitionDuration={500}
      autoPlaySpeed={4000}
    >
      {images.slice(0, 5).map((image, index) => {
        return (
          <Box key={index} style={{ position: 'relative' }}>
            <Box
              p={4}
              style={{
                position: 'absolute',
                left: 0,
                top: '10px',
                color: 'white',
              }}
            >
              <Button
                color="white"
                rounded={'none'}
                size="xs"
                fontWeight={'bold'}
              >
                {' '}
                METAVERSE
              </Button>
            </Box>

            <Img
              draggable={false}
              alt="text"
              style={{ width: '100%', height: '100%' }}
              src={image}
            />
            <Box
              p={4}
              style={{
                position: 'absolute',
                left: 0,
                bottom: '10px',
                color: 'white',
              }}
            >
              <Heading color={'white'} as="h4" size={'lg'}>
                {' '}
                The Joy of Petty Grievances in Death Becomes Her
              </Heading>
              <Flex mt="2" alignItems={'center'}>
                {' '}
                <Icon as={FaRegClock} color={'white'} />{' '}
                <Text color={'white'} ml={4}>
                  Oct 18, 2019
                </Text>{' '}
              </Flex>
            </Box>
          </Box>
        );
      })}
    </Carousel>
  );
};

export default BulletSlider;
