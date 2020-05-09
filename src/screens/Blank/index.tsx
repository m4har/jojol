import React from 'react';
import {Header} from '../../components';
import {useRoute} from '@react-navigation/native';

export const Blank = () => {
  const {name} = useRoute();
  return (
    <>
      <Header title={name} />
    </>
  );
};
