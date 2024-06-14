'use client';
import { Stack } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';

const BtnBuy = () => {
  const onBuy = () => {
    alert('Hoàn thiện sau');
  };
  return (
    <button onClick={onBuy}>
      <Stack direction="row" alignItems="center">
        <ShoppingCartIcon sx={{ color: '#0074da', height: '20px' }} />
        <button className="text-[#2c6faa] font-medium text-sm">Mua ngay</button>
      </Stack>
    </button>
  );
};

export default BtnBuy;
