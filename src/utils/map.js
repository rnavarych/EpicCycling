import * as locations from "../constants/locations";
import { Animated, Dimensions } from "react-native";
import { CARD_WIDTH } from "../constants/constants";

export function animationListener(value, listOfStations, mapView) {
    let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
    if (index >= listOfStations.length) {
      index = listOfStations.length - 1;
    }
    if (index <= 0) {
      index = 0;
    }

    clearTimeout(this.regionTimeout);
    this.regionTimeout = setTimeout(() => {
      if (this.index !== index) {
        this.index = index;
        const { latitude, longitude } = listOfStations[index];
        mapView.animateToRegion({
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            latitudeDelta: parseFloat(locations.sanFrancisco.latitudeDelta),
            longitudeDelta: parseFloat(locations.sanFrancisco.longitudeDelta),
          },
          350
        );
      }
    }, 10);
}

export function animationEvent(animation) {
  return  Animated.event(
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