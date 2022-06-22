import { Box, Flex, Text,Show, Stack,Button,Container, Image, HStack } from "@chakra-ui/react"

const Hero = () => {
    return (
        <>
        <Container maxW='8xl'>
            {/* Navbar  */}
            <Box pt='44px' px={{lg:'20px',xl:'149px'}}>
                <Flex direction={'row'} justifyContent='space-between'>
                    <Image src='/logo.png' w='40px' h='40px' alt='logo' />
                    <Show above='md'>
                        <HStack spacing='63px'>
                            <Text fontSize={'15px'} fontWeight={'500'} color='#373737'>Home</Text>
                            <Text fontSize={'15px'} fontWeight={'500'} color='#373737'>Features</Text>
                            <Text fontSize={'15px'} fontWeight={'500'} color='#373737'>About Us</Text>
                        </HStack>
                    </Show>
                </Flex>
            </Box>

            {/* Hero */}
        
            <Box pt='116px' pl={{lg:'20px',xl:'149px'}}>
                <Flex direction={{base:'column',md:'row'}}>
                    <Box w={{base:'240px',md:'632px'}}>
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
                        <Text mt='110px' fontSize={'18px'} fontWeight={'500'} color='#5B5B5B' >
                            Save 20% - 30% of from traditional cost
                        </Text>
                    </Box>
                    <Box>
                        <Image src='/hero.png' w='100%' h='900px' alt='hero-image' />
                    </Box>
                </Flex>
            </Box>
        </Container>
    </>
    )
}

export default Hero