import { Typography } from "@mui/material";

import { neoScreenTypes } from "../../../types";

const NeoDescription: neoScreenTypes.NeoDescription = ({ info }) => {
    const { is_potentially_hazardous_asteroid, name_limited, name, estimated_diameter, is_sentry_object, absolute_magnitude_h, designation } = info;

    return (
        <>
            <Typography variant="h2" sx={{fontWeight: 'bold'}}>{name_limited}</Typography>            
            <Typography>Full name: {name}</Typography>            
            <div style={{display: 'flex', gap: 10}}>
                <Typography>Potentially hazardous:</Typography>
                <Typography sx={{color: is_potentially_hazardous_asteroid ? 'red' : 'green'}}>
                    {is_potentially_hazardous_asteroid ? 'Yes' : 'No'}
                </Typography>
            </div>
            <Typography>Estimated diameter: {estimated_diameter.kilometers.estimated_diameter_min} - {estimated_diameter.kilometers.estimated_diameter_max} kilometers</Typography>        
            <Typography>Is sentry object: {is_sentry_object ? 'Yes' : 'No'}</Typography>        
            <Typography>Absolute magnitude: {absolute_magnitude_h}</Typography>        
            <Typography>Designation: {designation}</Typography>        
        </>
    )
}

export default NeoDescription;