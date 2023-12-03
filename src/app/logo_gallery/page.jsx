import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import LogoPic from '../../assets/logoGallery.png';
import Image from 'next/image'

const Logo = () => {
  return (
    <Container>
      <Grid container spacing={2} direction="column">
        <Grid item xs={12}>
          <Typography variant='h4'>
            Find the perfect Logo for Dude
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Box style={{display: 'flex', alignItems : 'center', justifyContent: 'center'}}>
            <Image height={350} src={LogoPic} alt='Logo picture'/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Logo
