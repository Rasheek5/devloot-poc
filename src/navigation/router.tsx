import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStack} from './mainStack';

export const Router = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};
