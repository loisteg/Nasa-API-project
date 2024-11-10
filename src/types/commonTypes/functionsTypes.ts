import {Dispatch, SetStateAction} from 'react';

export type TDefaultFunctionType = () => void;
export type TStateFunctionType<T> = Dispatch<SetStateAction<T>>;
export type TFunctionType<T = any> = T extends undefined
  ? TDefaultFunctionType
  : TStateFunctionType<T>;
