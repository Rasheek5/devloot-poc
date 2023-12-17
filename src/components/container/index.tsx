import {
  View,
  SafeAreaView,
  StatusBar,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import styleSheet from './container.styes';

interface IContainerProps {
  children: React.ReactNode;
  styles?: StyleProp<ViewStyle>;
  statusBarHidden?: boolean;
  statusBarBg?: string;
}

export const Container = ({
  children,
  styles,
  statusBarHidden,
  statusBarBg,
}: IContainerProps) => {
  const _renderChildren = () => {
    return <View style={[styleSheet.rootView, styles]}>{children}</View>;
  };

  return (
    <>
      <SafeAreaView style={[styleSheet.rootView, styles]}>
        <StatusBar
          backgroundColor={statusBarBg ?? 'white'}
          barStyle={'dark-content'}
          showHideTransition={'fade'}
          hidden={statusBarHidden ?? false}
        />
        {_renderChildren()}
      </SafeAreaView>
    </>
  );
};
