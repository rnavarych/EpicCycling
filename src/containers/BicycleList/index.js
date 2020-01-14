import React from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'

import { getListOfBicycles } from '../../actions/bicycles'

class BicycleList extends React.PureComponent {

  componentDidMount() {
    this.props.getListOfBicycles()
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
  getListOfBicycles: () => dispatch(getListOfBicycles())
});

export default connect(mapStateToProps, mapDispatchToProps)(BicycleList)