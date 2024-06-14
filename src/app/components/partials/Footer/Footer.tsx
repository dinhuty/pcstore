import Heading from '@/app/components/common/Heading';
import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import PublicIcon from '@mui/icons-material/Public';
import BuildIcon from '@mui/icons-material/Build';

const Footer = () => {
  return (
    <Stack spacing={2}>
      <Heading title="LIÊN HỆ VỚI CHÚNG TÔI" />
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: '500'
        }}
      >
        TUẤN ANH COMPUTER
      </Typography>
      <Stack spacing={2}>
        <Stack spacing={1} direction="row">
          <HomeIcon />
          <Typography>Địa chỉ : 22A ngõ 1 Trần Quốc Hoàn, Cầu Giấy, Hà Nội</Typography>
        </Stack>
        <Stack spacing={1} direction="row">
          <CallIcon />
          <Typography>Hotline: 0387 475 071</Typography>
        </Stack>
        <Stack spacing={1} direction="row">
          <MailIcon />
          <Typography>Email: maytinh2xxx@gmail.com</Typography>
        </Stack>
        <Stack spacing={1} direction="row">
          <PublicIcon />
          <Typography>Website: http://duypcgaming.shop</Typography>
        </Stack>
      </Stack>
      <Divider />
      <Typography
        sx={{
          fontSize: '20px',
          fontWeight: '500'
        }}
      >
        DỊCH VỤ
      </Typography>
      <Stack spacing={2}>
        <Stack spacing={1} direction="row">
          <BuildIcon />
          <Typography>Lắp đặt tại nhà</Typography>
        </Stack>
        <Stack spacing={1} direction="row">
          <CallIcon />
          <Typography>Tư vấn 24/7</Typography>
        </Stack>
        <Stack spacing={1} direction="row">
          <HomeIcon />
          <Typography>Bảo hành tận nơi</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
