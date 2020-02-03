import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");
export const CARD_HEIGHT = height / 4;
export const CARD_WIDTH = CARD_HEIGHT - 50;

export const EMPTY_STRING = '';

export const CODE_INPUT = 'code';
export const PHONE_INPUT = 'phone';