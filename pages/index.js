import Head from "next/head"
import Hero from "../components/Hero"
import Container from "@chakra-ui/react"

const Index = () => {
  return ( 
    <>
      <Head>
        <title>MasMas - Home</title>
      </Head>

      {/* <Container maxW='8xl'>
        
      </Container> */}

      <Hero />
    </>
  )
}

export default Index