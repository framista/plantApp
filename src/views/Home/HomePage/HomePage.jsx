import React from 'react';

import { PageContainer } from '../../../components/layout/containers';
import HomeCard from '../HomeCard/HomeCard';
import HomeHeader from '../HomeHeader/HomeHeader';
import HomeImage from '../HomeImage/HomeImage';

const HomePage = () => (
  <PageContainer>
    <HomeHeader />
    <HomeImage />
    <HomeCard />
  </PageContainer>
);
export default HomePage;
