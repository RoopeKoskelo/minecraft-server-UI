import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import {ThemeProvider} from '@mui/material';
import theme from'../theme'
import styled from '@emotion/styled';
import grassblock from '../img/GrassBlock.png';
import obsidian from '../img/Obsidian.png';
import commandblock from '../img/CommandBlock.jpg';

const drawerWidth = 240;
//Ei voi käyttää muuttujana FooterToolbaarissa, joten hardcoded siel

const FooterToolbar = styled(Toolbar)`
  background-color: #813E00;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 240px;
  text-align: center;
`;


export default function Sidebar() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        display: 'flex',
        '& .MuiDrawer-paper': {
          bgcolor: theme.palette.primary.header,
        },
      }}>
        <AppBar
          position="fixed"
          sx={{
            width: `240px`}}
        >
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <Typography variant='h1'>Server</Typography>
          </Toolbar>
          <Divider />
          <List>
              <ListItem disablePadding>
                <ListItemButton to="/">
                  <img src={grassblock} width={50}/><ListItemText sx={{ml: '20px'}}>Server</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="/Settings">
                  <img src={obsidian} width={50}/><ListItemText sx={{ml: '20px'}}>Options</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton to="/Console">
                  <img src={commandblock} width={50}/><ListItemText sx={{ml: '20px'}}>Console</ListItemText>
                </ListItemButton>
              </ListItem>
          </List>
          <FooterToolbar>
            <Typography variant='h1'></Typography>
          </FooterToolbar>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
}