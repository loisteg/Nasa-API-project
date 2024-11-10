import {useSelector} from 'react-redux';
import {storeTypes} from '../types';

const useAppSelector = useSelector.withTypes<storeTypes.RootState>();

export default useAppSelector;
