import moment from 'moment';
import {Dimensions} from 'react-native';

export const formatDateDDMMYY = (date: string): string => {
  return moment(date).format('DD/MM/YYYY');
};

export const HOME_CARD_HEIGHT = Dimensions.get('window').height - 150;

export const HOME_CARD_WIDTH = Dimensions.get('window').width - 200;
