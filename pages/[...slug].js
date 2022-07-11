import { VStack } from '@chakra-ui/react';
import { filterProps } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import PostList from '../components/archives/post-list';
// import Container from '../components/container';
// import Intro from '../components/intro';
// import Layout from '../components/layout';
// import Footer from '../components/layout/footer';
// import Header from '../components/layout/header';
// import PageData from '../components/page/page-data';
// import Post from '../components/post/post';
import PostList from '../component/archives/PostList';
import PageData from '../component/page/PageData';
import Post from '../component/post/Post';
import Error from './error';
import {
  getAllPostsWithSlug,
  getCateogryRecentPostbyName,
  getHeaderMenuByName,
  getPageDetailsByUri,
  getPostDetailsByUri,
  getAllPostsWithUri,
  getAllPostsForHome,
  getAllCategory,
} from '../lib/api';
import Postfinal from '../component/post/PostSection/Postfinal';
//import Post1st from '../component/post/PostSection/1stpost';
//import Post2nd from '../component/post/PostSection/post2nd';
// import VideoPost from '../component/post/VideoPost';

//export const config = { amp: 'hybrid' }

function OtherPages(props) {
  //console.log("original data = ", props)

  //console.log('checkslug', props);

  const router = useRouter();

  let componentToShow;

  if (router.isFallback) {
    return (
      <Error />
      // <>
      //   <h1>Loading</h1>
      // </>
    );
  } else {
    //console.log(props)

    const urlType = props.urlType;
    const pageType = props.pageType;

    // console.log('checkpagetype', props);

    //if found any data
    if (props.data && props.data) {
      //check for category, tag, author
      if (pageType === 'archive') {
        componentToShow = (
          <PostList
            urlType={props.urlType}
            urlName={props.urlName}
            data={props.data}
            slug={props.slug}
            section={props.section}
            allData={props}
            allCategoryData={props.allCategoryData}
          />
        );
      } else if (pageType === 'page') {
        //it means it is a page
        componentToShow = (
          // <h1>page data</h1>;
          <PageData data={props.data} />
        );
      } else {
        //it means it is a post

        componentToShow = <Postfinal props={props} />;
        // <Post1st props={props} />
        // <Post2nd props={props} />
        // <Post props={props} />;
      }
    } else {
      componentToShow = '<h1>Not Found Page</h1>';
    }
  }

  return (
    <>
      {/* <Navbar menu={props.menu} /> */}
      {/* <VStack> */}
      <div>
        <main className="mainContent">{componentToShow}</main>
      </div>
      {/* </VStack> */}
      {/* <Footer /> */}
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const urlType = slug[0];

  const allCategoryData = await getAllCategory();
  const postList = await getAllPostsForHome();
  var trendingData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.post.TRENDING.NAME
  );
  var sideBarData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.SIDEBAR.SIDEBAR_NAME
  );
  var sectionAData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.archive.SECTION_A.NAME
  );
  var sectionBData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.archive.SECTION_B.NAME
  );
  var sectionCData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.archive.SECTION_C.NAME
  );

  //get data
  let data;
  let pageType;

  if (urlType === 'category' || urlType === 'tag' || urlType === 'author') {
    let typeName;
    if (urlType === 'tag') {
      typeName = urlType;
    } else {
      typeName = urlType + 'Name';
    }

    data = await getCateogryRecentPostbyName(typeName, slug[1]);

    pageType = 'archive';
  } else if (
    urlType === 'about-us' ||
    urlType === 'blog' ||
    // urlType === 'contact-us' ||
    urlType === 'disclaimer' ||
    urlType === 'home' ||
    urlType === 'tiehome' ||
    urlType === 'privacy-policy'
  ) {
    //it means is is a page

    const uri = slug[0];
    data = await getPageDetailsByUri(uri);

    pageType = 'page';
  } else {
    //it means it is a post
    const uri = params.slug.join('/');
    data = await getPostDetailsByUri(uri);

    pageType = 'post';
  }

  // menu data
  const menuData = await getHeaderMenuByName(process.env.headerMenuName);
  //console.log('pagetype', pageType);

  return {
    props: {
      trending: trendingData,
      sideBarData: sideBarData,
      postList: postList,
      urlType: urlType,
      urlName: slug[0],
      data: data,
      menu: menuData.menu,
      pageType: pageType,
      slug: slug,
      section: { sectionAData, sectionBData, sectionCData },
      allCategoryData: allCategoryData,
    },
    revalidate: 30, //30 minutes
  };
}

// export async function getStaticProps({ preview = false }) {

//   return { props: { postList: postList } };
// }
export async function getStaticPaths() {
  const allPosts = await getAllPostsWithUri();

  //const mostVisitedUri = ['/fantasy-cricket/dream11-investment-strategy-5-years-of-experience/']

  const categoryListUri = [
    '/category/coins',
    '/category/news',
    '/category/editors-pick',
    '/category/academy',
    '/category/reviews',
    '/category/top-news',
    '/category/video',
  ];

  const postListUri = allPosts.edges.map(({ node }) => `${node.uri}`);

  const allUri = [...categoryListUri, ...postListUri];

  return {
    paths: allUri,
    fallback: true,
  };
}

export default OtherPages;
