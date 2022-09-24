import React, {memo} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const {width: WIDTH} = Dimensions.get('screen');

interface AnimatedPosition {
  x: Animated.SharedValue<number>;
  y: Animated.SharedValue<number>;
}

const useFollowAnimatedPosition = ({x, y}: AnimatedPosition) => {
  const followX = useDerivedValue(() => {
    return withSpring(x.value);
  });

  const followY = useDerivedValue(() => {
    return withSpring(y.value);
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: followX.value,
        },
        {
          translateY: followY.value,
        },
      ],
    };
  });

  return {followX, followY, rStyle};
};

const BasicGesture = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const context = useSharedValue({x: 0, y: 0});

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {x: translateX.value, y: translateY.value};
    })
    .onUpdate(event => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onEnd(() => {
      if (translateX.value > WIDTH / 2) {
        translateX.value = WIDTH - 80;
      } else {
        translateX.value = 0;
      }
    });

  const {
    followX: blueFollowX,
    followY: blurFollowY,
    rStyle: rBlueStyle,
  } = useFollowAnimatedPosition({
    x: translateX,
    y: translateY,
  });
  const {
    followX: redFollowX,
    followY: redFollowY,
    rStyle: rRedStyle,
  } = useFollowAnimatedPosition({
    x: blueFollowX,
    y: blurFollowY,
  });
  const {rStyle: rGreenStyle} = useFollowAnimatedPosition({
    x: redFollowX,
    y: redFollowY,
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circle, {backgroundColor: 'green'}, rGreenStyle]}
      />
      <Animated.View
        style={[styles.circle, {backgroundColor: 'red'}, rRedStyle]}
      />
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.circle, rBlueStyle]} />
      </GestureDetector>
    </View>
  );
};
export default memo(BasicGesture);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  circle: {
    position: 'absolute',
    height: 80,
    aspectRatio: 1,
    backgroundColor: 'blue',
    opacity: 0.8,
    borderRadius: 40,
  },
});
