'use client';
import { Stack, keyframes } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import CallIcon from '@mui/icons-material/Call';

const trin = keyframes`
  from {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  20%, 32%, 44%, 56%, 68% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  23%, 35%, 47%, 59%, 71% {
    transform: rotate3d(0, 0, 1, 15deg);
  }
  26%, 38%, 50%, 62%, 74% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
  29%, 41%, 53%, 65%, 77% {
    transform: rotate3d(0, 0, 1, -15deg);
  }
  80% {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;

const ActionUser = () => {
  return (
    <Stack sx={{ position: 'fixed', right: '10px', bottom: '20px' }} spacing={1}>
      <Stack
        sx={{
          height: '50px',
          width: '50px',
          borderRadius: '50%',
          backgroundColor: '#278c56',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          animation: `${trin} 1.5s infinite linear`
        }}
      >
        <CallIcon sx={{ color: '#fff' }} />
      </Stack>
      <Stack
        sx={{
          height: '50px',
          width: '50px',
          borderRadius: '50%',
          backgroundColor: '#278c56',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          overflow: 'hidden'
        }}
      >
        <Image
          src={'/images/mess.jpeg'}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt="banner"
        />
      </Stack>
      <Stack
        sx={{
          height: '50px',
          width: '50px',
          borderRadius: '50%',
          backgroundColor: '#278c56',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          overflow: 'hidden'
        }}
      >
        <Image
          src={'/images/zalo.png'}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt="banner"
        />
      </Stack>
    </Stack>
  );
};

export default ActionUser;
