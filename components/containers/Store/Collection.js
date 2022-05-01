import React, {useState, useEffect} from 'react'

// Componenets
import {Box, Text, Fade, ScaleFade, Slide, SlideFade, useDisclosure} from '@chakra-ui/react';
// import Image from 'next/image';
import {Image} from '@chakra-ui/image'
// Media


// import {useLocation} from 'react-router-dom';
import { useDispatch } from "react-redux";
import Minifigs from './Minifigs';





function Collection({item}) {
    const { isOpen, onToggle } = useDisclosure();



    const id = location.pathname.split('/')[2];
    const [product,setProduct] = useState({});
    const [quantity, setQuantity] = useState(1)
    const [color,setColor] = useState('');
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    const BASE_URL = process.env.REACT_APP_API_BASE_URL;



    useEffect(() => {
        const getProduct = async () => {
          try {
            const res = await publicRequest.get(`${BASE_URL}/collections/find/` + id);
            setProduct(res.data);
            // console.log(res.data)
        } catch {}
        };
        getProduct();
      }, [id]);
    
      const handleQuantity = (type) => {
        if (type === "dec") {
          quantity > 1 && setQuantity(quantity - 1);
        } else {
          setQuantity(quantity + 1);
        }
      };
      const handleClick = () => {
        dispatch(
          addProduct({ ...product, quantity, color, size })
        );
      };
 
      return (
        <Box sx={styles.container}>
            <Box sx={styles.infoCard}>
        <Box sx={styles.imgContainer}>
            <Image src={item.img} height='100%' width='100%' alt='Celebs'/>
        </Box>
        <Box sx={styles.textContainer}>
            <Text as='h2'>Collection</Text>
            <Text as='h1'>{item.title}</Text>
        </Box>
        </Box>


      </Box>
      
     )
 }
 
 export const styles = {
     container: {
         display: 'flex',
         flexDirection: 'column',
         alignItems:'center',
         justifyContent: 'center',
         textAlign: 'center',
         color: 'black',    
         background: '#2B5C7B',
        borderBottom: '10px solid #2B5C7B',
        margin: '20px',
        border:'solid gray px',
        borderRadius: '20px',
        mb: ['90px'],
      
       
           
         
     },
     infoCard: {
       height: '100%',
       background:'white',
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
     }
     
 

 }
 
 export default Collection
 