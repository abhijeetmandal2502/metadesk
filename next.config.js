// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// const withPWA = require('next-pwa');

module.exports = {
  env: {
    wordpressApiUrl:
      //  "http://13.212.30.117/graphql",
      'https://metadesk.thenwg.xyz/graphql',
    headerMenuName: 'Main menu',
    text: {
      MORE: 'SEE ALL',
      FOOTER_DESC:
        ' Metadesk provides latest crypto news from all over the world. Get breaking news alerts in field of politics, bollywood, hollywood and other social news by subscribing us.',
    },

    home: {
      heroSection: {
        NAME: 'News',
        DESC: 'The latest entertainment news in the world',
        SLUG: '/category/breaking-news',
      },
      categoryList: {
        SIDEBAR: {
          SIDEBAR_NAME: 'News',
          SIDEBAR_DESC: 'The latest entertainment news in the world',
          SIDEBAR_SLUG: '/category/news',
        },

        CATEGORY_A: {
          NAME: 'EDITORS PICK',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/editors-pick',
        },
        CATEGORY_B: {
          NAME: 'PRESS RELEASES',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/press-releases',
        },
        CATEGORY_C: {
          NAME: 'COINS',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/coins',
        },
        CATEGORY_D: {
          NAME: 'Video',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/video',
        },
        CATEGORY_E: {
          NAME: 'TOP NEWS',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/top-news',
        },
        CATEGORY_F: {
          NAME: 'ACADEMY',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/academy',
        },

        CATEGORY_G: {
          NAME: 'REVIEWS',
          DESC: 'The latest entertainment news in the world',
          SLUG: '/category/reviews',
        },

        // CATEGORY_B: 'Romance',
      },
    },

    post: {
      TRENDING: {
        DEMO_NAME: 'TRENDING',
        NAME: 'TRENDING',
        DESC: 'The latest entertainment news in the world',
        SLUG: '/category/social-news',
      },
    },

    archive: {
      SECTION_A: {
        NAME: 'TOP NEWS',
        DESC: 'The latest entertainment news in the world',
        SLUG: '/category/social-news',
      },
      SECTION_B: {
        // NAME: 'OPINION',
        NAME: 'Opinion',
        DESC: 'The latest entertainment news in the world',
        SLUG: '/category/social-news',
      },
      SECTION_C: {
        // NAME: 'FEATURES',
        NAME: 'Features',
        DESC: 'The latest entertainment news in the world',
        SLUG: '/category/social-news',
      },
    },

    image: {
      LOGO: 'https://newsctrls.com/wp-content/uploads/2022/04/news-ctrls.com-1.png',
    },
    color: {
      PRIMARY_COLOR: '#1e4683',
    },
  },
  images: {
    domains: [
      // 'http://13.212.30.117',
      'https://metadesk.thenwg.xyz/graphql',
      'https://www.youtube.com',
      'i0.wp.com',
      'secure.gravatar.com',
      'babacricnews.s3.ap-south-1.amazonaws.com',
      'i1.ytimg.com',
    ],
  },
};
