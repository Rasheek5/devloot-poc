import {timelineStoreInterface} from '../interfaces';
import {TimeLineStore} from '../mobx';

let _timeline: timelineStoreInterface;

export const useTimeline = () => {
  if (!_timeline) {
    _timeline = TimeLineStore.create({
      timelines: [],
    });
  }

  return _timeline;
};
