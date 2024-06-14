import { Divider, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const PcSite = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} alignItems={'center'}>
        <Stack justifyContent="center" sx={{ maxWidth: '600px' }}>
          <Typography
            sx={{ fontSize: '28px', fontWeight: '500', display: 'block', textAlign: 'center' }}
          >
            THI CÔNG DÀN NÉT
          </Typography>
          <Typography sx={{ display: 'block', textAlign: 'center', padding: '10px 80px' }}>
            Mang đến cho ace giải pháp kinh doanh NET hiệu quả, chuyên nghiệp. Thu mua dàn net thanh
            lý giá cao, Thi công dàn net giá rẻ
          </Typography>
        </Stack>
        <Image
          src={'/images/quannet.jpg'}
          width="1000"
          height="400"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt="banner"
        />
      </Stack>
      <Stack spacing={2} alignItems={'center'}>
        <Stack justifyContent="center">
          <Typography
            sx={{ fontSize: '28px', fontWeight: '500', display: 'block', textAlign: 'center' }}
          >
            TA GAMING CENTER
          </Typography>
          <Stack
            sx={{
              fontStyle: 'italic',
              maxWidth: '600px'
            }}
          >
            <Typography sx={{ display: 'block', textAlign: 'center', padding: '0px 80px' }}>
              Cơ sở 1 : 166 Ngõ 8 Lê Quang Đạo - Nam Từ Liêm
            </Typography>
            <Typography sx={{ display: 'block', textAlign: 'center', padding: '0px 80px' }}>
              Cơ sở 1 : 166 Yên Hoà - Cầu Giấy - Hà Nội
            </Typography>
          </Stack>
        </Stack>
        <Image
          src={'/images/csnet.jpg'}
          width="1000"
          height="400"
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          alt="banner"
        />
      </Stack>
      <Divider />
      <Stack direction="row" justifyContent="space-between" spacing={1}>
        <Image src={'/images/1.png'} width="50" height="40" alt="banner" />
        <Image src={'/images/3.png'} width="50" height="40" alt="banner" />
        <Image src={'/images/2.png'} width="50" height="40" alt="banner" />
        <Image src={'/images/4.png'} width="170" height="40" alt="banner" />
      </Stack>
    </Stack>
  );
};

export default PcSite;
