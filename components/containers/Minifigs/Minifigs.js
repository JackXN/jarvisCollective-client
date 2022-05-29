import React, { useEffect, useState } from "react";

// Components
import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
import Header from "./Header";
// import Image from 'next/image'
import { Image } from "@chakra-ui/react";
// import { styles } from '../Store/Collection';
// import styles from '../Store/Collection';
import Background from '../../../public/backgroundTest.png'
const BASE_URL = "http://localhost:5000";

function Minifigs() {
  const [minifigs, setMinifigs] = useState([]);

  useEffect(() => {
    const getMinifigs = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/products`);
        setMinifigs(res.data);
      } catch (err) {}
    };
    getMinifigs();
  }, []);

  return (
    <>
      <Box sx={styles.wrapper}>
        <Header />
        <Box sx={styles.container}>
          {minifigs.map((item) => (
            <Box sx={styles.infoCard} key={item.title}>
              <Box sx={styles.imgContainer}>
                <Image src={item.img} alt="Celebs" sx={styles.imgStyles} />
              </Box>
              <Box sx={styles.textContainer}>
                <Text as="h3" border='solid red 1px'>Limited</Text>
                <Text as="h1"  color='black'>{item.title}</Text>
                <Text as='h2' background='#2F2E2E' width='50px' alignSelf='center'>{item.price}$</Text>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export const styles = {
  container: {
    borderBottom: "10px solid #2B5C7B",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  detailContainer: {

  },

  infoCard: {
    height: "100%",
    transition: "0.56s",
    // background: '#2F2E2E',
    backgroundImage: 'url(/backgroundTest.png)',
    padding: ['20px'],
    borderRadius: '20px',
    cursor: "pointer",
    margin: ['50px'],
    "&:hover": {
      transform: "translateY(-8px)",

      h2: {
        // fontSize: '25px',
        transition: "1s",
      },
      h1: {
        // fontSize:'30px',
        transition: "1s",
      },
    },
  },
  textContainer: {
    padding: "16px",
    color: "white",
    fontFamily: 'Bangers,san-serif',
    display: 'flex',
    flexDirection: 'column',
    
    textAlign: 'center',
    


    h2: {
      fontSize: ["11px"],
      textAlign: "center",
      background: '#8B8080',
      fontSize: ['15PX']
    },
    h1: {
      fontSize: ["18px"],
      textAlign: ["left"],
      background: 'white',
      textAlign:'center',
      boxShadow: '10px 10px 10px 10px black'
    },
    h3: {
        alignSelf: 'left',
        width:['50px'],
        padding: '2px',
        position: ['relative'],
        right: '25px',
        background: '#FCBB2E',
        border: 'none',
    
    }
  },
  blueBorder: {
    height: "10px",
    background: "black",
    border: "none",
  },
  wrapper: {
    height: "150%",
    background: "#1F1E1E",
  },
  imgStyles: {
    width: "200px",
    height: "100%",
  },
};

export default Minifigs;
