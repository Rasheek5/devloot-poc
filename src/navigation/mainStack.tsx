import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CONTENT_VIEWER, HOME} from './routesName';
import {ContentViewer, Home} from '../screens';
import {MainStackParamList} from './navParamsListTypes';

const NativeStack = createNativeStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen name={HOME} component={Home} />
      <NativeStack.Screen
        name={CONTENT_VIEWER}
        component={ContentViewer}
        options={{headerShown: false}}
      />
    </NativeStack.Navigator>
  );
};
