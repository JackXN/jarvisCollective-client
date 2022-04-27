import React from 'react'

// Components
import {Box, Text, Button} from '@chakra-ui/react';
import { m } from 'framer-motion';
import {Link} from '@chakra-ui/react';
import {AiOutlineShoppingCart as ShoppingCard, AiOutlineArrowRight as Arrow} from 'react-icons/ai'


function Links() {
    return (
        <Box sx={styles.container}>
            <Box sx={styles.buttonContainer}>
                <Box sx={styles.leftButton}>
                    <Arrow/>
                <Link href='/store' ml='6px'>Enter Site</Link>
                </Box>
                <Box sx={styles.rightButton}>
                    <ShoppingCard/>
                <Link href='/store' ml='6px'> Store</Link>
                </Box> 
            </Box>
        </Box>
    )
}

const styles = {
    container: {
width: '100%'
    },
    buttonContainer: {
        display: 'flex',
        fontFamily: 'Anton, sans-serif',
        color: '#fff',
        padding: ['20px'],
        pt: '0',
        pb:'20',

    },
    leftButton: {
        height: '50px',
        // background: '#7A0303',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#53A3D0',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        color: '#fff',
        mr: '5px',
        borderRadius: '10px'

    },
    rightButton: {
        height: '50px',
        borderRadius: '10px',
        ml: '5px',
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#C12525',
        
        
    }
}

export default Links
