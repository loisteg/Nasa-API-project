import { TextField } from "@mui/material";

import { useCounterContext } from "../../../hooks";

const CounterInput = () => {
    const { inputValue, setInputValue } = useCounterContext();       

    return (
        <TextField
            label="What are you looking for?"
            variant="outlined"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            sx={{ width: '100%' }}
        />
    )
}

export default CounterInput;