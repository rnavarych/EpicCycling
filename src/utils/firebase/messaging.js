import firebase from "react-native-firebase";

export function firebaseNotifications() {
  return firebase.notifications().onNotification((notification) => {
    console.log(notification)
    const {title, body, notificationId} = notification;
    const localNotification = new firebase.notifications.Notification({
      sound: "default",
      show_in_foreground: true
    })
      .setNotificationId(notificationId)
      .setTitle(title)
      .setBody(body)
      .android.setChannelId('sharebike_chanel')
      .android.setSmallIcon('@mipmap/ic_launcher_foreground')
      .android.setColor("#000000")
      .android.setVibrate(500)
      .android.setPriority(firebase.notifications.Android.Priority.High);

    const channelId = new firebase.notifications.Android.Channel(
      'sharebike_chanel',
      'sharebike',
      firebase.notifications.Android.Importance.Max
    );
    firebase.notifications().android.createChannel(channelId);
    firebase.notifications()
      .displayNotification(localNotification)
      .catch(error => console.log(error))
  });
}

export function getAndSaveFirebaseToken() {
  firebase.messaging().getToken().then(saveFirebaseToken);
}

export function changeTokenListener() {
  return firebase.messaging().onTokenRefresh(saveFirebaseToken)
}

export function saveFirebaseToken(token) {
  //todo save token
  console.log(token)
}