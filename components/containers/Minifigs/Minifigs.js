import React, {useEffect, useState} from 'react';

// Components
import {Box, Text} from '@chakra-ui/react';
import axios from 'axios';
import Header from './Header'

// import styles from '../Store/Collection';


const BASE_URL = 'http://localhost:5000';


function Minifigs() {
   
const [minifigs,setMinifigs] = useState([]);

useEffect(() => {
    const getMinifigs = async () => {
        try {
            const res = await axios.get(
                `${BASE_URL}/api/products`
            );
            setMinifigs(res.data)
        }catch(err) {}
    };
    getMinifigs();
},[])



    return (
    <>
    <Box sx={styles.wrapper}>
    <Header/>
          <Box sx={styles.container}>
          <Text>Minifigs</Text>
             {minifigs.map((item) => (
            <Box sx={styles.infoCard} key={item.title}>
               
        <Box sx={styles.imgContainer}>
            <img src={item.img} height='260px' width='260px' alt='Celebs'/>
        </Box>
        <Box sx={styles.textContainer}>
            <Text as='h2'>Collection</Text>
            <Text as='h1'>{item.title}</Text>
        </Box>
        </Box>

))}
      </Box>
      </Box>


</>
    )
}

export const styles = {

    container: {
        borderBottom: '10px solid #2B5C7B',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'

        
    },
  
    infoCard: {
      height: '100%',
      transition: '0.56s',
      cursor: 'pointer',
      "&:hover": {
       transform: 'translateY(-8px)',
       
       h2: {
           
           // fontSize: '25px',
           transition: '1s'
       },
       h1: {
           // fontSize:'30px',
           transition: '1s'
       },

   
       
      }
      
       
    },
    textContainer: {
        padding: '16px',
        color: 'black',
       

        h2: {
            color: '#F09E4B',
            fontSize: ['11px'],
            textAlign: 'left',
            
        },
           h1: {
               fontSize: ['18px'],
               textAlign:['left']
               
           }
    },
    blueBorder: {
        height: '10px',
        background:'black',
        border: 'none'
    },
    wrapper: {
        height: '150%',
        background: '#1F1E1E',
    }
    


}

export default Minifigs
