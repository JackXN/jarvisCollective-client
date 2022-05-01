import React from 'react'

// Components
import {Box, Text} from '@chakra-ui/react';
import Image from 'next/image'


// Media
import TextLogo from '../../../public/CustomMinifigs.png'


export default function Header() {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.textContainer}>
       <Image src={TextLogo} alt='Custom Minifigs'/>
            </Box>
        </Box>
    )
}

const styles = {
    container: {
padding: ['20px']
    },
    textContainer: {
        color: 'white',
        background:'#2F2E2E',
        padding: '10px',
        borderRadius: '20px'

    }
}
