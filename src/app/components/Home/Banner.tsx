import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <Box>
      <Image
        src={'/images/banner1.png'}
        width="1000"
        height="500"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        alt="banner"
      />
    </Box>
  );
};

export default Banner;
