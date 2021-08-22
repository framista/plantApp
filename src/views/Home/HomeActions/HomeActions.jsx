import React from 'react';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

import { Button } from '../../../components/forms';

import { fetchPlantsFromGallery } from '../../../store/plantsCurrent/plantsCurrent.actions';

const HomeActions = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const takePhoto = () => {
    navigation.navigate('HomePicture');
  };

  const chooseImage = () => {
    launchImageLibrary(null, response => {
      if (response.errorMessage) {
        // TODO: modal error
        console.log('Image Picker Error: ', response.errorMessage);
        return;
      }
      console.log(response.assets[0].uri);
      if (response.assets.length > 0) {
        const { uri } = response.assets[0];
        dispatch(fetchPlantsFromGallery(uri));
      }
    });
  };

  return (
    <View>
      <Button
        text="Take a picture"
        icon="add-a-photo"
        primary
        onPress={takePhoto}
      />
      <Button text="Choose image" icon="image" onPress={chooseImage} />
    </View>
  );
};

export default HomeActions;
