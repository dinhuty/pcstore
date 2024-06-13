import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <Box>
      <Image
        src={'/images/banner1.png'}
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        alt="banner"
      />
    </Box>
  );
};

export default Banner;
