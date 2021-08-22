import React, { useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { PageContainer } from '../../../components/layout/containers';
import { colors } from '../../../constants/layout/colors';
import { identifyPlant } from '../../../services/plantApi/plantApi';

import getStyles from './HomePicture.styles';

const HomePicture = () => {
  const cameraRef = useRef(null);
  const styles = getStyles();

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 1, base64: true };
      try {
        const data = await cameraRef.current.takePictureAsync(options);
        const response = await identifyPlant(data.base64);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <PageContainer>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        style={styles.cameraContainer}
        captureAudio={false}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={takePicture} style={styles.iconContainer}>
          <Icon name="linked-camera" size={40} color={colors.GREEN} />
        </TouchableOpacity>
      </View>
    </PageContainer>
  );
};

export default HomePicture;
