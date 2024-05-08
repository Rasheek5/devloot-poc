import React, {useEffect, useMemo} from 'react';
import {Container, Loader, ReactCenterScreen, TextView} from '../../components';
import {HomeCard} from '../../customElements';
import {useTimeline} from '../../hooks';
import {observer} from 'mobx-react';
import {HOME_CARD_HEIGHT} from '../../helpers';

export const Home = observer(() => {
  const timeline = useTimeline();

  useEffect(() => {
    timeline.fetchTimelines();
  }, []);

  const _renderContent = () => {
    // The top and bottom margin values are 30.
    return (
      <ReactCenterScreen
        listItemHeight={HOME_CARD_HEIGHT + 30}
        data={timeline.timelines}
        renderItem={item => <HomeCard data={item} />}
        flatListProps={{
          removeClippedSubviews: true,
          initialNumToRender: 7,
        }}
      />
    );
  };

  return (
    <Container>
      {timeline.loding ? <Loader show={timeline.loding} /> : _renderContent()}
    </Container>
  );
});
