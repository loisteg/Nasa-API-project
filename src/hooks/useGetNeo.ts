import { useGetNeoQuery } from '../redux/api/neoApi';

import { neoTypes } from '../types';

const useGetNeo = (id: string | undefined) => {
  return useGetNeoQuery(id ?? '');
};

export default useGetNeo;
