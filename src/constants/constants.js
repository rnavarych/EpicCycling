import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");
export const CARD_HEIGHT = height * 0.15;
export const CARD_WIDTH = width * 0.45;

export const ACTION_MARKER_PRESS = 'marker-press';

export const EMPTY_STRING = '';

export const CODE_INPUT = 'code';
export const PHONE_INPUT = 'phone';