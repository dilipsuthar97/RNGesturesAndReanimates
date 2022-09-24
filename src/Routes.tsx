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
          options={{title: '🪄 Gestures & Animations 2'}}
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
          options={{title: 'BottomSheet', headerShown: false}}
        />
        <Stack.Screen
          name="PinchGesture"
          component={PinchGesture}
          options={{title: 'Pinch Gesture'}}
        />
        <Stack.Screen
          name="DoubleTapGesture"
          component={DoubleTapGesture}
          options={{title: 'DoubleTap Like'}}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
