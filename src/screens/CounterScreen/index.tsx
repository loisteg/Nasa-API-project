import { Typography } from '@mui/material';
import { CounterInput, CounterDescription, CounterContent, CounterPagination } from './subcomponents';
import CounterContext from './subcomponents/CounterContext';

import { useGetCounters } from '../../hooks';

const CounterScreen = () => {
    const { data, isLoading, isError, page, inputValue, setInputValue, setPage } = useGetCounters();
  
    return (
        <CounterContext.Provider value={{ inputValue, setInputValue, data, isLoading, isError, page, setPage }}>
            <div>
                <Typography variant="h3" sx={{mb: '20px'}}>Image Library</Typography>
                <CounterInput />
                <CounterDescription />
                <CounterContent />
                <CounterPagination />
            </div>
        </CounterContext.Provider>
    );
};

export default CounterScreen;
