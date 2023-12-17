import {Instance} from 'mobx-state-tree';
import {TimeLineStore, TimelineModal} from '../mobx';

export interface timeLineInterface extends Instance<typeof TimelineModal> {}

export interface timelineStoreInterface
  extends Instance<typeof TimeLineStore> {}
