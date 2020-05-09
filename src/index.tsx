import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Root} from './routes';
import {enableAnimation} from 'utils/animation';
export default () => {
  useEffect(() => {
    enableAnimation();
  }, []);
  return <Root />;
};
