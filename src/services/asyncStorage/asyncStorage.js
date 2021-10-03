import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    return null;
  }
};

export const getData = async (key, initialValue, format = 'json') => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (!value) {
      return initialValue;
    }
    if (format === 'json') {
      return JSON.parse(value);
    }
    return value;
  } catch (e) {
    return null;
  }
};
