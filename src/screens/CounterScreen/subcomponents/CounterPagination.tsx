import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { useCounterContext } from '../../../hooks';

import { ChangeEvent } from 'react';

const CounterPagination = () => {
    const { data, isError, setPage } = useCounterContext();

    if (isError) return null;
    if (!data || !data.collection.metadata.total_hits) return null;

    const totalPages = Math.floor(data.collection.metadata.total_hits / 20);

    const handleChange = (_: ChangeEvent<unknown>, value: number) => {
        setPage(value);
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <Stack spacing={2}>
            <Pagination count={totalPages} size="medium" onChange={handleChange}/>
        </Stack>
    );
};

export default CounterPagination;