import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import {RootStackParamList} from './types/Navigation.type';
import Gestures from './pages/Gestures';
import Animations from './pages/Animations';
import BasicGesture from './pages/Gestures/BasicGesture';
import BottomSheetGesture from './pages/Gestures/BottomSheetGesture';
import BasicAnimation from './pages/Animations/BasicAnimation';
import PinchGesture from './pages/Gestures/PinchGesture';
import DoubleTapGesture from './pages/Gestures/DoubleTapGesture';
import ColorPickerAnimation from './pages/Animations/ColorPickerAnimation';
import VanillaAnimations from './pages/VanillaAnimations';
import CarouselAnimation from './pages/VanillaAnimations/CarouselAnimation';
import BasicVanillaAnimation from './pages/VanillaAnimations/BasicAnimation';
import MotiAnimations from './pages/Moti';
import SwitchMotiAnimation from './pages/Moti/SwitchMotiAnimation';
import LoadingMotiAnimation from './pages/Moti/LoadingMotiAnimation';
import SkiaAnimations from './pages/Skia';
import CardSkiaAnimation from './pages/Skia/CardSkiaAnimation';
import BasicSkiaAnimation from './pages/Skia/BasicSkiaAnimation';
import CarouselAnimationTwo from './pages/VanillaAnimations/CarouselAnimationTwo';
import LayoutAnimation from './pages/VanillaAnimations/LayoutAnimation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomePage"
        screenOptions={{
          statusBarStyle: 'dark',
          contentStyle: {
            backgroundColor: 'white',
          },
        }}>
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{title: '🪄 Gestures & Animations'}}
        />
        {/* Gesture screens */}
        <Stack.Screen
          name="Gestures"
          component={Gestures}
          options={{title: '🖐️ Gestures'}}
        />
        <Stack.Screen
          name="BasicGesture"
          component={BasicGesture}
          options={{title: 'Basic'}}
        />
        <Stack.Screen
          name="BottomSheetGesture"
          component={BottomSheetGesture}
          options={{title: 'Bottom Sheet'}}
        />
        <Stack.Screen
          name="PinchGesture"
          component={PinchGesture}
          options={{title: 'Pinch Gesture'}}
        />
        <Stack.Screen
          name="DoubleTapGesture"
          component={DoubleTapGesture}
          options={{title: 'DoubleTap Like (Instagram)'}}
        />
        {/* Animation screens */}
        <Stack.Screen
          name="Animations"
          component={Animations}
          options={{title: '✨ Animations'}}
        />
        <Stack.Screen
          name="BasicAnimation"
          component={BasicAnimation}
          options={{title: 'Basic'}}
        />
        <Stack.Screen
          name="ColorPickerAnimation"
          component={ColorPickerAnimation}
          options={{title: 'Color Picker'}}
        />
        {/* Vanilla animation screens */}
        <Stack.Screen
          name="VanillaAnimations"
          component={VanillaAnimations}
          options={{title: '⚠️ Vanilla Animations'}}
        />
        <Stack.Screen
          name="BasicVanillaAnimation"
          component={BasicVanillaAnimation}
          options={{title: 'Basic'}}
        />
        <Stack.Screen
          name="CarouselAnimation"
          component={CarouselAnimation}
          options={{title: 'Carousel'}}
        />
        <Stack.Screen
          name="CarouselAnimationTwo"
          component={CarouselAnimationTwo}
          options={{title: 'Carousel 2'}}
        />
        <Stack.Screen
          name="LayoutAnimation"
          component={LayoutAnimation}
          options={{title: 'Layout Animation'}}
        />
        {/* Moti animation screens */}
        <Stack.Screen
          name="MotiAnimations"
          component={MotiAnimations}
          options={{title: '🧩 Moti'}}
        />
        <Stack.Screen
          name="SwitchMotiAnimation"
          component={SwitchMotiAnimation}
          options={{title: 'Switch'}}
        />
        <Stack.Screen
          name="LoadingMotiAnimation"
          component={LoadingMotiAnimation}
          options={{title: 'Loading'}}
        />
        {/* Skia animation screens */}
        <Stack.Screen
          name="SkiaAnimations"
          component={SkiaAnimations}
          options={{title: '🧩 Skia'}}
        />
        <Stack.Screen
          name="BasicSkiaAnimation"
          component={BasicSkiaAnimation}
          options={{title: 'Basic'}}
        />
        <Stack.Screen
          name="CardSkiaAnimation"
          component={CardSkiaAnimation}
          options={{title: '3D Card'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
