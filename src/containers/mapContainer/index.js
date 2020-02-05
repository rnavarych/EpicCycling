import React, { PureComponent } from 'react'
import { StyleSheet, View, Animated } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { connect } from 'react-redux'

import { getListOfStations } from '../../actions/stations'
import * as locations from '../../constants/locations'
import DefaultMarker from '../../components/map/marker/defaultMarker';
import { animationEvent, animationListener, getXFormIndex, pinOnScreen } from "../../utils/map";
import { ACTION_MARKER_PRESS } from "../../constants/constants";
import MapPointDescription from "../../components/map/mapPointDescription";
import styles from './styles'
import FloatingButton from "../../components/buttons/floatingButton";
import images from "../../configs/images";
import { theme } from '../../constants/theme';
import { strings } from "../../I18n";
import FloatingIcon from "../../components/buttons/floatingIcon";
import Geolocation from '@react-native-community/geolocation';
import * as routers from '../../constants/routes'

class MapContainer extends PureComponent {

  state = {
    selectedIndex: -1,
    selectPin: false,
    region: locations.sanFrancisco
  };

  componentDidMount() {
    this.props.getListOfStations()
    this.animation = new Animated.Value(0);
    this.animation.addListener(({value}) => animationListener(value, this.props.listOfStations, this.mapView));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedIndex !== -1 && prevState.selectedIndex !== this.state.selectedIndex) {
      this.state.selectPin && !prevState.selectPin
        ? this.scrollTimeout = setTimeout(() => this.scrollToIndex(), 500)
        : this.scrollToIndex()
    }
  }

  scrollToIndex = () => {
    this.scroll.getNode().scrollTo({
      x: getXFormIndex(this.state.selectedIndex),
      animated: true,
    });
  };

  componentWillUnmount() {
    this.animation.removeAllListeners();
    clearTimeout(this.scrollTimeout);
  }

  scanQRCode = () => this.props.navigation.navigate(routers.QR_CODE_SCANNER_SCREEN);

  getCurrentLocation = () => Geolocation.getCurrentPosition(position =>
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: locations.sanFrancisco.latitudeDelta,
          longitudeDelta: locations.sanFrancisco.longitudeDelta
        }
      })
  );

  showInfo = () => {
    //todo show info
  };

  tapOnMap = ({nativeEvent}) => nativeEvent.action !== ACTION_MARKER_PRESS && this.setState({selectPin: false});

  scrolledPinList = () => (
    <Animated.ScrollView
      ref={ scroll => this.scroll = scroll }
      horizontal
      scrollEventThrottle={ 1 }
      showsHorizontalScrollIndicator={ false }
      onScroll={ animationEvent(this.animation) }
      style={ styles.scrollView }
      contentContainerStyle={ styles.endPadding }
    >
      { this.props.listOfStations.map((station, index) =>
        <MapPointDescription
          key={ String(index) }
          station={ station }
        />) }
    </Animated.ScrollView>
  );

  scanQRButton = () => (
    <FloatingButton
      onPress={ this.scanQRCode }
      style={ styles.scanButton }
      icon={ images.scan }
      iconStyle={ {tintColor: theme.primaryText} }
      text={ strings('buttons.scanQrCode') }
    />
  );

  locationAndInformationButtons = () => {
    return <View style={ styles.floatingButtonContainer }>
      <FloatingIcon
        onPress={ this.getCurrentLocation }
        icon={ images.pin }
      />
      <FloatingIcon
        onPress={ this.showInfo }
        style={ styles.infoMargin }
        icon={ images.info }
        iconStyle={ styles.iconInfo }
      />
    </View>
  };

  render() {
    return (
      <View style={ styles.container }>
        <MapView
          region={ this.state.region }
          onPress={ this.tapOnMap }
          ref={ map => this.mapView = map }
          onRegionChangeComplete={ region => this.setState({region}) }
          style={ {...StyleSheet.absoluteFillObject} }
          provider={ PROVIDER_GOOGLE }
          initialRegion={ locations.sanFrancisco }
        >
          { this.props.listOfStations.map((station, index) => {
              if (pinOnScreen(station, this.state.region))
                return <DefaultMarker
                  key={ String(index) }
                  selectAction={ selectedIndex => this.setState({selectedIndex, selectPin: true}) }
                  index={ index }
                  station={ station }
                  navigation={ this.props.navigation }
                />
            }
          ) }
        </MapView>
        { this.state.selectPin
          ? this.scrolledPinList()
          : this.scanQRButton()
        }
        { this.locationAndInformationButtons() }
      </View>
    )
  }
}


const mapStateToProps = ({stations: {listOfStations}}) => ({
  listOfStations
});

const mapDispatchToProps = dispatch => ({
  getListOfStations: () => dispatch(getListOfStations())
});

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)