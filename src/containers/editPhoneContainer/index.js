import React, { PureComponent } from 'react';
import { View, Keyboard } from 'react-native';
import styles from './styles';
import UnderlineInput from "../../components/inputs/underlineInput";
import Button from "../../components/buttons/button";
import { connect } from "react-redux";
import { savePhoneNumber } from "../../actions/registration";
import { theme } from '../../constants/theme';
import { CODE_INPUT, PHONE_INPUT } from "../../constants/constants";
import { strings } from "../../I18n";

class EditPhoneScreen extends PureComponent {

  state = {
    code: this.props.code,
    phone: this.props.phone,
    keyboardVisible: false,
    codeUnderlineColor: theme.editingInput,
    phoneUnderlineColor: theme.editingInput
  };

  componentDidMount() {
    Keyboard.addListener('keyboardWillShow', () => this.setState({keyboardVisible: true}));
    Keyboard.addListener('keyboardDidHide', () => this.setState({keyboardVisible: false}));
    this.setState({
      codeUnderlineColor: this.underLineColor(this.props.code),
      phoneUnderlineColor: this.underLineColor(this.props.phone)
    })
  }

  async componentWillUnmount() {
    await Keyboard.removeListener('keyboardWillShow');
    await Keyboard.removeListener('keyboardDidHide');
  }

  underLineColor = (value, keyboardVisible = false) => {
    if (keyboardVisible) {
      return theme.editingInput;
    } else {
      return value === '' ? theme.placeholder : theme.filledInput
    }
  };

  changeFocus = (focusedInput) => {
    this.setState({
      codeUnderlineColor: focusedInput === CODE_INPUT ? theme.editingInput : this.underLineColor(this.state.code),
      phoneUnderlineColor: focusedInput === PHONE_INPUT ? theme.editingInput : this.underLineColor(this.state.phone),
    })
  };

  changeText = (text, input) => {
    switch (input) {
      case CODE_INPUT:
        this.setState({
          code: text,
          codeUnderlineColor: this.underLineColor(text, this.state.keyboardVisible)
        });
        break;
      case PHONE_INPUT:
        this.setState({
          phone: text,
          phoneUnderlineColor: this.underLineColor(text, this.state.keyboardVisible)
        });
        break;
    }
  };

  savePhone = () => {
    const {code, phone} = this.state;
    const {savePhone, navigation: {goBack}} = this.props;
    savePhone(code, phone)
    goBack()
  };

  render() {
    const {code, phone, codeUnderlineColor, phoneUnderlineColor} = this.state;
    return (
      <View style={ styles.container }>
        <View style={ styles.inputContainer }>
          <UnderlineInput
            style={ styles.codeInput }
            onFocus={ () => this.changeFocus(CODE_INPUT) }
            underlineColor={ codeUnderlineColor }
            value={ code }
            onChangeText={ text => this.changeText(text, CODE_INPUT) }
            keyboardType={ 'phone-pad' }
          />
          <UnderlineInput
            style={ styles.phoneInput }
            onFocus={ () => this.changeFocus(PHONE_INPUT) }
            underlineColor={ phoneUnderlineColor }
            value={ phone }
            onChangeText={ text => this.changeText(text, PHONE_INPUT) }
            keyboardType={ 'phone-pad' }
          />
        </View>
        <Button
          style={ styles.buttonStyle }
          onPress={ this.savePhone }
          label={ strings('buttons.updatePhone') }
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

export default connect(mapStateToProps, mapDispatchToProps)(EditPhoneScreen)