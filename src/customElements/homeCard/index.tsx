import {View, FlatList, TouchableOpacity} from 'react-native';
import React, {memo} from 'react';
import {timeLineInterface} from '../../interfaces';
import styles from './homeCard.styles';
import {formatDateDDMMYY} from '../../helpers';
import {FastImage, TextView, VideoPlayerForCard} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigatorProps} from '../../navigation';
import {InCenterConsumer} from '../../packagesExports';

interface props {
  data: timeLineInterface;
}

export const HomeCard = memo(({data}: props) => {
  const navigation = useNavigation<MainStackNavigatorProps>();

  const handleNavigation = (
    imageUrl?: string | null,
    videoUrl?: string | null,
  ) => {
    navigation.navigate('CONTENT_VIEWER', {
      imageUrl: imageUrl,
      videoUrl: videoUrl,
    });
  };

  const _renderHeader = () => {
    return (
      <View style={styles.headerView}>
        {data?.publishedAt && (
          <TextView style={styles.headerText}>
            Published At : {formatDateDDMMYY(data?.publishedAt)}
          </TextView>
        )}
      </View>
    );
  };

  const _renderImageData = () => {
    return (
      <FlatList
        removeClippedSubviews
        bounces={false}
        horizontal
        initialNumToRender={1}
        data={data?.contentMeta}
        keyExtractor={(_, i) => i?.toString()}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({item, index}) => {
          const isVideo = item?.type == 'VIDEO';

          if (isVideo) {
            return (
              <InCenterConsumer>
                {({isInCenter}: {isInCenter: any}) => {
                  return (
                    <VideoPlayerForCard
                      isInCenter={isInCenter}
                      uri={item?.fileId}
                      onPress={() => {
                        handleNavigation(null, item.fileId);
                      }}
                    />
                  );
                }}
              </InCenterConsumer>
            );
          }

          return (
            <TouchableOpacity
              style={styles.imageBtn}
              key={index}
              onPress={() => {
                handleNavigation(item.fileId, null);
              }}>
              {!isVideo && item?.fileId && (
                <FastImage uri={item?.fileId} style={styles.contentStyles} />
              )}
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const _renderFooter = () => {
    return (
      <View style={styles.footer}>
        <TextView style={styles.headerText}>
          Comments : {data.numOfComments ?? 0}
        </TextView>
        <TextView style={styles.headerText}>
          Likes : {data.numOfLikes ?? 0}
        </TextView>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      {_renderHeader()}
      {_renderImageData()}
      {_renderFooter()}
    </View>
  );
});
