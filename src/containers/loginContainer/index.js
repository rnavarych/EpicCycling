import React, { PureComponent } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import ClickableText from "../../components/text/clickableText";
import { theme } from "../../constants/theme";
import InformationText from "../../components/text/informationText";
import images from "../../configs/images";
import { strings } from "../../I18n";
import Button from "../../components/buttons/button";

class LoginScreen extends PureComponent {

  resend = () => {
    //todo resend action
  }

  editPhone = () => {
    //todo edit phone screen
  }

  registration = () => {
    //todo registration
  }

  registrationInformationComponent = () => (
    <View style={styles.informationContainer}>
      <InformationText
        style={styles.text}
        text={strings('descriptions.registrationFirstLabel')}
      />
      <InformationText
        style={[styles.text, styles.indentation]}
        text={strings('descriptions.registrationSecondLabel')}
      />
    </View>
  );

  phoneNumberComponent = (code, phone) => (
    <View style={styles.phoneContainer}>
      <Text style={styles.phoneText}>{code} {phone}</Text>
      <TouchableOpacity
        style={styles.clickArea}
        onPress={this.editPhone}
      >
        <Image style={styles.pencilIcon} source={images.pencil}/>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        {this.registrationInformationComponent()}
        {this.phoneNumberComponent('+375', '291035377')}
        <TextInput
          style={styles.codeInput}
          placeholder={strings('placeholders.code')}
          placeholderColor={theme.placeholder}
        />
        <Button
          style={styles.indentation}
          onPress={this.registration}
          label={strings('buttons.registration')}
        />
        <InformationText
          style={styles.text}
          text={strings('descriptions.resendSms')}
        />
        <ClickableText
          text={strings('buttons.resendSms')}
          onPress={this.resend}
        />
      </View>
    );
  }
}

export default LoginScreen