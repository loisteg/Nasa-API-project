import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import { routes, navigationButtons, assetsPathes } from '../constants';

const AppHeader = () => {

  const handleClick = (to: string) => {
    if (to === '/' && window.location.pathname !== '/') {
      window.location.href = to;
      return;
    }
    if (window.location.pathname.includes(to)) return;
    
    window.location.href = to;
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={routes.NEOS.path}>
            <Avatar alt="Remy Sharp" src={assetsPathes.NASA_LOGO_ROCKET} />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'none', lg: 'flex', marginLeft: '30px'} }}>
            {navigationButtons.map((button) => (
              <Button
                key={button.to}
                onClick={() => handleClick(button.to)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {button.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppHeader;