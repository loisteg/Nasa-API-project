import { ImageList } from '@mui/material';
import { Loader } from '../../components/UI';
import { ApodImage } from './subcomponents';

import { useGetApods } from '../../hooks';

const ApodScreen = () => {
  const { data, isLoading } = useGetApods();

  if (!data && isLoading) return <Loader />;
  if (!data) return null;

  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {data.map((item) => (
        <ApodImage key={item.title} item={item}/>
      ))}
    </ImageList>
  )
};

export default ApodScreen;
