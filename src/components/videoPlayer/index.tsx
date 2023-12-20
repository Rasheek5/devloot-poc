import React from 'react';
import {Dimensions} from 'react-native';
import {RnVideoPlayer} from '../../packagesExports';

interface props {
  uri: string;
  videoWidth?: number;
  videoHeight?: number;
}

export const VideoPlayer = ({uri, videoHeight, videoWidth}: props) => {
  const {height, width} = Dimensions.get('window');

  return (
    <RnVideoPlayer
      video={{
        uri: uri,
      }}
      videoWidth={videoWidth ?? width}
      videoHeight={videoHeight ?? height - 100}
    />
  );
};
