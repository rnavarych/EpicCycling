import firebase from "react-native-firebase";

export function isLoggedin(listener) {
  listener(firebase.auth().currentUser)
}

export function logOut() {
  firebase.auth().signOut()
}

export function onAuthStateChanged(listener) {
  return firebase.auth().onAuthStateChanged(listener);
}

export function signInWithPhone(phoneNumber) {
  return firebase.auth().signInWithPhoneNumber(phoneNumber)
}

