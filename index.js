import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { configureStore } from "./src/store";
import { Provider } from "react-redux";
import React from "react";

const store = configureStore();

const AppContainer = () => (
  <Provider store={ store }>
    <App/>
  </Provider>
)

AppRegistry.registerComponent(appName, () => AppContainer);
