import React from 'react'

// Media
import Image from 'next/image';
import Logo from '../../../public/TextLogo.png'
//Components
import {Box, Text} from '@chakra-ui/react';
import Hero from './Hero';


function index() {
    return (
       <Box sx={styles.container}>
           <Box sx={styles.topBar}>
               <Image src={Logo} height='100%' width='90px' alt='The Jarvis Collective'/>
           </Box>
<Hero/>
       </Box>
    )
}

const styles = {
    container: {
        height: '100%',
        backgroundImage: 'url(/HomeBg.png)',
        //  backgroundImage: 'url(/backgroundTwo.png)',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
         backgroundAttachment: 'fixed',
         backgroundSize: 'cover'
    },
    topBar: {
        display: ['none']
    }
}

export default index


