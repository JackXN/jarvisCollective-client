import { Link } from "react-router-dom";
import Image from "@chakra-ui/image";

import Product from "../components/containers/Store/Product";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, StylesProvider, Text } from "@chakra-ui/react";

const BASE_URL = "http://localhost:5000";

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
<Text as='h1'>Collections</Text>
{products.map((item) => <Product item={item} key={item.id}/>)}
</Box>
</Box>
      </Box>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: '30px'
  },
  wrapper: {
    height: '150px',
    width: '100%',
    background: 'orange',
    padding:'10px',
    fontFamily: 'Anton,san-serif'
  },
  collectionsContainer: {
      textAlign: 'left',
      fontSize: ['40px']
      
  }
};

export default Products;
