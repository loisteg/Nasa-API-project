import { createContext } from 'react';

import { counterScreenTypes } from '../../../types';

const CounterContext = createContext<counterScreenTypes.CounterContextType>({
  inputValue: '',
  setInputValue: () => {},
  isLoading: false,
  data: undefined,
  page: 1,
  setPage: () => {},
  isError: false,
});

export default CounterContext;
