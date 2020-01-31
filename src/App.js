import React from 'react'
import { createRootNavigator } from './nav/rootNavigator'
import { iosNotificationsPermissions } from "./utils/permissons";
import { changeTokenListener, firebaseNotifications, getAndSaveFirebaseToken } from "./utils/firebase/messaging";
import { isLoggedin, onAuthStateChanged } from "./utils/firebase/auth";


class App extends React.Component {

  constructor() {
    super();
    this.notificationListener = firebaseNotifications();
    this.firebaseChangeTokenListener = () => {
    };
    this.isLoggedin = user => this.setState({user});
  }

  state = {
    user: null
  };

  shouldComponentUpdate(nextProps, nextState) {
    return !!this.state.user !== !!nextState.user;
  }

  componentDidMount() {
    iosNotificationsPermissions().then(permission => {
      if (permission) {
        getAndSaveFirebaseToken()
        this.firebaseChangeTokenListener = changeTokenListener()
      }
    });
    onAuthStateChanged(this.isLoggedin);
    isLoggedin(this.isLoggedin);
  }

  componentWillUnmount() {
    this.notificationListener();
    this.firebaseChangeTokenListener();
  }

  render() {
    const RootNavigator = createRootNavigator(!!this.state.user);

    return (
      <RootNavigator/>
    )
  }
}

export default App

