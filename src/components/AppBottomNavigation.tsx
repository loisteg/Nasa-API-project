import { useState, useEffect } from 'react';

import {Paper, BottomNavigation, BottomNavigationAction} from '@mui/material';
import { Link } from 'react-router-dom';

import { routes, navigationButtons } from '../constants';

import {SyntheticEvent} from 'react';



const AppBottomNavigation  = () => {
  const [value, setValue] = useState(routes.NEOS.path),
    [showBottomNavigation, setShowBottomNavigation] = useState(true);

  const handleChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (window.location.pathname.includes(routes.NEO.pathName)) {
      setShowBottomNavigation(false);
    } else if (!showBottomNavigation) {
      setShowBottomNavigation(true);
    }
  }, [window.location.pathname]);

  if (!showBottomNavigation) return null;

  return (
    <Paper sx={{ display: {xs: 'auto', lg: 'none'}, position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}  
      >
        {navigationButtons.map(item => 
          <BottomNavigationAction
            key={item.to}
            component={Link}
            to={item.to}
            label={item.label}
            icon={<item.icon />}
            value={item.to}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
}

export default AppBottomNavigation;
