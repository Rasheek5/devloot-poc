import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './loader.styles';

interface props {
  show: boolean;
}

export const Loader = ({show}: props) => {
  if (!show) return <></>;
  return (
    <View style={styles.root}>
      <ActivityIndicator size={'large'} />
    </View>
  );
};
