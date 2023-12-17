import React from 'react';
import {ImageStyle, StyleProp} from 'react-native';
import Image from 'react-native-image-progress';
import {colors} from '../../theme';

interface props {
  uri: string;
  style?: StyleProp<ImageStyle>;
  indicatorSize?: number;
}

export const FastImage = ({uri, style, indicatorSize}: props) => {
  return (
    <Image
      source={{uri: uri}}
      indicatorProps={{
        size: indicatorSize ?? 30,
        borderWidth: 0,
        color: colors.blue,
      }}
      resizeMode="contain"
      style={style}
    />
  );
};
