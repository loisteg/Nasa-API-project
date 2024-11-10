import { Box, Chip } from "@mui/material";

import { blue } from "@mui/material/colors";

import { counterTypes } from "../../../types";

const CounterContentKeyWords = ({keywords}: {keywords: counterTypes.Data['keywords']}) => {
    if (!keywords || !keywords.length) return null;

    return <Box sx={{mt: 1}}>
        {keywords.map((keyword) => (
            <Chip key={keyword} label={'#' + keyword} sx={{bgcolor: blue[500], mr: 1, color: '#fff'}} />
        ))}
    </Box>;
};

export default CounterContentKeyWords;