import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import PlantsCurrentItem from '../PlantsCurrentItem/PlantsCurrentItem';

import getStyles from './PlantsCurrentList.styles';

const PlantsCurrent = () => {
  const styles = getStyles();
  const plantsCurrent = useSelector(state => state.plantsCurrent);

  return (
    <FlatList
      data={plantsCurrent}
      renderItem={({ item }) => <PlantsCurrentItem plant={item} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => <Text style={styles.title}>Results</Text>}
      stickyHeaderIndices={[0]}
    />
  );
};

export default PlantsCurrent;
