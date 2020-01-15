import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
    borderRadius: 10, 
    elevation: 5, 
    width: '100%', 
    height: 80, 
    shadowOffset: { width: 0, height: 7 },
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOpacity: 0.07,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  textInfoContainer: {
    flex: 1
  },
  buttonContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'flex-end', 
    height: '100%'
  },
  buttonStyle: {
    height: 30, 
    width: 70, 
    borderRadius: 5, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  activeButtonStyle: {
    backgroundColor: '#f28d21'
  },
  inactiveButtonStyle: {
    backgroundColor: 'lightgrey'
  }
})

export default styles