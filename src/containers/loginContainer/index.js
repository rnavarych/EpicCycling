import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import ClickableText from "../../components/text/clickableText";
import { theme } from "../../constants/theme";
import InformationText from "../../components/text/informationText";
import images from "../../configs/images";
import { strings } from "../../I18n";
import Button from "../../components/buttons/button";
import UnderlineInput from "../../components/inputs/underlineInput";
import * as routes from '../../constants/routes'
import { savePhoneNumber, saveUser } from "../../actions/registration";
import { connect } from "react-redux";
import { EMPTY_STRING } from "../../constants/constants";
import { getThemeByValue, showSnackBar } from "../../utils/utils";
import { signInWithPhone } from "../../utils/firebase/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class LoginScreen extends PureComponent {

  state = {
    underlineColor: theme.placeholder,
    codeValue: EMPTY_STRING,
    confirmation: false,
    pressRegistration: false,
    error: null
  };

  componentDidUpdate(prevProps, prevState) {
    if (!!this.state.error && !!!prevState.error) {
      showSnackBar(this.state.error);
      this.setState({error: null})
    } else if (this.state.confirmation && !prevState.confirmation) {
      showSnackBar(strings('notifications.sentMessage'));
    }
  }

  editPhone = () => {
    this.props.navigation.navigate(routes.EDIT_PHONE_SCREEN)
  };

  registration = () => {
    this.setState({pressRegistration: true})
    this.confirmation.confirm(this.state.codeValue)
      .then(this.registrationSuccess)
      .catch(error => this.setState({ error: error.message, pressRegistration: false}))
  };

  registrationSuccess = () => {
    this.props.navigation.navigate(routes.BASIC_USER_INFO_SCREEN)
    this.setState({pressRegistration: false})
  }

  getCode = async () => {
    const {code, phone} = this.props;
    this.confirmation = await signInWithPhone(`${code}${phone}`)
      .catch(error=> this.setState({ confirmation: false, error: error.message}))
    if (this.confirmation !== undefined) this.setState({confirmation: true})
  };

  changeCode = (code) => {
    this.setState({
      codeValue: code,
      underlineColor: getThemeByValue(code)
    })
  };

  registrationInformationComponent = () => (
    <View style={ styles.informationContainer }>
      <InformationText
        style={ styles.text }
        text={ strings('descriptions.registrationFirstLabel') }
      />
      <InformationText
        style={ [styles.text, styles.indentation] }
        text={ strings('descriptions.registrationSecondLabel') }
      />
    </View>
  );

  phoneNumberComponent = (code, phone) => {
    const isEmptyPhoneOrCode = code === EMPTY_STRING && phone === EMPTY_STRING;
    const phoneNumber = isEmptyPhoneOrCode ? strings('descriptions.emptyPhone') : `${ code } ${ phone }`;
    return <View style={ styles.phoneContainer }>
      <Text style={ isEmptyPhoneOrCode ? styles.emptyPhoneText : styles.phoneText }>{ phoneNumber }</Text>
      <TouchableOpacity
        style={ styles.clickArea }
        onPress={ this.editPhone }
      >
        <Image style={ styles.pencilIcon } source={ images.pencil }/>
      </TouchableOpacity>
    </View>
  };

  render() {
    return (
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        contentContainerStyle={ styles.container }>
        { this.registrationInformationComponent() }
        { this.phoneNumberComponent(this.props.code, this.props.phone) }
        <UnderlineInput
          underlineColor={ this.state.underlineColor }
          placeholder={ strings('placeholders.code') }
          onChangeText={ this.changeCode }
        />
        <Button
          progressIndicator={ this.state.pressRegistration }
          style={ styles.indentation }
          onPress={ this.state.confirmation ? this.registration : this.getCode }
          label={ this.state.confirmation ? strings('buttons.registration') : strings('buttons.getCode') }
        />
        <InformationText
          style={ styles.text }
          text={ strings('descriptions.resendSms') }
        />
        <ClickableText
          text={ strings('buttons.resendSms') }
          onPress={ this.getCode }
        />
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = ({registration: {code, phone}}) => ({
  code,
  phone
});

const mapDispatchToProps = dispatch => ({
  savePhone: (code, phone) => dispatch(savePhoneNumber(code, phone)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)