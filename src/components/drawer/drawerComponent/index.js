import React, {PureComponent} from 'react';
import { View, SafeAreaView, Image, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import images from "../../../configs/images";
import DrawerItems from "../drawerItem";
import { theme } from "../../../constants/theme";
import { strings } from '../../../I18n'
import { logOut } from "../../../utils/firebase/auth";
import { clearUser } from "../../../actions/registration";
import { connect } from "react-redux";
import AsyncStorage from '@react-native-community/async-storage';
import { USER_INFO } from "../../../constants/asyncStorage";

class CustomDrawerComponent extends PureComponent {

  navigateToProfile = () => {
    //todo
    // props.navigation.navigate()
  }

  logout = () => {
    AsyncStorage.removeItem(USER_INFO)
    logOut()
    this.props.clearUser()
  };

  profileItem = () => (
    <TouchableHighlight
      underlayColor={ theme.primaryUnderlay }
      onPress={ this.navigateToProfile }
    >
      <View style={ styles.profileItem }>
        <Image source={ images.profile } style={ styles.profileIcon }/>
        <View style={ styles.profileDescriptionContainer }>
          <Text style={ styles.profileUsernameLabel }>user name</Text>
          <View>
            <Text style={ styles.profileLabel }>some data</Text>
            <View style={ styles.underline }/>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  logoutItem = () => (
    <TouchableHighlight
      onPress={ this.logout }
      underlayColor={ theme.primary }
      style={ styles.touchableArea }>
      <Text style={ styles.logout }>{ strings('buttons.logout') }</Text>
    </TouchableHighlight>
  )

  render() {
    return (
      <SafeAreaView style={ styles.container }>
        { this.profileItem() }
        <View style={ styles.drawerContent }>
          <DrawerItems { ...this.props.props }/>
          { this.logoutItem() }
        </View>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = ({registration: {userInfo, user}}) => ({
  userInfo, user
});

const mapDispatchToProps = dispatch => ({
  clearUser: () => dispatch(clearUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawerComponent)