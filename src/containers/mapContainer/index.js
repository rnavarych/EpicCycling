import React, { PureComponent } from 'react'
import { StyleSheet, View, Image, Animated, Dimensions, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { connect } from 'react-redux'

import { getListOfStations } from '../../actions/stations'
import * as locations from '../../constants/locations'
import DefaultMarker from '../../components/marker/defaultMarker';
import { animationEvent, animationListener } from "../../utils/map";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

class MapContainer extends PureComponent {

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    this.props.getListOfStations()
    this.animation.addListener(({ value }) => animationListener(value, this.props.listOfStations, this.map));
  }

  render() {
    return (
      <View style={ styles.container }>
        <MapView
          ref={map => this.map = map}
          style={ {...StyleSheet.absoluteFillObject} }
          provider={ PROVIDER_GOOGLE }
          initialRegion={ locations.sanFrancisco }
        >
          { this.props.listOfStations.map((station, index) =>
            <DefaultMarker
              key={ String(index) }
              station={ station }
              navigation={ this.props.navigation }
            />
          ) }
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={ 1 }
          showsHorizontalScrollIndicator={ false }
          snapToInterval={ CARD_WIDTH }
          onScroll={ animationEvent(this.animation) }
          style={ styles.scrollView }
          contentContainerStyle={ styles.endPadding }
        >
          { this.props.listOfStations.map((station, index) => (
              <View style={ styles.card } key={ index }>
                <Image
                  source={ { uri: "https://i.imgur.com/sNam9iJ.jpg" } }
                  style={ styles.cardImage }
                  resizeMode="cover"
                />
                <View style={ styles.textContent }>
                  <Text numberOfLines={ 1 } style={ styles.cardtitle }>{ station.the_geom.type }</Text>
                  <Text numberOfLines={ 1 } style={ styles.cardDescription }>
                    { station.map_label }
                  </Text>
                </View>
              </View>
            )) }
        </Animated.ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});

const mapStateToProps = ({
                           stations: {
                             listOfStations
                           }
                         }) => ({
  listOfStations
});

const mapDispatchToProps = dispatch => ({
  getListOfStations: () => dispatch(getListOfStations())
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)