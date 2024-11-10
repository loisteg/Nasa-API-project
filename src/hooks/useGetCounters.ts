import { useState, useDeferredValue } from 'react';

import { useGetCountersQuery } from '../redux/api/counterApi';

const useGetCounters = () => {
  const [inputValue, setInputValue] = useState(''),
    [page, setPage] = useState(1),
    defferedValue = useDeferredValue(inputValue);

  const { data, isLoading, isError } = useGetCountersQuery({
    parameter: defferedValue,
    page,
  });

  return { data, isLoading, isError, page, inputValue, setInputValue, setPage };
};

export default useGetCounters;
