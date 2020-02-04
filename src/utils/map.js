import * as locations from "../constants/locations";
import { Animated } from "react-native";
import { CARD_WIDTH } from "../constants/constants";

let regionTimeout = setTimeout(() => {}, 100);
let currentIndex =  0;

export function animationListener(value, listOfStations, mapView) {
  let index = getIndexFromX(value); // animate 30% away from landing on the next item
  if (index >= listOfStations.length) {
    index = listOfStations.length - 1;
  }
  if (index <= 0) {
    index = 0;
  }

  clearTimeout(regionTimeout);
  regionTimeout = setTimeout(() => {
    if (currentIndex !== index) {
      currentIndex = index;
      const {latitude, longitude} = listOfStations[index];
      mapView.animateToRegion({
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          latitudeDelta: parseFloat(locations.sanFrancisco.latitudeDelta),
          longitudeDelta: parseFloat(locations.sanFrancisco.longitudeDelta),
        },
        350
      );
    }
  }, 100);
}

export function animationEvent(animation) {
  return Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: animation,
          },
        },
      },
    ],
    {useNativeDriver: true}
  )
}

function getIndexFromX(x) {
  return Math.round(x / CARD_WIDTH - 0.3)
}

export function getXFormIndex(index) {
  return Math.floor(index * CARD_WIDTH - 0.3)
}

export function pinOnScreen(pin, currentRegion) {
  let screen = {
    minX: currentRegion.longitude - currentRegion.longitudeDelta/2,
    minY: currentRegion.latitude - currentRegion.latitudeDelta/2,
    maxX: currentRegion.longitude + currentRegion.longitudeDelta/2,
    maxY: currentRegion.latitude + currentRegion.latitudeDelta/2
  };
  return pin.longitude > screen.minX && pin.longitude < screen.maxX
   && pin.latitude > screen.minY && pin.latitude < screen.maxY
}