import React, {memo, useCallback} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import ColorPicker from '../../components/ColorPicker';

const {width} = Dimensions.get('window');
const colors = [
  'red',
  'purple',
  'blue',
  'cyan',
  'green',
  'yellow',
  'orange',
  'black',
  'white',
];

const CIRCLE_SIZE = width * 0.8;
const PICKER_WIDTH = width * 0.9;

const ColorPickerAnimation = () => {
  const pickedColor = useSharedValue<string | number>(colors[0]);

  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: pickedColor.value,
    };
  });

  const onColorChanged = useCallback((color: string | number) => {
    'worklet';
    pickedColor.value = color;
  }, []);

  return (
    <>
      <View style={styles.topContainer}>
        <Animated.View style={[styles.circle, rStyle]} />
      </View>
      <View style={styles.bottomContainer}>
        <ColorPicker
          style={styles.gradient}
          colors={colors}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          maxWidth={PICKER_WIDTH}
          onColorChanged={onColorChanged}
        />
      </View>
    </>
  );
};
export default memo(ColorPickerAnimation);

const styles = StyleSheet.create({
  topContainer: {
    flex: 3,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    height: 40,
    width: PICKER_WIDTH,
    borderRadius: 20,
  },
});
