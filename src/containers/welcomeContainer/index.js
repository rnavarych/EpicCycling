import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import images from "../../configs/images";
import BorderButton from "../../components/buttons/borderButton";
import { strings } from '../../I18n'

class WelcomeScreen extends Component {

  navigateToRegisterScreen = () => {
    //todo
    //this.props.navigation.navigate()
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={images.logo} resizeMode={'contain'} />
        <Text style={styles.firstLabel}>{strings('descriptions.welcomeFirstLabel')}</Text>
        <Text style={styles.secondLabel}>{strings('descriptions.welcomeSecondLabel')}</Text>
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