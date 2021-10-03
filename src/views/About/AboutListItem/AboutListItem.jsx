import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, Linking } from 'react-native';

import getStyles from './AboutListItem.styles';

const AboutListItem = ({ item }) => {
  const styles = getStyles();

  const openWebsite = () => {
    Linking.openURL(item.link);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openWebsite}>
      <Image
        style={styles.image}
        source={{ uri: item.logo }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

AboutListItem.propTypes = {
  item: PropTypes.shape({
    logo: PropTypes.string,
    link: PropTypes.string,
  }),
};

export default AboutListItem;
