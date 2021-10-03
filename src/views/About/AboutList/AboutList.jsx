import React from 'react';
import { FlatList } from 'react-native';

import { Header } from '../../../components/layout/typography';
import AboutListItem from '../AboutListItem/AboutListItem';

import { apiDetails } from '../../../constants/api/apiDetails';

import getStyles from './AboutList.styles';

const AboutList = () => {
  const styles = getStyles();

  return (
    <FlatList
      data={apiDetails}
      renderItem={({ item }) => <AboutListItem item={item} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => <Header text="About" />}
      stickyHeaderIndices={[0]}
      style={styles.container}
    />
  );
};

export default AboutList;
