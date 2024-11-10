import { Typography, Chip, Box } from "@mui/material";

import { useCounterContext } from "../../../hooks";

const CounterDescription = () => {
    const { data, isError } = useCounterContext();

    const counter = isError ? 0 : data ? data.collection.metadata.total_hits : 0,
        counterValue = counter ? counter : 0,
        counterColor = counterValue > 0 ? 'primary' : 'error';

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', m: '30px'}}>
            <Typography variant="h6">On your request were founded</Typography>
            <Chip sx={{m: '10px', fontWeight: 'bold'}} label={counterValue} color={counterColor}/>
            <Typography variant="h6">items</Typography>
        </Box>
    );
};

export default CounterDescription;
