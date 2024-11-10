// An example of

import { useState, useEffect } from 'react';
import { useGetNeosQuery } from '../redux/api/neoApi';

import { neoTypes } from '../types';

const useGetNeos = () => {
  const [page, setPage] = useState(0),
    [list, setList] = useState<neoTypes.ServerResponse['near_earth_objects']>(
      []
    );

  const { data, isLoading } = useGetNeosQuery(page);
  const showLoadButton = data && page < data.page.total_pages;

  useEffect(() => {
    if (data && !page) setList(data.near_earth_objects);
    if (data && page)
      setList((previousState) => previousState.concat(data.near_earth_objects));
  }, [data]);

  return { data, list, isLoading, showLoadButton, setPage };
};

export default useGetNeos;
