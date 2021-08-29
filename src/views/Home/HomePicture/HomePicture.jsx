import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { PageContainer } from '../../../components/layout/containers';
import { colors } from '../../../constants/layout/colors';

import getStyles from './HomePicture.styles';
import { fetchIdentyfingPlant } from '../../../store/plantsCurrent/plantsCurrent.actions';

const HomePicture = () => {
  const cameraRef = useRef(null);
  const dispatch = useDispatch();
  const styles = getStyles();

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.7, base64: true };
      try {
        const data = await cameraRef.current.takePictureAsync(options);
        dispatch(fetchIdentyfingPlant(data.base64));
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
