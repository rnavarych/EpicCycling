import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

function LogoTitle({source}) {
  return (
    <Image
      style={styles.icon}
      resizeMode={ 'contain' }
      source={source}
    />
  )
}

export default LogoTitle;