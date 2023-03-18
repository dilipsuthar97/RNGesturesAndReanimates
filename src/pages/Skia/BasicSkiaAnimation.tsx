import {
  Canvas,
  Circle,
  Fill,
  Group,
  LinearGradient,
  Paint,
  SweepGradient,
  Text,
  useCanvasRef,
  vec,
} from '@shopify/react-native-skia';
import React, {memo} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
const {width} = Dimensions.get('window');

const BasicSkiaAnimation = () => {
  const ref = useCanvasRef();
  const center1 = {x: width / 2, y: 120};

  return (
    <View style={styles.container}>
      <Canvas style={{flex: 1}} ref={ref}>
        <Group>
          <SweepGradient
            c={center1}
            // colors={['red', 'yellow', 'red']}
            colors={['cyan', 'magenta', 'yellow', 'cyan']}
          />
          <Circle r={100} c={center1} style="fill" strokeWidth={10} />
        </Group>

        <Group>
           
        </Group>
      </Canvas>
    </View>
  );
};
export default memo(BasicSkiaAnimation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
