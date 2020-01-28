import React from 'react';
import { View, SafeAreaView, Image, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import images from "../../../configs/images";
import DrawerItems from "../drawerItem";
import { theme } from "../../../constants/theme";
import { strings } from '../../../I18n'

function CustomDrawerComponent({props}) {

  const navigateToProfile = () => {
    //todo
    // props.navigation.navigate()
  }

  const navigateToLogout = () => {
    //todo
    // props.navigation.navigate()
  }

  const profileItem = () => (
    <TouchableHighlight
      underlayColor={ theme.primaryUnderlay }
      onPress={navigateToProfile}
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

  const logoutItem = () => (
    <TouchableHighlight
      onPress={navigateToLogout}
      underlayColor={ theme.primary }
      style={styles.touchableArea}>
      <Text style={styles.logout}>{strings('buttons.logout')}</Text>
    </TouchableHighlight>
  )

  return (
    <SafeAreaView style={styles.container}>
      { profileItem() }
      <View style={styles.drawerContent}>
        <DrawerItems { ...props }/>
        { logoutItem() }
      </View>

    </SafeAreaView>
  )
}

export default CustomDrawerComponent;