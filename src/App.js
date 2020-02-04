import React from 'react'
import { createRootNavigator } from './nav/rootNavigator'
import { iosNotificationsPermissions } from "./utils/permissons";
import { changeTokenListener, firebaseNotifications, getAndSaveFirebaseToken } from "./utils/firebase/messaging";
import { isLoggedin, onAuthStateChanged } from "./utils/firebase/auth";
import AsyncStorage from '@react-native-community/async-storage';
import { USER_INFO } from "./constants/asyncStorage";
import { connect } from "react-redux";
import { saveUser, saveUserInfo } from "./actions/registration";


class App extends React.Component {

  constructor() {
    super();
    this.notificationListener = firebaseNotifications();
    this.firebaseChangeTokenListener = () => {};
    this.isLoggedin = user => this.props.saveUser(user?._user);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !!this.props.user && !!this.props.userInfo !== !!nextProps.userInfo;
  }

  componentDidMount() {
    this.retrieveSavedData()
    iosNotificationsPermissions().then(permission => {
      if (permission) {
        getAndSaveFirebaseToken()
        this.firebaseChangeTokenListener = changeTokenListener()
      }
    });
    onAuthStateChanged(this.isLoggedin);
    isLoggedin(this.isLoggedin);
  }

  retrieveSavedData = async() => {
    let userInfo = await AsyncStorage.getItem(USER_INFO);
    if (!!userInfo) {
      this.props.saveUserInfo(JSON.parse(userInfo))
    }
  }

  componentWillUnmount() {
    this.notificationListener();
    this.firebaseChangeTokenListener();
  }

  render() {
    const RootNavigator = createRootNavigator(!!this.props.user && !!this.props.userInfo);
    return (
      <RootNavigator/>
    )
  }
}

const mapStateToProps = ({registration: {userInfo, user}}) => ({
  userInfo, user
});

const mapDispatchToProps = dispatch => ({
  saveUserInfo: (userInfo) => dispatch(saveUserInfo(userInfo)),
  saveUser: (user) => dispatch(saveUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

