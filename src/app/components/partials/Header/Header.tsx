'use client';
import {
  Badge,
  BadgeProps,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  styled
} from '@mui/material';
import Image from 'next/image';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -1,
    top: 5,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: '0 1px'
  }
}));

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box className="h-16 flex items-center">
      <Container>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <div className="block sm:hidden">
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon
                sx={{
                  color: '#000'
                }}
              />
            </Button>
          </div>
          <Stack direction="row" alignItems="center" spacing={5}>
            <Box>
              <Image src="/images/logo.png" height={49} width={137} alt="logo" />
            </Box>
            <Box>
              <TextField size="small" id="outlined-basic" placeholder="Search..." />
            </Box>
          </Stack>
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Stack direction="row" justifyContent="center" spacing={2}></Stack>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  opacity: '0.8'
                }
              }}
            >
              <StyledBadge badgeContent={4} color="secondary">
                <ShoppingCartOutlinedIcon
                  sx={{
                    height: '15px'
                  }}
                />
              </StyledBadge>
              <p className="text-xs">Gio hang</p>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default Header;
