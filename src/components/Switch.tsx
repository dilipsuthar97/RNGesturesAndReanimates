import React, { memo } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { MotiView } from "@motify/components";
import { MotiTransitionProp } from '@motify/core';
import { Easing } from "react-native-reanimated";

const colors = {
  active: "#2C2C2C",
  inactive: "#DCDCDC",
};

type SwitchProps = {
  size: number;
  onPress: () => void;
  isActive: boolean;
};

const transition: MotiTransitionProp = {
  type: "timing",
  easing: Easing.inOut(Easing.ease),
  duration: 300,
};

const Switch: React.FC<SwitchProps> = ({ size, onPress, isActive }) => {
  const trackWidth = React.useMemo(() => {
    return size * 1.5;
  }, [size]);
  const trackHeight = React.useMemo(() => {
    return size * 0.4;
  }, [size]);
  const knobSize = React.useMemo(() => {
    return size / 2;
  }, [size]);

  return (
    <Pressable onPress={onPress}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <MotiView
          transition={transition}
          animate={{
            backgroundColor: isActive ? colors.active : colors.inactive,
          }}
          style={{
            position: "absolute",
            width: trackWidth,
            height: trackHeight,
            borderRadius: trackHeight / 2,
          }}
        />
        <MotiView
          transition={transition}
          animate={{
            translateX: isActive ? trackWidth / 4 : -trackWidth / 4,
          }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 1,
          }}
        >
          <MotiView
            transition={transition}
            animate={{
              width: isActive ? 0 : knobSize,
              borderColor: isActive ? colors.active : colors.inactive,
            }}
            style={{
              width: knobSize,
              height: knobSize,
              borderRadius: knobSize / 2,
              borderWidth: size * 0.1,
            }}
          />
        </MotiView>
      </View>
    </Pressable>
  );
};

export default memo(Switch);