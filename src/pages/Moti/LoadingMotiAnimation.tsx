import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import LoadingIndicator from '../../components/LoadingIndicator';

const LoadingMotiAnimation = () => {
  return (
    <View style={styles.container}>
      <LoadingIndicator size={100} />
    </View>
  );
};
export default memo(LoadingMotiAnimation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010100',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
