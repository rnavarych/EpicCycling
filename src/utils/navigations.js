import NavigationDrawerStructure from "../components/drawer/navigatorDrawerStructure";
import LogoTitle from "../components/header/logoTitle";
import images from "../configs/images";
import { theme } from "../constants/theme";
import React from "react";
import { strings } from "../I18n";
import HeaderRightButton from "../components/header/rightButton";

export const appStackNavigationOptions = ({navigation}) => ({
  headerLeft: () =>  <NavigationDrawerStructure navigationProps={ navigation }/>,
  headerTitle: () => <LogoTitle source={ images.logo }/>,
  headerStyle: {
    backgroundColor: theme.primary,
  },
  headerTintColor: theme.tintColor,
})

export const authStackNavigatorOptions = ({navigation}) => ({
  headerShown: false
})

export const loginScreenNavigationOptions = () => ({
  title: strings('screenTitles.sms'),
  headerBackTitleVisible: false,
  headerTintColor: theme.primaryText,
  headerStyle: {
    backgroundColor: theme.primary
  }
})

export const editPhoneOptions = ({navigation}) => ({
  title: 'Edit Phone',
  headerLeft: () => null,
  headerTintColor: theme.primaryText,
  headerRight: () => <HeaderRightButton onPress={() => navigation.goBack()} icon={images.close}/>,
  headerStyle: {
    backgroundColor: theme.primary
  }
})