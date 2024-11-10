import {useDispatch} from 'react-redux';
import {storeTypes} from '../types';

const useAppDispatch = useDispatch.withTypes<storeTypes.AppDispatch>();

export default useAppDispatch;
