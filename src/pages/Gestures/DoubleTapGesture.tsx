import React, {memo, useCallback, useRef} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);

const imageUri =
  'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluc3RhZ3JhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60';
const {width: SIZE} = Dimensions.get('window');

const DoubleTapGesture = () => {
  const scale = useSharedValue(0);
  const opacity = useSharedValue(1);
  const doubleTapRef = useRef(null);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: Math.max(scale.value, 0)}],
    };
  });

  const rTextStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      scale.value = withDelay(500, withSpring(0));
    });
  }, []);

  const onSingleTap = useCallback(() => {
    opacity.value = withTiming(0, undefined, isFinished => {
      opacity.value = withDelay(500, withTiming(1));
    });
  }, []);

  return (
    <View style={styles.container}>
      <TapGestureHandler waitFor={doubleTapRef} onActivated={onSingleTap}>
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={onDoubleTap}>
          <Animated.View>
            <ImageBackground source={{uri: imageUri}} style={styles.image}>
              <AnimatedImage
                source={require('../../assets/heart.png')}
                style={[styles.image, rStyle]}
                resizeMode="center"
              />
            </ImageBackground>
            <Animated.Text style={[styles.turtles, rTextStyle]}>
              🐢🐢🐢🐢
            </Animated.Text>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
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
  turtles: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 30,
  },
});
