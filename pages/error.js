import Link from 'next/link';
import React from 'react';
import { Button, Box, Text } from '@chakra-ui/react';
const Error = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 500,
        // backgroundColor: '#737373',
      }}
    >
      <Box>
        <Text
          // id="suraj3d"
          variant="h1"
          style={{
            textAlign: 'center',
            color: '#70869d',
            letterSpacing: '.15em',
          }}
        >
          {' '}
          404
        </Text>
        <Box className="cloak__wrapper" style={{}}>
          <Box className="cloak__container">
            <Box className="cloak"></Box>
          </Box>
        </Box>
        <Box className="info" style={{}}>
          <Text variant="h4"> We can not find that page</Text>
          <Text variant="p">
            We are fairly sure that page used to be here, but seems to have gone
            missing. We do apologise on it is behalf.
          </Text>
          <br></br>
          <Link href="/" passHref={true}>
            <Button
              style={{
                marginTop: 10,
                border: '1px solid #098a8f',
                paddingLeft: 20,
                paddingRight: 20,
                color: 'white',
                background: '#1c4e80',
              }}
            >
              Back To Home
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Error;
