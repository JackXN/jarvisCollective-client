// import { Link } from "react-router-dom";
import Image from "@chakra-ui/image";


import Product from "../components/containers/Store/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, StylesProvider, Text } from "@chakra-ui/react";
import {AiFillHome as Home} from 'react-icons/ai';
import {useRouter} from 'next/router';
import { Router } from "react-router";
import {Link} from '@chakra-ui/react';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const Products = ({ cat, filters, sort }) => {
    
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `${BASE_URL}/api/collections?category=${cat}`
            : `${BASE_URL}/api/collections`
        );
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <>
      <Box sx={styles.container}>
<Box sx={styles.wrapper}>
<Box sx={styles.collectionsContainer}>
    <Box sx={styles.textContainer}>
        <Box>
<Text as='h1'ml='30px !important' margin='0' >Collections</Text>
</Box>
<Box sx={styles.iconContainer}><Link href='/'><Home/></Link></Box>
</Box>
<Box sx={styles.cardContainer}>
    <Box sx={styles.flexTest}>
{products.map((item) => <Product item={item} key={item.id} />)}
</Box>
</Box>
</Box>

</Box>
      </Box>
    </>
  );
};

const styles = {
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: '30px'
  },
  wrapper: {
    width: '100%',
    padding:'10px',
    fontFamily: 'Bangers,san-serif'
  },
  collectionsContainer: {
      textAlign: 'left',
      fontSize: ['40px'],
      display: 'flex',                                       
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%'
  },
  textContainer: {
      mb: ['30px']
  },
  cardContainer: {
     mt:'35px',
     display: 'flex'
  },
  flexTest: {
      display:"flex",
      alignItems:'center',
      justifyContent: 'center',
      flexWrap: 'wrap'
  },
  textContainer: {
      display:'flex',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center'
  },
  iconContainer: {
      position: ['relative'],
      left: ['70px', '290px'],
      fontSize: ['25px'],
      color: 'lightgray',
      transition: 'all 0.84s',

      '&:hover': {
          transition: '0.34s',
          cursor: 'pointer',
          color: 'orange'
      }

  }
};

export default Products;
