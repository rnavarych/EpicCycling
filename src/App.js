import React from 'react'
import { Provider } from 'react-redux';

import { createRootNavigator } from './nav/RootNavigator'
import { configureStore } from './store'

const store = configureStore()

class App extends React.PureComponent {
  render() {
    const RootNavigator = createRootNavigator()

    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}

export default App;

