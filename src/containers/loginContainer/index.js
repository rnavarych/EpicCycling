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
import { getThemeByValue } from "../../utils/utils";

class LoginScreen extends PureComponent {

  state = {
    underlineColor: theme.placeholder,
    codeValue: EMPTY_STRING
  };

  resend = () => {
    //todo resend action
  };

  editPhone = () => {
    this.props.navigation.navigate(routes.EDIT_PHONE_SCREEN)
  };

  registration = () => {
    //todo registration
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
    const phoneNumber = code === EMPTY_STRING && phone === EMPTY_STRING ? strings('descriptions.emptyPhone') : `${ code } ${ phone }`;
    return <View style={ styles.phoneContainer }>
      <Text style={ styles.phoneText }>{ phoneNumber }</Text>
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
          style={ styles.indentation }
          onPress={ this.registration }
          label={ strings('buttons.registration') }
        />
        <InformationText
          style={ styles.text }
          text={ strings('descriptions.resendSms') }
        />
        <ClickableText
          text={ strings('buttons.resendSms') }
          onPress={ this.resend }
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