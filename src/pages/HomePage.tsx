import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {memo, useCallback} from 'react';
import {
  FlatList,
  Linking,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../types/Navigation.type';

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'HomePage'>;

export interface Data {
  id: number;
  title: string;
  navigateTo: keyof RootStackParamList;
}

const DATA: Data[] = [
  {
    id: 0,
    title: '🖐️ Gestures',
    navigateTo: 'Gestures',
  },
  {
    id: 1,
    title: '✨ Animations',
    navigateTo: 'Animations',
  },
  {
    id: 2,
    title: '⚠️ Vanilla Animations',
    navigateTo: 'VanillaAnimations',
  },
  {
    id: 3,
    title: '🧩 Moti',
    navigateTo: 'MotiAnimations',
  },
  {
    id: 4,
    title: '🧩 Skia',
    navigateTo: 'SkiaAnimations',
  },
];

const HomePage: React.FC<HomePageProps> = ({navigation}) => {
  const keyExtractor = useCallback((data: Data) => {
    return data.id.toString();
  }, []);

  const renderItem: ListRenderItem<Data> = useCallback(({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.4}
        onPress={() => navigation.navigate(item.navigateTo)}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  }, []);

  const openLink = useCallback(() => {
    try {
      Linking.openURL('https://www.youtube.com/c/Reactiive');
    } catch (error) {
      console.log('Unable to open link');
    }
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      {/* <Text style={styles.infoText}>
        Learned from{' '}
        <Text
          style={{
            color: 'blue',
            textDecorationLine: 'underline',
            fontWeight: 'bold',
          }}
          onPress={openLink}>
          Reactiive
        </Text>
      </Text> */}
    </View>
  );
};
export default memo(HomePage);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  item: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: '#000',
  },
  infoText: {
    textAlign: 'center',
    paddingVertical: 8,
    fontSize: 14,
  },
});
