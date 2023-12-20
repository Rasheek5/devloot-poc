import React, {useRef, useEffect} from 'react';
import {Video} from '../../packagesExports';
import {HOME_CARD_HEIGHT} from '../../helpers';
import {Dimensions} from 'react-native';
import {Loader} from '../loader';

interface VideoItemProps {
  uri: string;
  isInCenter: boolean;
}

export const VideoPlayerForCard: React.FC<VideoItemProps> = ({
  uri,
  isInCenter,
}) => {
  // @ts-ignore: Unreachable code error
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    if (isInCenter) {
      videoRef.current.setNativeProps({paused: false});
    } else {
      videoRef.current.setNativeProps({paused: true});
    }
  }, [isInCenter]);

  return (
    <Video
      ref={videoRef}
      source={{uri: uri}}
      style={{
        width: Dimensions.get('window').width - 70,
        height: HOME_CARD_HEIGHT - 100,
      }}
      resizeMode="contain"
      repeat={true}
      onBuffer={() => <Loader show={true} />}
    />
  );
};
