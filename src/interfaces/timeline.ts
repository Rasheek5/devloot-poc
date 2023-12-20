import {Instance} from 'mobx-state-tree';
import {ContentMetaModal, TimeLineStore, TimelineModal} from '../mobx';

export interface timeLineInterface extends Instance<typeof TimelineModal> {}

export interface contentMetaInterface extends Instance<typeof ContentMetaModal>{}

export interface timelineStoreInterface
  extends Instance<typeof TimeLineStore> {}
