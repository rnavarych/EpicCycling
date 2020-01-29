import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import images from "../../configs/images";
import BorderButton from "../../components/buttons/borderButton";
import { strings } from '../../I18n';
import * as routes from '../../constants/routes'
import InformationText from "../../components/text/informationText";

class WelcomeScreen extends Component {

  navigateToRegisterScreen = () => this.props.navigation.navigate(routes.LOGIN_SCREEN);

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={images.logo} resizeMode={'contain'} />
        <InformationText
          style={styles.firstLabel}
          text={strings('descriptions.welcomeFirstLabel')}
        />
        <InformationText
          style={styles.secondLabel}
          text={strings('descriptions.welcomeSecondLabel')}
        />
        <BorderButton
          style={styles.buttonContainer}
          onPress={this.navigateToRegisterScreen}
          label={strings('buttons.welcomeButton')}
        />
      </View>
    );
  }
}

export default WelcomeScreen