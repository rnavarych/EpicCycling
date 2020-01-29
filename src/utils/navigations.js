import NavigationDrawerStructure from "../components/drawer/navigatorDrawerStructure";
import LogoTitle from "../components/logoTitle";
import images from "../configs/images";
import { theme } from "../constants/theme";
import React from "react";

export const appStackNavigationOptions = ({navigation}) => ({
  headerLeft: () =>  <NavigationDrawerStructure navigationProps={ navigation }/>,
  headerTitle: () => <LogoTitle source={ images.logo }/>,
  headerStyle: {
    backgroundColor: theme.primary,
  },
  headerTintColor: theme.tintColor,
})

export const authStackNavigatorOptions = ({navigation}) => ({
  header: null
})