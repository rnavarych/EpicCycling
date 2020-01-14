import React from 'react'
import { createRootNavigator } from './nav/RootNavigator'

class App extends React.PureComponent {
  render() {
    const RootNavigator = createRootNavigator()

    return <RootNavigator />
  }
}

export default App;

