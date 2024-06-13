import { IProduct } from '@/interfaces/product';
import { formatCurrency } from '@/utils/formatCurrency';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Card = ({ product }: { product: IProduct }) => {
  return (
    <Box
      sx={{
        boxShadow:
          'inset 1px 0px 0px #EDEDED, inset -1px 0px 0px #EDEDED, inset 0px 1px 0px #EDEDED, inset 0px -1px 0px #EDEDED',
        padding: '20px 10px',
        borderRadius: '8px'
      }}
    >
      <Stack>
        <Box>
          <Image
            src={product.thumbnail}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt="banner"
          />
        </Box>
        <Stack spacing={2}>
          <Typography
            sx={{
              lineHeight: '20px',
              fontWeight: 600
            }}
          >
            {product.name}
          </Typography>
          <Stack spacing={1}>
            <Typography
              sx={{
                color: '#6D6E72',
                lineHeight: '12px',
                textDecoration: 'line-through'
              }}
            >
              {formatCurrency(product.originPrice)} VND
            </Typography>
            <Typography
              sx={{
                color: '#E30019',
                lineHeight: '20px',
                fontWeight: 600
              }}
            >
              {formatCurrency(product.price)} VND
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Card;
