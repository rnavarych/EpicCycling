import React from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import styles from './styles';
import { theme } from "../../../constants/theme";

function DrawerItems(props = {}) {

  const pressAction = (item) => {
    item.navigation.isFocused() ? item.navigation.toggleDrawer() : item.navigation.navigate(item.key);
  };

  const renderItem = (label, icon, pressAction) => (
    <TouchableHighlight
      key={label}
      underlayColor={ theme.primaryUnderlay }
      onPress={ pressAction }>
      <View style={ styles.container }>
        <View style={ styles.itemContainer }>
          <Image
            style={ styles.icon }
            resizeMode={ 'contain' }
            source={ icon }/>
          <Text style={ styles.label }>{ label }</Text>
        </View>
        <View style={ styles.underline }/>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      { Object.values(props.descriptors).map(item =>
        renderItem(item.state.routeName, item.options.drawerIcon, () => pressAction(item))
      ) }
    </View>
  )
}

export default DrawerItems;