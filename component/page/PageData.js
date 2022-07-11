import { Box, Center, Text, Heading } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import PageSeo from '../seo/PageSeo';

function PageData({ data }) {
  const date = new Date(data.date);

  return (
    <>
      <PageSeo data={data} />

      <Box overflow="hidden" px={{ base: '4', lg: '16' }} my="10">
        <Heading as={'h2'} size={'lg'} textAlign={'center'} mb={'4'}>
          <div dangerouslySetInnerHTML={{ __html: data.title }} />
        </Heading>

        {/* Post Content */}
        <div
          // className={`${ClassesPostBody.content} contentBody`}
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </Box>
    </>
  );
}

export default PageData;
