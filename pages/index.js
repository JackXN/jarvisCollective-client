import Head from 'next/head'
import Image from 'next/image'


// Page Components
import Homepage from '../components/containers/Home/index';
import Minifigs from '../components/containers/Minifigs/Minifigs';
// Components
import { Box, Text } from '@chakra-ui/react';

export default function Home() {
  <Head>

    {/* Bangers Font */}
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" rel="stylesheet"/>

{/* Anton Font */}
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"/>
  </Head>
  return (
    <Box sx={styles.container}>
<Homepage/>
<Minifigs/>
    
    </Box>
  )
}


const styles = {
  container: {

  }
}