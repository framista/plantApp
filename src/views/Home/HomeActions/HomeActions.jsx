import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';

import { Button } from '../../../components/forms';
import { identifyPlant } from '../../../services/plantApi/plantApi';
import { readImageFile } from '../../../services/fileOperation/fileOperation';

const HomeActions = () => {
  const navigation = useNavigation();

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
        readImageFile(uri)
          .then(res => uploadPic(res))
          .catch(err => console.log(err));
      }
    });
  };

  const uploadPic = async base64 => {
    try {
      const res = await identifyPlant(base64);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
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
