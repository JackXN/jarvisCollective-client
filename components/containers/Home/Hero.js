import React from 'react'
import {Box, Text} from '@chakra-ui/react';
import Image from 'next/image';


// Media
import SubText from '../../../public/SubText.png';
import Superman from '../../../public/Superman.png';

function Hero() {
    return (
        <Box sx={styles.container}>
        <Box sx={styles.leftContainer}>
<Text as='h1'>The Jarvis Collective</Text>
<Image src={SubText} height='90px' padding='20px' alt='SubText'/>
        </Box>
        <Box sx={styles.rightContainer}>
        <Image src={Superman} height='400px' width='250px' alt='Superman'/>
        </Box>
        </Box>
    )
}


const styles = {
    container: {
        display: 'flex',
        flexDirection: ['column'],
        justifyContent: 'center',
        alignItems: 'center'
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',

        h1: {
        fontSize: ['35px'],
        fontFamily: 'Anton,sans-serif',
         textShadow: '3px 3px black',
         color: 'white'
        }
    }
}


export default Hero
