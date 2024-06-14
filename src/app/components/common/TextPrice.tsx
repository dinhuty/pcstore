import { formatCurrency } from '@/utils/formatCurrency';
import { Stack, Typography } from '@mui/material';
import React from 'react';

const TextPrice = ({ originPrice, price }: { originPrice: number; price: number }) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <span className="text-[13px] text-red font-semibold">{formatCurrency(price)} VND</span>
      <span className="text-xs font-normal line-through">{formatCurrency(originPrice)} VND</span>
    </Stack>
  );
};

export default TextPrice;
