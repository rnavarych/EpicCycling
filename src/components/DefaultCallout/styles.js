import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	calloutContainer: {
		borderWidth: 1,
    borderColor: '#f9f9f9',
    width: 180, 
    height: 100, 
    justifyContent: 'center', 
    backgroundColor: 'white' , 
    borderRadius: 10 
	},
	bicyclesAmountText: {
		marginBottom: 5, 
    fontSize: 20, 
    alignSelf: 'center'
	},
	calloutButton: {
    alignSelf: 'center', 
    backgroundColor: '#a0ee90', 
    borderRadius: 5
  },
  buttonText: {
    paddingHorizontal: 10
  }
})

export default styles