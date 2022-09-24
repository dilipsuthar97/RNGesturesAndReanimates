import React, {memo} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';

const imageUri =
  'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluc3RhZ3JhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60';
const {width: SIZE} = Dimensions.get('window');

const DoubleTapGesture = () => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUri}} style={styles.image} />
    </View>
  );
};
export default memo(DoubleTapGesture);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: SIZE,
    width: SIZE,
  },
});
