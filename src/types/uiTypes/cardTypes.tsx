import {FC, PropsWithChildren} from 'react';

import { functionsTypes } from '..';

export type Card = FC<PropsWithChildren<{
    onPress?: functionsTypes.TDefaultFunctionType
}>>