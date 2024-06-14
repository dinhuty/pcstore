import FooterCard from '@/app/components/common/FooterCard';
import TextPrice from '@/app/components/common/TextPrice';
import { IProduct } from '@/interfaces/product';
import { Box, Stack, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Image from 'next/image';
import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import BtnBuy from '@/app/components/common/BtnBuy';

const Card = ({ product }: { product: IProduct }) => {
  return (
    <Box
      sx={{
        boxShadow:
          'inset 1px 0px 0px #EDEDED, inset -1px 0px 0px #EDEDED, inset 0px 1px 0px #EDEDED, inset 0px -1px 0px #EDEDED',
        padding: '20px 10px 10px 10px',
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
        <Stack spacing={1}>
          <Typography
            sx={{
              lineHeight: '20px',
              fontWeight: 600,
              display: 'block',
              height: '40px',
              fontSize: '14px'
            }}
          >
            {product.name}
          </Typography>
          <Stack spacing={1}>
            <TextPrice originPrice={product.originPrice} price={product.price} />
          </Stack>
          <Stack spacing={2}>
            <Stack>
              <FooterCard
                leftText="Còn hàng"
                iconLeft={<CheckIcon sx={{ height: '15px', color: '#00a706' }} />}
                rightText="Gọi đặt ngay"
                iconRight={<CallIcon sx={{ height: '15px', color: '#0074da' }} />}
              />
            </Stack>
            <Stack>
              <BtnBuy />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Card;
