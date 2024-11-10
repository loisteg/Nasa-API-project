import { FC } from 'react';
import { neoTypes, functionsTypes } from '..';

export type NeosCard = FC<{
  info: neoTypes.NearEarth;
  onPress: functionsTypes.TDefaultFunctionType;
}>;

export type NeoDescription = FC<{ info: neoTypes.NearEarth }>;

export type NeoTable = FC<{ info: neoTypes.NearEarth['close_approach_data'] }>;
