import React, {useRef, useEffect} from 'react';
import {Video} from '../../packagesExports';
import {HOME_CARD_HEIGHT} from '../../helpers';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Loader} from '../loader';

interface VideoItemProps {
  uri: string;
  isInCenter: boolean;
  onPress?: () => void;
}

export const VideoPlayerForCard: React.FC<VideoItemProps> = ({
  uri,
  isInCenter,
  onPress,
}) => {
  // @ts-ignore: Unreachable code error
  const videoRef = useRef<Video>(null);

  const videoHandler = (paused: boolean) => {
    videoRef.current.setNativeProps({paused});
  };

  useEffect(() => {
    if (isInCenter) {
      videoHandler(false);
    } else {
      videoHandler(true);
    }
  }, [isInCenter]);

  return (
    <TouchableOpacity
      onPress={() => {
        videoHandler(true);
        onPress && onPress();
      }}>
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
    </TouchableOpacity>
  );
};
