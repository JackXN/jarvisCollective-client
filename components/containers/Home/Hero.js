import React from 'react'
import {Box, Text} from '@chakra-ui/react';
import Image from 'next/image';


// Media
import SubText from '../../../public/SubText.png';
import Superman from '../../../public/HeroImg.png';
import LegoLogo from '../../../public/LegoLogo.png';


//Icons
import {FiArrowDown as DownArrow} from 'react-icons/fi';



// Components
import Links from './Links';

function Hero() {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.wrapper}>
        <Box sx={styles.leftContainer}>
        <Box sx={styles.heroImgContainer}>
        <Image src={Superman} height='500px' width='500px' alt='Superman' />
        </Box>
        </Box>
        <Box sx={styles.rightContainer}>
       
        <Box sx={styles.arrowContainer}>
            {/* <DownArrow/> */}
        </Box>
        </Box>
        <Links/>
        </Box>
        </Box>
    )
}


const styles = {
    container: {
        display: 'flex',
        flexDirection: ['column'],
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',

        h1: {
        fontSize: ['35px'],
        fontFamily: 'Bangers,sans-serif',
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
        mt: '15px',
        padding:['35px']
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
