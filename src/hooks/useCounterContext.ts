import { useContext } from 'react';
import CounterContext from '../screens/CounterScreen/subcomponents/CounterContext';

const useCounterContext = () => {
  return useContext(CounterContext);
};

export default useCounterContext;
