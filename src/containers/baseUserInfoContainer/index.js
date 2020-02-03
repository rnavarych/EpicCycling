import React, { PureComponent } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import UnderlineInput from "../../components/inputs/underlineInput";
import Button from "../../components/buttons/button";
import { strings } from "../../I18n";
import AsyncStorage from '@react-native-community/async-storage';
import { USER_INFO } from "../../constants/asyncStorage";
import { connect } from "react-redux";
import { saveUserInfo } from "../../actions/registration";

class BasicUserInformationScreen extends PureComponent {
  state = {
    username: '',
    email: ''
  };

  changeUsernameText = (text) => this.setState({username: text});

  changeEmailText = (text) => this.setState({email: text});

  saveBaseUserInfo = () => {
    const {username, email} = this.state;
    const user = {username, email};
    AsyncStorage.setItem(USER_INFO, JSON.stringify(user));
    this.props.saveUserInfo(user);
  }

  render() {
    return (
      <View style={ styles.container }>
        <ScrollView
          contentContainerStyle={ styles.scrollContent }
          scrollEnabled={ false }>
          <Text style={ styles.title }>{strings('descriptions.userInformation')}</Text>
          <UnderlineInput
            style={ styles.input }
            placeholder={ strings('placeholders.username') }
            onChangeText={ this.changeUsernameText }
            value={ this.state.username }
          />
          <UnderlineInput
            placeholder={ strings('placeholders.useremail') }
            style={ styles.input }
            onChangeText={ this.changeEmailText }
            value={ this.state.email }
          />
        </ScrollView>
        <Button
          onPress={ this.saveBaseUserInfo }
          label={ strings('buttons.updatePhone') }
        />
      </View>
    );
  }
}

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({
  saveUserInfo: (userInfo) => dispatch(saveUserInfo(userInfo))
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicUserInformationScreen)