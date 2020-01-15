import React from 'react'
import { View, FlatList, TouchableOpacity, Text } from 'react-native'
import { connect } from 'react-redux'

import { getListOfBicycles } from '../../actions/bicycles'

class BicycleList extends React.PureComponent {

  componentDidMount() {
    const stationID = this.props.navigation.getParam('stationID')
    this.props.getListOfBicycles(stationID)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          ListHeaderComponent={
            <View style={{ width: '100%', height: 50, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Bicycle Total: {this.props.listOfBicycles.length}</Text>
            </View>
          }
          data={this.props.listOfBicycles}
          keyExtractor={(i, index) => String(index)}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          renderItem={({item}) => (
            <TouchableOpacity 
              onPress={() => {}}
              style={{ 
                borderRadius: 10, 
                elevation: 5, 
                width: '100%', 
                height: 80,  
                marginVertical: 10,
                shadowOffset: { width: 0, height: 7 },
                shadowColor: 'black',
                backgroundColor: '#f28d21',
                shadowOpacity: 0.07,
                justifyContent: 'center',
                paddingHorizontal: 10
              }}>
                <Text>Status: {item.available ? 'Available' : 'Not available'}</Text>
                <Text>Model: {item.model}</Text>
                <Text>Battery: {item.battery}%</Text>
            </TouchableOpacity>
          )
          }
        />
      </View>
    )
  }
}

const mapStateToProps = ({
  bicycles: {
    listOfBicycles
  }
}) => ({
  listOfBicycles
});

const mapDispatchToProps = dispatch => ({
  getListOfBicycles: (id) => dispatch(getListOfBicycles(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(BicycleList)