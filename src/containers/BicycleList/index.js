import React from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { getListOfBicycles } from '../../actions/bicycles'

class BicycleList extends React.PureComponent {

  componentDidMount() {
    const stationID = this.props.navigation.getParam('stationID')
    this.props.getListOfBicycles(stationID)
  }

  render() {
    return <View style={{ flex: 1 }}>
      <FlatList
        data={this.props.listOfBicycles}
        keyExtractor={(i, index) => String(index)}
        renderItem={i => <View style={{ width: '100%', height: 50, borderWidth: 1 }}/>}
      />
    </View>
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