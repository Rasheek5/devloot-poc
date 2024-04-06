import {types} from 'mobx-state-tree';
import {fetchTimelineData} from '../api';

export const ContentMetaModal = types.model('ContentMetaModal', {
  type: types.optional(types.string, ''),
  contentType: types.optional(types.string, ''),
  fileId: types.optional(types.string, ''),
});

export const TimelineModal = types.model('TimelineModal', {
  numOfLikes: types.optional(types.number, 0),
  publishedAt: types.optional(types.string, ''),
  userId: types.optional(types.string, ''),
  textCaption: types.optional(types.string, ''),
  numOfComments: types.optional(types.number, 0),
  id: types.optional(types.string, ''),
  contentMeta: types.optional(types.array(ContentMetaModal), []),
});

export const TimeLineStore = types
  .model('TimeLineStore', {
    timelines: types.array(TimelineModal),
    loding: types.optional(types.boolean, false),
  })
  .actions(store => ({
    setTimelines(data: any) {
      store.timelines = data;
      store.loding = false;
    },
    async fetchTimelines() {
      store.loding = true;

      try {
        const res = await fetchTimelineData();
        this.setTimelines(res);
      } catch (err) {
        store.loding = false;
      }
    },
  }));
