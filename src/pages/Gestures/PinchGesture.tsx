import React, {memo} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const {width, height} = Dimensions.get('screen');

const imageUri =
  'https://images.unsplash.com/photo-1663914263305-874418bc487e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60';

const PinchGesture = () => {
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive(event, context) {
        scale.value = event.scale;
        focalX.value = event.focalX;
        focalY.value = event.focalY;
      },
      onEnd(event, context) {
        scale.value = withTiming(1);
      },
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -width / 2},
        {translateY: -height / 2},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: width / 2},
        {translateY: height / 2},
      ],
    };
  });

  const rFocalPointStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: focalX.value}, {translateY: focalY.value}],
    };
  });

  return (
    <View style={{flex: 1}}>
      <PinchGestureHandler onGestureEvent={pinchHandler}>
        <Animated.View style={{flex: 1}}>
          <AnimatedImage source={{uri: imageUri}} style={[{flex: 1}, rStyle]} />
          <Animated.View style={[styles.focalPoint, rFocalPointStyle]} />
        </Animated.View>
      </PinchGestureHandler>
    </View>
  );
};
export default memo(PinchGesture);

const styles = StyleSheet.create({
  focalPoint: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'yellow',
    position: 'absolute',
  },
});
