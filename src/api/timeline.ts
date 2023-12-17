import {timeLineInterface} from '../interfaces';
import {axiosInstance} from './axiosInstance';

export const fetchTimelineData = () => {
  return new Promise<timeLineInterface[]>(async (resolve, reject) => {
    const res = await axiosInstance.get('/timeline');
    const data = res.data?.message?.items;

    return data ? resolve(data) : reject(res);
  });
};
