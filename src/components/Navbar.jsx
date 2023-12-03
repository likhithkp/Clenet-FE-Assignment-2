"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import './styles/navbar.css'

const pages = ['About Us Template', 'Blogs', 'Logo Gallery'];
const links = ['./', './blogs', './logo_gallery'];

const Navbar = () => {

  return (
    <AppBar position='static' elevation={0} style={{ backgroundColor: 'white', marginLeft: 30, display: 'flex' }}>
      <Container maxWidth>
        <Toolbar disableGutters>
          {pages.map((item, index) => (
            <Typography
              key={item}
              variant='h6'
              sx={{
                mr: 2,
                fontWeight: 700,
                '&:hover': {
                  color: 'blue',
                },
              }}
            >
              <Link key={index} href={links[index]} style={{textDecoration:'none', activeClassName: 'active-link'}}>
                {item}
              </Link>
            </Typography>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
