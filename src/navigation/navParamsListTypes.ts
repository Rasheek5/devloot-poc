import {NavigationProp} from '@react-navigation/native';
import {HOME, CONTENT_VIEWER} from './routesName';

export type MainStackParamList = {
  [HOME]: {};
  [CONTENT_VIEWER]: {
    videoUrl?: string | null;
    imageUrl?: string | null;
  };
};

export type MainStackNavigatorProps = NavigationProp<MainStackParamList>;
