import { Card as MuiCard, CardContent } from '@mui/material';

import { cardTypes } from '../../types';

const Card: cardTypes.Card = ({children, onPress}) => {
  return (
    <MuiCard variant="outlined" sx={{ position: 'relative', marginBottom: '10px' }} onClick={onPress} >
        <CardContent>
            {children}
        </CardContent>
    </MuiCard>
  );
};

export default Card;