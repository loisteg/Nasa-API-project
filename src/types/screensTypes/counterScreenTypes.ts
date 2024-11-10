import { Dispatch, SetStateAction } from 'react';

import { counterTypes } from '..';

export type CounterContextType = {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  isLoading: boolean;
  data: undefined | counterTypes.ServerResponse;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  isError: boolean;
};
