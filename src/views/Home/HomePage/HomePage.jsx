import React from 'react';
import { ScrollView } from 'react-native';

import { PageContainer } from '../../../components/layout/containers';
import HomeActions from '../HomeActions/HomeActions';
import HomeHeader from '../HomeHeader/HomeHeader';
import HomeImage from '../HomeImage/HomeImage';

const HomePage = () => (
  <PageContainer>
    <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
      <HomeHeader />
      <HomeImage />
      <HomeActions />
    </ScrollView>
  </PageContainer>
);
export default HomePage;
