import firebase from "react-native-firebase";

export function iosNotificationsPermissions() {
  return firebase.messaging().hasPermission().then(permission => {
    if (!permission)
      firebase.messaging().requestPermission()
  })
}