import {FlatList} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import {Container, Loader} from '../../components';
import {HomeCard} from '../../customElements';
import {useTimeline} from '../../hooks';
import {observer} from 'mobx-react';

export const Home = observer(() => {
  const timeline = useMemo(() => useTimeline(), []);

  useEffect(() => {
    timeline.fetchTimelines();
  }, []);

  return (
    <Container>
      {timeline.loding ? (
        <Loader show={timeline.loding} />
      ) : (
        <FlatList
          removeClippedSubviews
          data={timeline.timelines}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({item}) => <HomeCard data={item} />}
          showsVerticalScrollIndicator={false}
          initialNumToRender={7}
        />
      )}
    </Container>
  );
});
