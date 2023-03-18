import React, {memo, useCallback, useEffect, useRef} from 'react';
import {
  Animated,
  Button,
  Dimensions,
  Easing,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
const { width: screenWidth } = Dimensions.get('window');

const SIZE = 200;

const BasicAnimation = () => {
  const anim = useRef(new Animated.Value(0)).current;
  const width = useRef(new Animated.Value(10)).current;
  const widthSpring = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const rBorderRadius = {
    borderRadius: anim.interpolate({
      inputRange: [0,1],
      outputRange: [0, SIZE/2],
    })
  };

  const rBgColor = {
    backgroundColor: anim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['#0336FF', '#FFDE03', '#FF0266']
    })
  }

  const rScale = {
    transform: [
      {
        scale: anim
      },
    ],
  };

  const rRotate = {
    transform: [
      {
        rotate: anim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg']
        })
      }
    ]
  }

  const startAnimation = useCallback(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          duration: 800,
          toValue: 1,
          easing: (x) => {
            return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
          },
          useNativeDriver: false,
        }),
        Animated.timing(anim, {
          duration: 800,
          toValue: 0,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
      {
        iterations: -1,
      },
    ).start();

    const timer = setInterval(() => {
      const random = Math.random() * (screenWidth - 40)
      Animated.timing(width, {
        toValue: random,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.spring(widthSpring, {
        toValue: random,
        bounciness: 20,
        useNativeDriver: false,
      }).start();
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  return (
    <View style={styles.container}>
        <Animated.View style={[styles.box, rRotate, rBorderRadius, rBgColor]} />
        <View style={{ height: 70 }}/>
        <Animated.View
          style={[styles.bar, {width}]}
        />
        <Animated.View
          style={[styles.bar, {width: widthSpring}]}
        />
    </View>
  );
};
export default memo(BasicAnimation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  box: {
    width: SIZE,
    height: SIZE,
    // borderRadius: SIZE/2,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
  bar: {
    backgroundColor: 'blue',
    height: 100,
    width: 10,
    marginTop: 24,
    marginHorizontal: 20,
  }
});
