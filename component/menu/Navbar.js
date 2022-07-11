import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  DrawerFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Grid,
  useColorMode,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PhoneIcon,
} from '@chakra-ui/icons';
import { createContext } from 'react';
import MobileMultiMenus from './MobileMultiMenus';
import DeskMultiMenus from './DeskMultiMenus';
import {
  FaBell,
  FaRegMoon,
  FaUser,
  FaMoon,
  FaSearch,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import Headroom from 'react-headroom';
import Link from 'next/link';

export default function Navbar({ menu }) {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const primaryBgColor = isLightTheme ? 'white' : 'rgba(0, 0, 0, 0.85)';
  const secondaryBgColor = isLightTheme ? 'rgba(0, 0, 0, 0.85)' : 'white';

  const {
    isOpen: isOpendrawer,
    onOpen: onOpendrawer,
    onClose: onClosedrawer,
  } = useDisclosure();

  const menuItems = menu?.menuItems?.edges;
  console.log('menucheck=', menuItems);
  if (menuItems === null || menuItems === undefined) {
    return <div></div>;
  }
  return (
    menuItems && (
      // <Headroom>
      <Box zIndex={'999'} bg={primaryBgColor} className="sticky-header-div">
        <Box
          px={{ base: '4', lg: '24', xl: '40', '2xl': '80' }}
          // borderBottom={'1px solid rgb(0 0 0 / 7%)'}
          boxShadow=" 0px 3px 2px 0px rgb(0 0 0 / 3%), 0 1px 0 0 rgb(0 0 0 / 4%), 0 -1px 0 0 rgb(0 0 0 / 4%)"
        >
          {/* <Flex
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    align={'center'}
                    justifyContent={'space-between'}>

                    <Flex justify={{ base: 'center', md: 'start' }}>
                        <Link
                            href="/"
                        >
                            <Image
                                objectFit="contain"
                                src="https://akm-img-a-in.tosshub.com/aajtak/resource/img/bemisaal-20-saal/aajtak-logo-71X52.png"
                                width="100% !important"
                                height="54px !important"
                            />
                        </Link>
                    </Flex>

                    <Box bg='#ededed' height={"200px"} >fgdfh</Box>

                </Flex> */}

          <Grid
            templateColumns={{ md: '12fr ', sm: 'repeat(2, 1fr)' }}
            textColor="white"
            gap={4}
            py={{ base: '6', md: '12' }}
            display={{ base: 'none', lg: 'block' }}
          >
            <Box>
              <Link href="/">
                <Image
                  color={'red'}
                  objectFit="contain"
                  src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/logo-1-4.png"
                  height="54px !important"
                />
              </Link>
            </Box>
            {/* <Box bg="#ededed" h={{ base: '100px', md: '100%' }}></Box> */}
          </Grid>

          <Stack
            justify={'space-between'}
            direction={'row'}
            py={4}
            alignItems={'center'}
          >
            <Box display={{ base: 'block', lg: 'none' }}>
              <Link href="/">
                <Image
                  objectFit="contain"
                  src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/logo-1-4.png"
                  // width="100% !important"
                  height="34px !important"
                />
              </Link>
            </Box>

            <Flex
              // my={2}
              display={{ base: 'none', lg: 'flex' }}
              justifyContent="space-around"
            >
              <DeskMultiMenus menus={menuItems} />
            </Flex>

            <Flex alignItems={'center'}>
              <Icon
                as={colorMode == 'dark' ? MoonIcon : SunIcon}
                onClick={toggleColorMode}
                boxSize={{ base: '4', lg: '3' }}
                mx={'10px'}
              />
              {/* isDarkModeOn ? <SunIcon /> : <MoonIcon /> */}
              {/* <Icon as={FaUser} onClick={onOpen} boxSize={6} mr={'4'} /> */}
              <Link href="/search">
                <Icon
                  as={FaSearch}
                  boxSize={{ base: '4', lg: '3' }}
                  mx={'10px'}
                />
              </Link>

              <Flex
                flex={{ base: 0, md: 'auto' }}
                // ml={{ base: 1 }}
                display={{ base: 'flex', lg: 'none' }}
              >
                <IconButton
                  onClick={onOpendrawer}
                  icon={
                    isOpen ? (
                      <CloseIcon w={3} h={3} />
                    ) : (
                      <HamburgerIcon boxSize={6} />
                    )
                  }
                  variant={'ghost'}
                  aria-label={'Toggle Navigation'}
                />
              </Flex>
            </Flex>
          </Stack>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalBody p={'0px'}>
                <InputGroup>
                  <InputLeftElement children={<FaSearch />} />
                  <Input type="text" placeholder="Search" />
                </InputGroup>
              </ModalBody>
            </ModalContent>
          </Modal>

          <Collapse in={isOpen} animateOpacity>
            <MobileNav
              menuItems={menuItems}
              isOpendrawer={isOpendrawer}
              onClosedrawer={onClosedrawer}
              onToggleDrawer
            />
          </Collapse>
        </Box>
      </Box>
      // </Headroom>
    )
  );
}

export const DrawerToggle = createContext();

export const MobileNav = ({
  isOpendrawer,
  onClosedrawer,
  onToggleDrawer,
  state,
  menuItems,
}) => {
  var data = 'oka';

  return (
    <DrawerToggle.Provider value={onClosedrawer}>
      <Drawer
        placement="left"
        isOpen={isOpendrawer}
        onClose={onClosedrawer}
        w="200px"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" py="20px" pl="20px" pr="50px">
            <Box>
              <Link href="/">
                <Image
                  color={'red'}
                  objectFit="contain"
                  src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/logo-1-4.png"
                  // width="100% !important"
                  height="50px !important"
                  mb="20px"
                />
              </Link>
              <Flex>
                <Icon
                  color={'rgba(0, 0, 0, 0.7)'}
                  as={FaFacebookF}
                  boxSize={4}
                  mx={2}
                />
                <Icon
                  color={'rgba(0, 0, 0, 0.7)'}
                  as={FaTwitter}
                  boxSize={4}
                  mx={2}
                />
                <Icon
                  color={'rgba(0, 0, 0, 0.7)'}
                  as={FaInstagram}
                  boxSize={4}
                  mx={2}
                />
              </Flex>
            </Box>
          </DrawerHeader>

          <DrawerBody py="20px" px="0px">
            <Stack
              bg={useColorModeValue('white', 'white')}
              display={{ lg: 'none' }}
            >
              <MobileMultiMenus menus={menuItems} />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </DrawerToggle.Provider>
  );
};

const menus = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Category',
    href: '/category',
  },
  {
    label: 'Full Width',
    href: '/full-width',
  },
  {
    label: 'Single Post',
    href: '/singlepost',
    // submenu: [
    //     {
    //         label: "Sub Menu 1",
    //         submenu: [

    //             {
    //                 label: "Boom 2",
    //                 href: "/",
    //             }
    //         ]
    //     },
    //     {
    //         label: "Sub Menu 2",
    //         submenu: [
    //             {
    //                 label: "Deep 1",
    //                 href: "/",
    //             },
    //             {
    //                 label: "Deep 2",
    //                 submenu: [
    //                     {
    //                         label: "Lorem 1",
    //                         href: "/",
    //                     },
    //                     {
    //                         label: "Lorem 2",
    //                         submenu: [
    //                             {
    //                                 label: "Super Deep",
    //                                 href: "/",
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         label: "Sub Menu 3",
    //         href: "/",
    //     },
    //     {
    //         label: "Sub Menu 4",
    //         submenu: [
    //             {
    //                 label: "Last 1",
    //                 href: "/",
    //             },
    //             {
    //                 label: "Last 2",
    //                 href: "/",
    //             },
    //             {
    //                 label: "Last 3",
    //                 href: "/",
    //             }
    //         ]
    //     }
    // ]
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
