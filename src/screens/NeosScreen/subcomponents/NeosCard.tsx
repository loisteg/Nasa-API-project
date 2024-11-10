import { Typography, Chip } from "@mui/material";
import { Card } from "../../../components/UI";

import { neoScreenTypes } from "../../../types";

const NeosCard: neoScreenTypes.NeosCard = ({ info, onPress }) => {
  return (
    <Card onPress={onPress}>
       <Chip label={info.id}/>
       <Typography variant="h6" sx={{marginTop: '10px', marginBottom: '10px'}}>Name: {info.name}</Typography>
       <Typography sx={{marginBottom: '10px'}}>Absolute magnitude: {info.absolute_magnitude_h}</Typography>
       <Typography sx={{fontSize: '14px'}}>Estimated diameter: {info.estimated_diameter.kilometers.estimated_diameter_min} - {info.estimated_diameter.kilometers.estimated_diameter_max}</Typography>
    </Card>
  );
};

export default NeosCard; 