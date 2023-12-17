import moment from 'moment';

export const formatDateDDMMYY = (date: string): string => {
  return moment(date).format('DD/MM/YYYY');
};
