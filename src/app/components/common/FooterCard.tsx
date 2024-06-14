import { Stack } from '@mui/material';
import React from 'react';

interface Props {
  iconLeft: any;
  leftText: string;
  iconRight?: any;
  rightText?: string;
}
const FooterCard = (props: Props) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row" alignItems="center">
        {props.iconLeft}
        <p className="text-success text-[13px] cursor-pointer">{props.leftText}</p>
      </Stack>
      <Stack direction="row" alignItems="center">
        {props.iconRight}
        <p className="text-[#0074da] text-[13px] cursor-pointer">{props.rightText}</p>
      </Stack>
    </Stack>
  );
};

export default FooterCard;
