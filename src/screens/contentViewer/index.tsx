import React from 'react';
import {Container, VideoPlayer} from '../../components';
import {colors} from '../../theme';
import styles from './contentViewer.styles';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {MainStackParamList} from '../../navigation';
import {ImageZoom} from '../../customElements';
import {TouchableOpacity} from 'react-native';
import {CloseIcon} from '../../assets';

export const ContentViewer = () => {
  const {params} = useRoute<RouteProp<MainStackParamList, 'CONTENT_VIEWER'>>();
  const {imageUrl, videoUrl} = params;
  const navigation = useNavigation();

  const _renderVideo = () => {
    if (!videoUrl) return <></>;
    return <VideoPlayer uri={videoUrl} />;
  };

  const _renderImage = () => {
    if (!imageUrl) return <></>;
    return <ImageZoom imageUrl={imageUrl} imageStyle={styles.imageStles} />;
  };

  const _renderClose = () => {
    return (
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => {
          navigation.goBack();
        }}>
        <CloseIcon />
      </TouchableOpacity>
    );
  };

  return (
    <Container
      styles={styles.root}
      statusBarHidden={true}
      statusBarBg={colors.black}>
      {_renderClose()}
      {_renderImage()}
      {_renderVideo()}
    </Container>
  );
};
