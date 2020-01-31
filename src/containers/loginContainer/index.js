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
import { savePhoneNumber } from "../../actions/registration";
import { connect } from "react-redux";
import { EMPTY_STRING } from "../../constants/constants";
import { getThemeByValue, showSnackBar } from "../../utils/utils";
import { signInWithPhone } from "../../utils/firebase/auth";

class LoginScreen extends PureComponent {

  state = {
    underlineColor: theme.placeholder,
    codeValue: EMPTY_STRING,
    confirmation: false,
    pressRegistration: false,
    error: null
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.confirmation && !prevState.confirmation) {
      if (!!this.state.error) {
        showSnackBar(this.state.error);
      } else {
        showSnackBar(strings('notifications.sentMessage'));
      }
      this.setState({confirmation: false, error: null})
    }
  }

  editPhone = () => {
    this.props.navigation.navigate(routes.EDIT_PHONE_SCREEN)
  };

  registration = () => {
    try {
      this.confirmation.confirm(this.state.codeValue);
      this.setState({pressRegistration: true})
    } catch (e) {
      console.error(e);
      this.setState({pressRegistration: false})
    }
  };

  getCode = async () => {
    const {code, phone} = this.props;
    this.confirmation = await signInWithPhone(`${code}${phone}`)
      .catch(error=> this.setState({ error: error.message}))
    if (this.confirmation !== null) this.setState({confirmation: true})
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
      <View style={ styles.container }>
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
      </View>
    );
  }
}

const mapStateToProps = ({registration: {code, phone}}) => ({
  code,
  phone
});

const mapDispatchToProps = dispatch => ({
  savePhone: (code, phone) => dispatch(savePhoneNumber(code, phone))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)