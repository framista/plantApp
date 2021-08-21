import { API_PLANT_KEY } from '@env';
import React, { useRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';

import axios from 'axios';

import { PageContainer } from '../../../components/layout/containers';
import { colors } from '../../../constants/layout/colors';

import getStyles from './HomePicture.styles';

const HomePicture = () => {
  const cameraRef = useRef(null);
  const styles = getStyles();

  const takePicture = async () => {
    if (cameraRef) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);

      RNFetchBlob.fetch(
        'POST',
        `https://my-api.plantnet.org/v2/identify/all?api-key=${API_PLANT_KEY}`,
        {
          'Content-Type': 'multipart/form-data',
        },
        [
          {
            name: 'images',
            filename: 'image_1.jpg',
            type: 'image/jpeg',
            data: data.base64,
          },
          { name: 'organs', data: 'leaf' },
        ],
      )
        .then(resp => {
          console.log(new Date());
          console.log(resp);
        })
        .catch(err => {
          console.log(err);
          console.log('**********************************************');
        });

      //   const formdata = new FormData();
      //   formdata.append('organs', 'leaf');

      //   console.log(Object.keys(data));
      //   console.log(data.uri);
      //   try {
      //     // const readStreamData = await RNFetchBlob.fs.readStream(
      //     //   data.uri,
      //     //   'base64',
      //     // );
      //     // const readStreamData = await RNFetchBlob.fs.readFile(image.path, 'base64').then(data => //upload here );
      //     // console.log(readStreamData);
      //     formdata.append('images', data.base64);
      //     console.log('szukaj');
      //     const { status, response } = await axios.post(
      //       `https://my-api.plantnet.org/v2/identify/all?api-key=${API_PLANT_KEY}`,
      //       formdata,
      //       {
      //         headers: {
      //           'Content-Type': 'multipart/form-data',
      //         },
      //       },
      //     );
      //     console.log('status', status); // should be: 200
      //     // console.log('data', response); // should be: read "Step 6" below
      //   } catch (err) {
      //     console.log(err);
      //   }
    }
  };

  console.log(API_PLANT_KEY);
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
