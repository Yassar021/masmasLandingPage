import { Box, Flex, Text,Show, Stack,Center,SimpleGrid,Button,Container,Link, Image, HStack, Divider, VStack } from "@chakra-ui/react"

const Home = () => {
    return (
        <>
        <Box>
        <Container maxW='8xl'>
            {/* Navbar  */}
            <Box pt='44px' px={{lg:'20px',xl:'149px'}}>
                <Flex direction={'row'} justifyContent='space-between'>
                    <HStack spacing='20px'>
                        <Image src='/logo.png' w='40px' h='40px' alt='logo' />
                        <Text fontSize={'24px'} fontWeight={'700'} color='#373737'>Masmas</Text>
                    </HStack>
                    <Show above='md'>
                        <HStack spacing='63px'>
                            <Text fontSize={'15px'} fontWeight={'500'} color='#373737'>Home</Text>
                            <Text fontSize={'15px'} fontWeight={'500'} color='#373737'>Features</Text>
                            <Text fontSize={'15px'} fontWeight={'500'} color='#373737'>About Us</Text>
                        </HStack>
                    </Show>
                </Flex>
            </Box>
        
            <Box pt='116px' pl={{lg:'20px',xl:'149px'}}>
                {/* Hero */}
                <Flex direction={{base:'column',lg:'row'}} textAlign={{base:'center',lg:'left'}}>
                    <Box mx={{base:'auto',md:'auto',lg:'0px'}} w={{base:'240px',md:'632px'}}>
                        <Text fontSize={'63px'} fontWeight={'900'} color='#373737'>We Help to Build Your Dream</Text>
                        <Text fontSize={'22px'} fontWeight={'500'} color='#5B5B5B' lineHeight={'36px'}>
                            Probabo, inquit, sic agam, ut summum malum et, quantum possit, a sapiente delectus. At magnum periculum adiit in quo minus id, quod maxime placeat, facere nondum.
                        </Text>
                        <Button
                            mt='40px'
                            size='md'
                            height='64px'
                            width='201px'
                            bgColor={'#7273F1'}
                            borderRadius={'32px'}
                            color={'#fff'}
                            fontSize={'22px'}
                            fontWeight={'500'}
                            _hover={{ bg: '#7273F1' }}
                            _active={{
                            bg: '#7273F1',
                            transform: 'scale(0.98)',
                            borderColor: '#7273F1',
                            }}                        
                            >
                            Get Started
                        </Button>
                        <Text mt={{base:'20px',md:'110px'}} fontSize={'18px'} fontWeight={'500'} color='#5B5B5B' >
                            Save 20% - 30% of from traditional cost
                        </Text>
                    </Box>
                    <Box mt={{base:'60px',md:'0px'}}>
                        <Image src='/hero.png' w={{lg:'623px'}} h={{base:'auto',md:'auto',lg:'900px'}} alt='hero-image' />
                    </Box>
                </Flex>

                {/* meet people */}
                <Flex direction={{base:'column',md:'row'}} mt='101px' textAlign={{base:'center',md:'left'}}>
                    <Box w={{lg:'595px'}} my='auto' >
                        <Text fontSize={'41px'} lineHeight='62px' fontWeight={'700'} color='#373737'>Meet New People in Your Community</Text>
                        <Text mt='10px' fontSize={'22px'} lineHeight='40px' fontWeight={'500'} color='#5b5b5b'>Connect with people of Faith locally and around the globe. Find other like-minded believers, make new friends, form deeper relationship & partnership, socialize and do more.</Text>
                    </Box>
                    <Box mt={{base:'60px',md:'0px'}}>
                        <Image src='/meet.png' w={{lg:'623px'}} h={{lg:'auto',xl:'888px'}} alt='meet-people' />
                    </Box>
                </Flex>
            </Box>
            {/* Engage */}
            <Box pt='101px' bgColor={'#FAFAFA'}>
                <Flex direction={{base:'column-reverse',md:'row'}} mt='101px' textAlign={{base:'center',md:'left'}}>                    
                    <Box mt={{base:'60px',md:'0px'}}>
                        <Image src='/engage.png' w={{lg:'623px'}} h={{lg:'auto',xl:'888px'}} alt='meet-people' />
                    </Box>
                    <Box w={{lg:'595px'}} my='auto'>
                        <Text fontSize={'41px'} fontWeight={'700'} lineHeight='62px' color='#373737'>Engage with Your Masmas Community</Text>
                        <Text mt='10px' fontSize={'22px'} fontWeight={'500'} lineHeight='40px' color='#5b5b5b'>Connect with people of Faith locally and around the globe. Find other like-minded believers, make new friends, form deeper relationship & partnership, socialize and do more.</Text>
                    </Box>
                </Flex>
            </Box>

            {/* donations */}
            <Container maxW={'8xl'}>
                <Flex direction={{base:'column',md:'row'}} mt='101px' textAlign={{base:'center',md:'left'}}>
                    <Box w={{lg:'595px'}} my='auto' >
                        <Text fontSize={'41px'} lineHeight='62px' fontWeight={'700'} color='#373737'>Easy Donations to Your Church</Text>
                        <Text mt='10px' fontSize={'22px'} lineHeight='40px' fontWeight={'500'} color='#5b5b5b'>Its now so simple and seamless to give to your Church during service or whilst abroad. Donations take less than 10 secs. Simply review your past donations anytime, anywhere via the app. Masmas app also shows you the tax incentives you are entitled on your donations.</Text>
                    </Box>
                    <Box mt={{base:'60px',md:'0px'}}>
                        <Image src='/donation.png' w={{lg:'623px'}} h={{lg:'auto',xl:'888px'}} alt='meet-people' />
                    </Box>
                </Flex>
            </Container>

            {/* attend */}
            <Box pt='101px' bgColor={'#FAFAFA'}>
                <Flex direction={{base:'column-reverse',md:'row'}} mt='101px' textAlign={{base:'center',md:'left'}}>                    
                    <Box mt={{base:'60px',md:'0px'}}>
                        <Image src='/attend.png' w={{lg:'623px'}} h={{lg:'auto',xl:'888px'}} alt='meet-people' />
                    </Box>
                    <Box w={{lg:'595px'}} my='auto'>
                        <Text fontSize={'41px'} fontWeight={'700'} lineHeight='62px' color='#373737'>Attend Key Events You Care about</Text>
                        <Text mt='10px' fontSize={'22px'} fontWeight={'500'} lineHeight='40px' color='#5b5b5b'>Find and book key events around you. From concerts, to conferences and much more, easily discover your next experiences</Text>
                    </Box>
                </Flex>
            </Box>

            {/* download */}
            <Container maxW={'8xl'} textAlign='center' mt='101px' pb='123px'>
                <Flex>
                    <Stack direction={'column'}>
                        <Center mx={'auto'} w={{base:'auto',xl:'718px'}}>
                            <Text fontSize={'37px'} fontWeight={'700'} lineHeight='54px' color='#373737'>
                                Meet with like-minded people. Make new friends. Share moments that matter
                            </Text>
                        </Center>
                        <Box>
                            <Center>
                                <Image mt='60px' src='/download.png' maxW={{base:'278px',md:'557px'}} h={{lg:'auto',xl:'554px','2xl':'554px'}} alt='download' />
                            </Center>
                        </Box>
                        <Box>
                            <Text  mt='123px' fontSize={'22px'} fontWeight={'500'} color='#5B5B5B'>
                                Join & interact with likeminded believers in your community & around the world via the Masmas app. Available on iOS and Android.
                            </Text>
                        </Box>
                        <Center>
                            <Stack direction={{base:'column',md:'row'}} mt='74px' spacing={'22px'}>
                                <Link>
                                    <Image h='67px' w='100%' src='/app-store.png' alt='appstore' />
                                </Link>
                                <Link>
                                    <Image h='67px' w='100%' src='/google-play.png' alt='googleplay' />
                                </Link>
                            </Stack>
                        </Center>
                    </Stack>
                </Flex>
            </Container>

            {/* testimonials */}
            <Box pt='100px' pb='135px' px={{lg:'auto',xl:'160px'}} bgColor={'#FAFAFA'}>
                <Center textAlign={'center'}>
                    <Text fontSize={'37px'} fontWeight={'700'} color='#373737'>Members are loving Masmas</Text>
                </Center>
                <SimpleGrid mt='101px' columns={{md:2,lg:3}} spacing='58px' mx={{base:'auto'}}>
                    <Box py='22px' px='20px' w={{base:'290px',md:'331px'}} bgColor={'rgba(96, 114, 226, 0.128196)'} borderRadius='11px' shadow={'sm'}>
                        <Text fontSize={'16px'} fontWeight='500' color={'#37474F'} lineHeight='26px'>Vel eum dolor aut laudantium rerum quia eos et. Voluptas occaecati delectus eius. Nam aut temporibus dolorem quae et soluta. Necessitatibus voluptatem id atque veniam.</Text>
                        <HStack mt='58px' spacing={'22px'}>
                            <Image src='/profile.png' w='53px' h='53px' alt="profile" />
                            <Box>
                                <Text fontSize={'20px'} fontWeight='700' color='#37474F'>Benedikt Safiyulin</Text>
                                <Text fontSize={'16px'} fontWeight='500' color='#37474F'>Belfast</Text>
                            </Box>
                        </HStack>
                    </Box>
                    <Box py='22px' px='20px' w={{base:'290px',md:'331px'}} bgColor={'rgba(152, 43, 190, 0.128196)'} borderRadius='11px' shadow={'sm'}>
                        <Text fontSize={'16px'} fontWeight='500' color={'#37474F'} lineHeight='26px'>Vel eum dolor aut laudantium rerum quia eos et. Voluptas occaecati delectus eius. Nam aut temporibus dolorem quae et soluta. Necessitatibus voluptatem id atque veniam.</Text>
                        <HStack mt='58px' spacing={'22px'}>
                            <Image src='/profile.png' w='53px' h='53px' alt="profile" />
                            <Box>
                                <Text fontSize={'20px'} fontWeight='700' color='#37474F'>Benedikt Safiyulin</Text>
                                <Text fontSize={'16px'} fontWeight='500' color='#37474F'>Belfast</Text>
                            </Box>
                        </HStack>
                    </Box>
                    <Box py='22px' px='20px' w={{base:'290px',md:'331px'}} bgColor={'rgba(226, 98, 98, 0.128196)'} borderRadius='11px' shadow={'sm'}>
                        <Text fontSize={'16px'} fontWeight='500' color={'#37474F'} lineHeight='26px'>Vel eum dolor aut laudantium rerum quia eos et. Voluptas occaecati delectus eius. Nam aut temporibus dolorem quae et soluta. Necessitatibus voluptatem id atque veniam.</Text>
                        <HStack mt='58px' spacing={'22px'}>
                            <Image src='/profile.png' w='53px' h='53px' alt="profile" />
                            <Box>
                                <Text fontSize={'20px'} fontWeight='700' color='#37474F'>Benedikt Safiyulin</Text>
                                <Text fontSize={'16px'} fontWeight='500' color='#37474F'>Belfast</Text>
                            </Box>
                        </HStack>
                    </Box> 
                    <Box py='22px' px='20px' w={{base:'290px',md:'331px'}} bgColor={'rgba(70, 194, 125, 0.128196)'} borderRadius='11px' shadow={'sm'}>
                        <Text fontSize={'16px'} fontWeight='500' color={'#37474F'} lineHeight='26px'>Vel eum dolor aut laudantium rerum quia eos et. Voluptas occaecati delectus eius. Nam aut temporibus dolorem quae et soluta. Necessitatibus voluptatem id atque veniam.</Text>
                        <HStack mt='58px' spacing={'22px'}>
                            <Image src='/profile.png' w='53px' h='53px' alt="profile" />
                            <Box>
                                <Text fontSize={'20px'} fontWeight='700' color='#37474F'>Benedikt Safiyulin</Text>
                                <Text fontSize={'16px'} fontWeight='500' color='#37474F'>Belfast</Text>
                            </Box>
                        </HStack>
                    </Box> 
                    <Box py='22px' px='20px' w={{base:'290px',md:'331px'}} bgColor={'rgba(67, 77, 144, 0.128196)'} borderRadius='11px' shadow={'sm'}>
                        <Text fontSize={'16px'} fontWeight='500' color={'#37474F'} lineHeight='26px'>Vel eum dolor aut laudantium rerum quia eos et. Voluptas occaecati delectus eius. Nam aut temporibus dolorem quae et soluta. Necessitatibus voluptatem id atque veniam.</Text>
                        <HStack mt='58px' spacing={'22px'}>
                            <Image src='/profile.png' w='53px' h='53px' alt="profile" />
                            <Box>
                                <Text fontSize={'20px'} fontWeight='700' color='#37474F'>Benedikt Safiyulin</Text>
                                <Text fontSize={'16px'} fontWeight='500' color='#37474F'>Belfast</Text>
                            </Box>
                        </HStack>
                    </Box> 
                    <Box py='22px' px='20px' w={{base:'290px',md:'331px'}} bgColor={'rgba(231, 153, 65, 0.128196)'} borderRadius='11px' shadow={'sm'}>
                        <Text fontSize={'16px'} fontWeight='500' color={'#37474F'} lineHeight='26px'>Vel eum dolor aut laudantium rerum quia eos et. Voluptas occaecati delectus eius. Nam aut temporibus dolorem quae et soluta. Necessitatibus voluptatem id atque veniam.</Text>
                        <HStack mt='58px' spacing={'22px'}>
                            <Image src='/profile.png' w='53px' h='53px' alt="profile" />
                            <Box>
                                <Text fontSize={'20px'} fontWeight='700' color='#37474F'>Benedikt Safiyulin</Text>
                                <Text fontSize={'16px'} fontWeight='500' color='#37474F'>Belfast</Text>
                            </Box>
                        </HStack>
                    </Box>                    
                </SimpleGrid>
            </Box>
            
            {/* Footer */}
            <Flex pt='64px' direction={'column'} >
                <Stack direction='column' mx='auto' spacing='20px' textAlign={'center'}>
                    <Text fontSize={'23px'} fontWeight='500' color='#373737'>It’s Time</Text>
                    <Text fontSize={'37px'} fontWeight='700' color='#373737'>Start meeting amazing people of Masmas locally and globally</Text>
                    <Center>
                        <Stack direction={{base:'column',md:'row'}} mt='74px' spacing={'22px'}>
                                <Link>
                                    <Image h='67px' w='100%' src='/app-store.png' alt='appstore' />
                                </Link>
                                <Link>
                                    <Image h='67px' w='100%' src='/google-play.png' alt='googleplay' />
                                </Link>
                            </Stack>
                    </Center>
                </Stack>
                <Divider mt='123px' />
                <Flex direction={{base:'column',md:'column',xl:'row'}} mx={{base:'auto',md:'0px'}} px={{md:'20px',xl:'120px'}} pt={'54px'} textAlign={{base:'center', md:'center'}} justifyContent='space-between'>
                    <HStack mx={{md:'auto',lg:'0px'}} spacing='20px'>
                        <Image src='/logo.png' w='40px' h='40px' alt='logo' />
                        <Text fontSize={'24px'} fontWeight={'700'} color='#373737'>Masmas</Text>
                    </HStack>
                    <Stack mt={{base:'60px',md:'40px',lg:'0px'}} direction={{base:'column',md:'row'}} spacing={{base:'60px',md:'120px'}}>
                        <Box>
                            <Text fontSize={'25px'} fontWeight={'600'} color='#2F281E'>Quick Links</Text>
                            <VStack spacing='20px' mt='35px'>
                                <Link>
                                    <Text color='#544837' fontSize={'18px'}>About Us</Text>
                                </Link>
                                <Link>
                                    <Text color='#544837' fontSize={'18px'}>Blog</Text>
                                </Link>
                                <Link>
                                    <Text color='#544837' fontSize={'18px'}>Contact</Text>
                                </Link>
                                <Link>
                                    <Text color='#544837' fontSize={'18px'}>FAQ</Text>
                                </Link>
                            </VStack>                       
                        </Box>
                        <Box>
                            <Text fontSize={'25px'} fontWeight={'600'} color='#2F281E'>Legal Stuff</Text>
                            <VStack spacing='20px' mt='35px'>
                                    <Link>
                                        <Text color='#544837' fontSize={'18px'}>Disclaimer</Text>
                                    </Link>
                                    <Link>
                                        <Text color='#544837' fontSize={'18px'}>Terms of Service</Text>
                                    </Link>
                                    <Link>
                                        <Text color='#544837' fontSize={'18px'}>Financing</Text>
                                    </Link>
                                    <Link>
                                        <Text color='#544837' fontSize={'18px'}>Privacy Policy</Text>
                                    </Link>
                            </VStack>
                        </Box>
                        <Box>
                            <Text fontSize={'25px'} fontWeight={'600'} color='#2F281E'>Social</Text>
                            <VStack spacing='20px' mt='35px'>
                                    <Link>
                                        <HStack spacing='14px'>
                                            <Image src='/fb.png' w='10px' h='16px' alt='facebook' />
                                            <Text fontSize={'18px'} color='#544837'>Facbook</Text>
                                        </HStack>
                                    </Link>
                                    <Link>
                                        <HStack spacing='14px'>
                                            <Image src='/twitter.png' w='16px' h='14px' alt='twitter' />
                                            <Text fontSize={'18px'} color='#544837'>Twitter</Text>
                                        </HStack>
                                    </Link>
                                    <Link>
                                        <HStack spacing='14px'>
                                            <Image src='/ig.png' w='16px' h='16px' alt='instagram' />
                                            <Text fontSize={'18px'} color='#544837'>Instagram</Text>
                                        </HStack>
                                    </Link>
                            </VStack>
                        </Box>
                    </Stack>
                </Flex>
            </Flex>

        </Container>
        </Box>
    </>
    )
}

export default Home