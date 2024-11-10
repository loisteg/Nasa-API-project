import { useGetApodsQuery } from '../redux/api/apodApi';

const useGetApods = () => {
  const { data, isLoading, isError } = useGetApodsQuery();
  return { data, isLoading, isError };
};

export default useGetApods;
