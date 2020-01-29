import React, {PureComponent} from 'react'
import { View, FlatList, Text } from 'react-native'
import { connect } from 'react-redux'

import { getListOfBicycles } from '../../actions/bicycles'
import DetailsCard from '../../components/detailsCard';
import styles from './styles';
import BicycleListHeader from '../../components/dicycleListHeader';

class BicycleList extends PureComponent {

  componentDidMount() {
    const stationID = this.props.navigation.getParam('stationID')
    this.props.getListOfBicycles(stationID)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={<BicycleListHeader totalAmount={this.props.listOfBicycles.length}/>}
          data={this.props.listOfBicycles}
          keyExtractor={(i, index) => String(index)}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          renderItem={({item, index}) => (
            <View style={styles.cardMargins}>
              <DetailsCard key={String(index)} bicycle={item}/>
            </View>
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