import React, {memo, useCallback} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import Animated, {
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface ColorPickerProps extends LinearGradientProps {
  maxWidth: number;
  onColorChanged: (color: string | number) => void;
}

const CIRCLE_PICKER_SIZE = 45;
const INTERNAL_PICKER_SIZE = 25;

const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  start,
  end,
  style,
  maxWidth,
  onColorChanged,
}) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const context = useSharedValue({x: 0});

  const adjustedTranslateX = useDerivedValue(() => {
    return Math.min(
      Math.max(translateX.value, 0),
      maxWidth - CIRCLE_PICKER_SIZE,
    );
  });

  const onEnd = useCallback(() => {
    'worklet';
    translateY.value = withSpring(0);
    scale.value = withSpring(1);
  }, []);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {x: number}
  >({
    onStart() {
      context.value = {x: adjustedTranslateX.value};
    },
    onActive(event) {
      translateX.value = event.translationX + context.value.x;
    },
    onEnd,
  });

  const tapGestureEvent =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
      onStart(event) {
        context.value = {x: event.absoluteX - CIRCLE_PICKER_SIZE};
        translateY.value = withSpring(-CIRCLE_PICKER_SIZE);
        scale.value = withSpring(1.2);
        translateX.value = withTiming(event.absoluteX - CIRCLE_PICKER_SIZE);
      },
      onEnd,
    });

  const rPickerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: adjustedTranslateX.value},
        {translateY: translateY.value},
        {scale: scale.value},
      ],
    };
  });

  const rInternalPickerStyle = useAnimatedStyle(() => {
    const inputRange = colors.map((_, i) => (i / 9) * maxWidth);
    const backgroundColor = interpolateColor(
      translateX.value,
      inputRange,
      colors,
    );
    onColorChanged?.(backgroundColor);

    return {
      backgroundColor,
    };
  });

  return (
    <TapGestureHandler onGestureEvent={tapGestureEvent}>
      <Animated.View>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={{justifyContent: 'center'}}>
            <LinearGradient
              colors={colors}
              start={start}
              end={end}
              style={style}
            />
            <Animated.View style={[styles.picker, rPickerStyle]}>
              <Animated.View
                style={[styles.internalPicker, rInternalPickerStyle]}
              />
            </Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </TapGestureHandler>
  );
};
export default memo(ColorPicker);

const styles = StyleSheet.create({
  picker: {
    width: CIRCLE_PICKER_SIZE,
    height: CIRCLE_PICKER_SIZE,
    backgroundColor: '#fff',
    borderRadius: CIRCLE_PICKER_SIZE / 2,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  internalPicker: {
    width: INTERNAL_PICKER_SIZE,
    height: INTERNAL_PICKER_SIZE,
    backgroundColor: 'red',
    borderRadius: INTERNAL_PICKER_SIZE / 2,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
  },
});
