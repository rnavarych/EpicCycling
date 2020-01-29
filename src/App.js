import React from 'react'
import { Provider } from 'react-redux';

import { createRootNavigator } from './nav/rootNavigator'
import { configureStore } from './store'
import AsyncStorage from '@react-native-community/async-storage';
import { FIRST_LAUNCH } from "./constants/asyncStorage";

const store = configureStore()

class App extends React.PureComponent {

  state = {
    firstLaunch: null
  }

  componentDidMount() {
    this.checkFirstLaunch()
  }

  checkFirstLaunch = () => {
    AsyncStorage.getItem(FIRST_LAUNCH).then(value => {
      if (value === null) {
        AsyncStorage.setItem(FIRST_LAUNCH, FIRST_LAUNCH);
        this.setState({firstLaunch: true});
      } else {
        this.setState({firstLaunch: false});
      }
    })
  };

  render() {
    if (this.state.firstLaunch === null) {
      return null
    }
    const RootNavigator = createRootNavigator(true)

    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}

export default App;

