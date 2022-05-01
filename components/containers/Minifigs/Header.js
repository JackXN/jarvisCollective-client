import React from 'react'

// Components
import {Box, Text} from '@chakra-ui/react';
import Image from 'next/image'


// Media
import TextLogo from '../../../public/CustomMinifigs.png'


export default function Header() {
    return (
        <Box sx={styles.wrapper}>
        <Box sx={styles.container}>
            <Box sx={styles.textContainer}>
                <Box sx={styles.imgContainer}>
       <Image src={TextLogo} alt='Custom Minifigs'/>
       </Box>
            </Box>
        </Box>
        </Box>
    )
}

const styles = {
    wrapper: {
padding: ['25px']
    },
    container: {
padding: ['15px'],
background:'#2F2E2E',
borderRadius: '20px',
    },
    textContainer: {
        padding: '10px',
        borderRadius: '20px',
    },
   
}
