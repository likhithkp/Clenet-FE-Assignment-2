"use client";
import React, { useContext, useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import { ThemeContext } from '../context/themeContext'; 

const OptionBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isSwitchOn, setSwitchState] = useState(false); // Add this line
  const buttonColor = isSwitchOn ? 'darkblue' : (theme === 'light' ? '#de5302' : 'darkblue'); 

  const handleSwitchChange = () => {
    toggleTheme();
    setSwitchState(!isSwitchOn); // Add this line
  }

  return (
    <Box style={{display : 'flex', justifyContent:'space-between', marginLeft: 50}}>
      <FormControlLabel control={<Switch checked={isSwitchOn} onChange={handleSwitchChange} />} label="High Contrast" />
      <Box style={{display : 'flex', justifyContent:'space-between', gap:20, justifyContent:'center', alignItems: 'center'}}>
          <Link href="#" variant="body2" style={{ textDecoration: 'none', fontSize: 13, color: 'black' }}>
            Log in
          </Link>
          <Button style={{backgroundColor: buttonColor, boxShadow: 'none', color:'white'}}>
            Start free or get a demo
          </Button>
      </Box>
    </Box>
  );
};

export default OptionBar;
