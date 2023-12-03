import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import BlogPic from '../../assets/blogPic.png';
import Image from 'next/image'

const Blogs = () => {
  return (
    <Container>
        <Grid container direction="column" spacing={2}>
            <Grid item xs={12} container alignItems="center" spacing={2}>
                <Typography variant='h3'>
                    Website
                </Typography>
                <Typography style={{marginTop: 15, marginLeft: 10}}>
                    Tips and tutorials on how to build better websites
                </Typography>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
                <Image height={400} src={BlogPic} alt='Blogs picture'/>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Blogs;
