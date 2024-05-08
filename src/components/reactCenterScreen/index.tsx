import {FlatList, Dimensions, FlatListProps} from 'react-native';
import React, {useMemo} from 'react';
import {IndexProvider, OffsetYProvider} from '../../packagesExports';
import {TextView} from '../textView';

interface props {
  listItemHeight: number;
  centerYStart?: number;
  centerYEnd?: number;
  data: any[];
  renderItem(item: any, index?: number): React.ReactElement;
  flatListProps?: Partial<FlatListProps<any>>;
}

export const ReactCenterScreen = ({
  centerYEnd,
  data,
  listItemHeight,
  renderItem,
  centerYStart,
  flatListProps,
}: props) => {
  const {height: windowHeight} = Dimensions.get('screen');
  const flatList = useMemo(() => {
    return ({setOffsetY}: {setOffsetY: any}) => (
      <FlatList
        {...flatListProps}
        data={data}
        onScroll={ev => {
          setOffsetY(ev.nativeEvent.contentOffset.y);
        }}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item, index}) => (
          <IndexProvider index={index}>
            {() => renderItem(item, index)}
          </IndexProvider>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <TextView style={{textAlign: 'center', marginVertical: 10}}>
              No Data Found
            </TextView>
          );
        }}
      />
    );
  }, [centerYEnd]);
  return (
    <OffsetYProvider
      columnsPerRow={1}
      listItemHeight={listItemHeight}
      centerYStart={centerYStart ?? (windowHeight * 1) / 3}
      centerYEnd={centerYEnd ?? (windowHeight * 2) / 3}>
      {flatList}
    </OffsetYProvider>
  );
};
