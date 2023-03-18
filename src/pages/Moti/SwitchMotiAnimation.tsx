import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Switch from '../../components/Switch';

const SwitchMotiAnimation = () => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <View style={styles.container}>
      <Switch
        size={100}
        isActive={isActive}
        onPress={() => {
          setIsActive((isActive: boolean) => !isActive);
        }}
      />
    </View>
  );
};
export default memo(SwitchMotiAnimation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
