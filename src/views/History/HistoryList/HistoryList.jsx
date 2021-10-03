import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { Header } from '../../../components/layout/typography';
import HistoryListItem from '../HistoryListItem/HistoryListItem';

import { PLANTS_HISTORY_KEY } from '../../../constants/asyncStorage/keys';
import { plantsHistoryInitData } from '../../../constants/plants/plantsHistory';
import { getData } from '../../../services/asyncStorage/asyncStorage';

import getStyles from './HistoryList.styles';

const HistoryList = () => {
  const [history, setHistory] = useState([]);
  const styles = getStyles();

  useEffect(() => {
    getHistoryData();
  }, []);

  const getHistoryData = async () => {
    try {
      const data = await getData(PLANTS_HISTORY_KEY, plantsHistoryInitData);
      setHistory(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FlatList
      data={history}
      renderItem={({ item }) => <HistoryListItem item={item} />}
      keyExtractor={item => item.gbif}
      ListHeaderComponent={() => <Header text="History" />}
      stickyHeaderIndices={[0]}
      style={styles.container}
    />
  );
};

export default HistoryList;
