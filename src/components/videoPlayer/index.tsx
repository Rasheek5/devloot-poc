// @ts-nocheck because react-native-video-player having issues with typescript config
import React from 'react';
import {Dimensions} from 'react-native';
import RnVIdeo from 'react-native-video-player';

interface props {
  uri: string;
  videoWidth?: number;
  videoHeight?: number;
}

export const VideoPlayer = ({uri, videoHeight, videoWidth}: props) => {
  const {height, width} = Dimensions.get('window');

  return (
    <RnVIdeo
      video={{
        uri: uri,
      }}
      videoWidth={videoWidth ?? width}
      videoHeight={videoHeight ?? height - 100}
    />
  );
};
