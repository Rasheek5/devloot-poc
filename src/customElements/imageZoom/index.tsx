// @ts-nocheck because react-native-image-pan-zoom having issues with typescript config
import {Dimensions, ImageStyle, StyleProp} from 'react-native';
import React from 'react';
import {RnImageZoom} from '../../packagesExports';
import {FastImage} from '../../components';

interface props {
  imageUrl: string;
  imageStyle?: StyleProp<ImageStyle>;
  imageHeight?: number;
  imageWidth?: number;
}

export const ImageZoom = ({
  imageUrl,
  imageStyle,
  imageHeight,
  imageWidth,
}: props) => {
  const {width, height} = Dimensions.get('screen');

  return (
    <RnImageZoom
      cropWidth={imageWidth ?? width}
      cropHeight={imageHeight ?? height}
      imageHeight={imageHeight ?? height}
      imageWidth={imageWidth ?? width}
      minScale={0.6}
      maxScale={30}
      style={{flex: 1}}>
      <FastImage uri={imageUrl} style={imageStyle} />
    </RnImageZoom>
  );
};
