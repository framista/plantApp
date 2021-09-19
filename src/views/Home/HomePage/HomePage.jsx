import React from 'react';

import { PageContainer } from '../../../components/layout/containers';
import HomeActions from '../HomeActions/HomeActions';
import HomeHeader from '../HomeHeader/HomeHeader';
import HomeImage from '../HomeImage/HomeImage';

const HomePage = () => (
  <PageContainer>
    <HomeHeader />
    <HomeImage />
    <HomeActions />
  </PageContainer>
);
export default HomePage;
