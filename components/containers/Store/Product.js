import React, {useState, useEffect} from 'react'

// Componenets
import {Box, Text} from '@chakra-ui/react';
// Media
// import CelebCollection from '../public/CelebCollection.png';


// import {useLocation} from 'react-router-dom';
import { useDispatch } from "react-redux";







function Product({item}) {

    const id = location.pathname.split('/')[2];
    const [product,setProduct] = useState({});
    const [quantity, setQuantity] = useState(1)
    const [color,setColor] = useState('');
    const [size, setSize] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async () => {
          try {
            const res = await publicRequest.get("http://localhost:5000/api/collections/find/" + id);
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
        
      </Box>
     )
 }
 
 const styles = {
     container: {
         display: 'flex',
         alignItems:'center',
         justifyContent: 'center',
         textAlign: 'center',
         // margin:'20px',
         color: 'black',
         width: '450px',
        
         
     },
 

 }
 
 export default Product
 