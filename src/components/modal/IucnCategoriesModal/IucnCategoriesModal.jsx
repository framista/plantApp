import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { iucnCategories } from '../../../constants/iucnStatus/iucnCategories';
import { hideModal } from '../../../store/uiState/uiState.actions';
import { ModalButton } from '../../forms';
import { ModalTitle } from '../../layout/typography';

import getStyles from './IucnCategoriesModal.styles';

const IucnCategoriesModal = () => {
  const styles = getStyles();
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ModalTitle text="IUCN categories" />
      <ScrollView style={styles.categoriesList}>
        {iucnCategories.map(({ name, description }) => (
          <View key={name} style={styles.categoryItem}>
            <Text style={styles.primaryText}>{name}</Text>
            <Text>{description}</Text>
          </View>
        ))}
      </ScrollView>
      <ModalButton
        onPress={() => dispatch(hideModal())}
        text={'CLOSE'}
        primary
      />
    </View>
  );
};

export default IucnCategoriesModal;
