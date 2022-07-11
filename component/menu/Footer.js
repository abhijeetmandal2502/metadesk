import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  useColorModeValue,
  Image,
  Heading,
  Divider,
  Flex,
  Icon,
} from '@chakra-ui/react';
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
} from 'react-icons/fa';
import Link from 'next/link';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <>
      <Box px={{ base: '4', lg: '24', xl: '40', '2xl': '80' }}>
        <Box py="40px">
          <Flex
            alignItems={'center'}
            justifyContent={'space-between'}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Link href="/">
              <Image
                objectFit="contain"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/logo-1-4.png"
                h="59px !important"
              />
            </Link>
            <Flex mt={{ base: '20px', md: '0px' }}>
              <Icon
                color={'rgba(0, 0, 0, 0.7)'}
                as={FaFacebookF}
                boxSize={4}
                mr={2}
              />
              <Icon
                color={'rgba(0, 0, 0, 0.7)'}
                as={FaTwitter}
                boxSize={4}
                mr={2}
              />
              <Icon
                color={'rgba(0, 0, 0, 0.7)'}
                as={FaInstagram}
                boxSize={4}
                mr={2}
              />
            </Flex>
          </Flex>
        </Box>
        <Divider />

        <Box py="30px">
          <Flex
            justifyContent={'space-between'}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <Text fontSize="13px" fontWeight="500" textAlign={'center'}>
              Ceris © 2020. Made with ☕ by Metadesk
            </Text>
            <Flex mt={{ base: '20px', md: '0px' }} justifyContent={'center'}>
              <Link href="/">
                <Text
                  mx={2}
                  fontSize="13px"
                  fontWeight="500"
                  cursor={'pointer'}
                >
                  Home
                </Text>
              </Link>
              <Link href="/">
                <Text
                  mx={2}
                  fontSize="13px"
                  fontWeight="500"
                  cursor={'pointer'}
                >
                  About
                </Text>
              </Link>
              <Link href="/contact">
                <Text
                  mx={2}
                  fontSize="13px"
                  fontWeight="500"
                  cursor={'pointer'}
                >
                  Contact
                </Text>
              </Link>
              <Link href="/category/top-news">
                <Text
                  mx={2}
                  fontSize="13px"
                  fontWeight="500"
                  cursor={'pointer'}
                >
                  Top News
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Box>

      {/* <Box>
        <Box>
          <Container as={Stack} maxW={'6xl'} py={10}>
            <SimpleGrid
              templateColumns={{
                base: '1fr 1fr ',
                md: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr  4fr',
              }}
              spacing={4}
            >
              <Stack align={'flex-start'}>
                <Heading size="sm" as="h5">
                  Support
                </Heading>
                <Link href={'/'}>Meta</Link>
                <Link href={'/'}>Prices</Link>
              </Stack>

              <Stack align={'flex-start'}>
                <Heading size="sm" as="h5">
                  About
                </Heading>
                <Link href={'/'}>Meta</Link>
                <Link href={'/'}>Prices</Link>
              </Stack>

              <Stack align={'flex-start'}>
                <Heading size="sm" as="h5">
                  About
                </Heading>
                <Link href={'/'}>Meta</Link>
                <Link href={'/'}>Prices</Link>
              </Stack>

              <Stack align={'flex-start'}>
                <Heading size="sm" as="h5">
                  About
                </Heading>
                <Link href={'/'}>Meta</Link>
                <Link href={'/'}>Prices</Link>
              </Stack>

              <Stack align={'flex-start'}>
                <Heading size="sm" as="h5">
                  About
                </Heading>
                <Link href={'/'}>Meta</Link>
                <Link href={'/'}>Prices</Link> <Link href={'/'}>Meta</Link>
                <Link href={'/'}>Prices</Link>
              </Stack>

              <Stack align={'flex-start'}>
                <Heading size="sm" as="h5">
                  About
                </Heading>
                <Link href={'/'}>Meta</Link>
                <Link href={'/'}>Prices</Link>
              </Stack>

              <Stack align={'flex-start'}>
                <Heading size="sm" as="h5">
                  About
                </Heading>
                <Link href={'/'}>Meta</Link>
                <Link href={'/'}>Prices</Link>
              </Stack>

              <Stack align={'flex-start'}>
                <Heading size="sm" as="h5">
                  Quick Links
                </Heading>
                <Link href={'/about-us'}>About Us</Link>
                <Link href={'/contact-us'}>Contact US</Link>
                <Link href={'/disclaimer'}>Disclaimer</Link>
                <Link href={'/privacy-policy'}>Privacy Policy</Link>
              </Stack>

              <Stack
                spacing={6}
                alignItems={'flex-start'}
                display={{ base: 'none', md: 'block' }}
              >
                <Link href="/">
                  <Image
                    objectFit="contain"
                    src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/logo-1-4.png"
                    width="100% !important"
                  />
                </Link>
                <Text fontWeight={'medium'}>
                  All That We See or Seem is buta Dream Within a Dream Becomes
                  Her
                </Text>
                <Divider />
                <Text fontSize={'sm'}>Follow MetaDesk </Text>
                <Flex>
                  <Icon as={FaFacebookF} boxSize={6} mr={'4'} />
                  <Icon as={FaTwitter} boxSize={6} mr={'4'} />
                  <Icon as={FaInstagram} boxSize={6} mr={'4'} />
                  <Icon as={FaLinkedin} boxSize={6} mr={'4'} />
                </Flex>
              </Stack>
            </SimpleGrid>

            <Stack
              spacing={6}
              alignItems={'flex-start'}
              display={{ base: 'block', md: 'none' }}
              mt={'30px !important'}
            >
              <Link href="/">
                <Image
                  objectFit="contain"
                  src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/logo-1-4.png"
                />
              </Link>
              <Text fontWeight={'medium'}>
                All That We See or Seem is buta Dream Within a Dream Becomes Her
              </Text>
              <Divider />
              <Text fontSize={'sm'}>Follow MetaDesk </Text>
              <Flex>
                <Icon as={FaFacebookF} boxSize={6} mr={'4'} />
                <Icon as={FaTwitter} boxSize={6} mr={'4'} />
                <Icon as={FaInstagram} boxSize={6} mr={'4'} />
                <Icon as={FaLinkedin} boxSize={6} mr={'4'} />
              </Flex>
            </Stack>
          </Container>
        </Box>

        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          py={'4'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
        >
          <Text textAlign={'center'}>© 2022 METADESK </Text>
        </Box>

        <Box
                    borderTopWidth={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}>
                    <Container
                        as={Stack}
                        maxW={'6xl'}
                        py={4}
                        direction={{ base: 'column', md: 'row' }}
                        spacing={4}
                        justify={{ base: 'center', md: 'space-between' }}
                        align={{ base: 'center', md: 'center' }}>
                        <Text>© 2022 Trisha Templates. </Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton href={'#'}>
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton href={'#'}>
                                <FaInstagram />
                            </SocialButton>
                            <SocialButton href={'#'}>
                                <FaLinkedin />
                            </SocialButton>
                            <SocialButton href={'#'}>
                                <FaFacebookF />
                            </SocialButton>
                        </Stack>
                    </Container>
                </Box>  
      </Box> */}
    </>
  );
}
