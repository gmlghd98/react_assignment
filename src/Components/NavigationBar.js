import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const NavigationBar = ({ onMenuClick }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          KIT Storage
        </Typography>
        <InputBase
          value={searchText}
          onChange={handleSearchChange}
          sx={{
            ml: 1,
            backgroundColor: 'white',
            borderRadius: 2,
            border: '1px solid #ccc', // 윤곽선 추가
          }}
          startAdornment={<SearchIcon />}
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
