import React from 'react';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlayRounded';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

import './Footer.css';
const Footer = () => {
    return (  
        <div className='Footer'>
            <div className='footer_left'>
            <img
            className="footer__albumLogo"
            src='https://gizmostory.com/wp-content/uploads/2021/05/Harry-Styles.jpg'
            alt='img'/>
          <div className="footer__songInfo">
            <h4>watermelon</h4>
            <p>Harry Styles</p>
          </div>
       
            </div>
            <div className='footer_center'>
              <ShuffleOutlinedIcon className='footer_green'/>
              <SkipPreviousRoundedIcon className='footer_Icon'/>
              <PlayCircleFilledRoundedIcon fontSize='large' className='footer_Icon'/>
              <SkipNextRoundedIcon className='footer_Icon'/>
              <LoopRoundedIcon className='footer_green'/>
            </div>
            <div className="footer__right">
            <PlaylistPlayIcon fontSize='large' className='footer_Icon'/>
            <Box sx={{ width: 250 }}>
            <Stack spacing={2} direction="row" alignItems="center">
            <VolumeDown />
            <Slider aria-label="Volume" />
            <VolumeUp />
            </Stack>
            </Box>
           </div>
       </div>
    );
}
 
export default Footer;
