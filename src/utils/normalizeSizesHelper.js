import { Dimensions, PixelRatio } from 'react-native';
import {
  SAMSUNG_A7_SCREEN_WIDTH,
  SAMSUNG_A7_SCREEN_HEIGHT,
} from '../constants/layout/sizes';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / SAMSUNG_A7_SCREEN_WIDTH;
const heightBaseScale = SCREEN_HEIGHT / SAMSUNG_A7_SCREEN_HEIGHT;

const normalize = (size, based = 'width') => {
  const baseScale = based === 'height' ? heightBaseScale : widthBaseScale;
  const newSize = size * baseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const widthPixel = size => {
  return normalize(size, 'width');
};

export const heightPixel = size => {
  return normalize(size, 'height');
};
