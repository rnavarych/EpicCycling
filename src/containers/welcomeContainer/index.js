import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import images from "../../configs/images";
import BorderButton from "../../components/buttons/borderButton";
import { strings } from '../../I18n';
import * as routes from '../../constants/routes'
import InformationText from "../../components/text/informationText";

class WelcomeScreen extends Component {

  state = {
    splashScreenVisible: false
  }

  componentDidMount() {
    this.splashTimeout =  setTimeout(() => this.setState({splashScreenVisible: true}), 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.splashTimeout)
  }

  content = () => (
    <View style={ styles.content }>
      <Image style={ styles.logo } source={ images.logo } resizeMode={ 'contain' }/>
      <InformationText
        style={ styles.firstLabel }
        text={ strings('descriptions.welcomeFirstLabel') }
      />
      <InformationText
        style={ styles.secondLabel }
        text={ strings('descriptions.welcomeSecondLabel') }
      />
      <BorderButton
        style={ styles.buttonContainer }
        onPress={ this.navigateToRegisterScreen }
        label={ strings('buttons.welcomeButton') }
      />
    </View>
  );

  //todo fix splash screen in future
  splash = () => (
    <View style={ styles.splash }>
      <Image style={ styles.logo } source={ images.logo } resizeMode={ 'contain' }/>
    </View>
  )

  navigateToRegisterScreen = () => this.props.navigation.navigate(routes.LOGIN_SCREEN);

  render() {
    return (
      <View style={ styles.container }>
        { this.state.splashScreenVisible ? this.content() : this.splash() }
      </View>
    );
  }
}

export default WelcomeScreen