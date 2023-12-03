"use client";
import React, { useContext } from 'react';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import Hero from '../assets/Hero.png';
import Image from 'next/image'
import { ThemeContext } from '../context/themeContext'; 

const AboutUs = () => {
  const { theme } = useContext(ThemeContext);
  const buttonColor = theme === 'light' ? '#de5302' : 'darkblue';
  return (
    <Container>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12}>
          <Typography variant='h5'>
            27 Best About Us and About Me Page
            <Typography variant='h5'>
              Examples of 2023 [+Templates]
            </Typography>
          </Typography>
          <Button style={{backgroundColor: buttonColor, boxShadow: 'none', color:'white', marginTop: 10}}>
            Download now: Free About Us Examples
          </Button>
        </Grid>
        <Grid item xs={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20}}>
          <Box>
            <Typography>
              Your about page summarizes your history, values and missions - all in one place.
            </Typography>
            <Typography>
              Thats a tall order for just a few paragraphs. If you are feeling stuck, turn to these
            </Typography>
            <Typography>
              about-page examples for inspiration
            </Typography>
          </Box>
          <Image src={Hero} alt='Main picture'/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutUs;
