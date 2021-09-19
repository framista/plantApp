import React from 'react';
import { useSelector } from 'react-redux';

import { PageContainer } from '../../components/layout/containers';
import BiologyDetails from './BiologyDetails/BiologyDetails';

const PlantDetails = () => {
  const plantDetails = useSelector(state => state.plantsCurrent.plantDetails);

  return (
    <PageContainer>
      <BiologyDetails biology={plantDetails.biology} />
    </PageContainer>
  );
};

export default PlantDetails;
