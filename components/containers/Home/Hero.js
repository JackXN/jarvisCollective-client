import React from 'react'
import {Box, Text} from '@chakra-ui/react';
import Image from 'next/image';


// Media
import SubText from '../../../public/SubText.png';
import Superman from '../../../public/Superman.png';
import LegoLogo from '../../../public/LegoLogo.png';


//Icons
import {FiArrowDown as DownArrow} from 'react-icons/fi';

function Hero() {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.wrapper}>
        <Box sx={styles.leftContainer}>
<Text as='h1'>The Jarvis Collective</Text>
<Box sx={styles.subText}>
        <Text as='h3'>Custom</Text>
        <Image src={LegoLogo} height='25px' width='25px'/>
        <Text as='h3'>Minifigs</Text>
        </Box>
        </Box>
        <Box sx={styles.rightContainer}>
            <Box sx={styles.heroImgContainer}>
        <Image src={Superman} height='400px' width='250px' alt='Superman' />
        </Box>
        <Box sx={styles.arrowContainer}>
            <DownArrow/>
        </Box>
        </Box>
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
         textShadow: '1px 1px black',
         color: 'white',
         margin: ['15px'],
         mr: ['5px'],
         ml: ['5px'],
         mb: ['9px']
        }
    },
    wrapper: {
        mt: '50px',
        display: 'flex',
        flexDirection: ['column'],
        alignItems: 'center',
        justifyContent: 'center'
    },
    subText: {
        display: 'flex',
        justifyContent: 'center',
        h3: {
            pl: ['10px'],
            pr: ['10px'],
            fontFamily: 'Anton,sans-serif',
            color: '#ffff'
        }
    },
    heroImgContainer: {
        mt: '15px'
    },
    arrowContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'darkgray',
        fontSize: '23px',
        mt: '20px'
    }
   
}


export default Hero
