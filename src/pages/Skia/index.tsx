import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {memo, useCallback} from 'react';
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackParamList} from '../../types/Navigation.type';
import {Data} from '../HomePage';

type SkiaAnimationsPageProps = NativeStackScreenProps<
  RootStackParamList,
  'SkiaAnimations'
>;

const DATA: Data[] = [
  {
    id: 0,
    title: 'Basic',
    navigateTo: 'BasicSkiaAnimation',
  },
  {
    id: 1,
    title: '3D Card',
    navigateTo: 'CardSkiaAnimation',
  },
];

const SkiaAnimationsPage: React.FC<SkiaAnimationsPageProps> = ({
  navigation,
}) => {
  const keyExtractor = useCallback((data: typeof DATA[0]) => {
    return data.id.toString();
  }, []);

  const renderItem: ListRenderItem<typeof DATA[0]> = useCallback(
    ({item, index}) => {
      return (
        <TouchableOpacity
          style={styles.item}
          activeOpacity={0.4}
          onPress={() => navigation.navigate(item.navigateTo)}>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      );
    },
    [],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};
export default memo(SkiaAnimationsPage);

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
});
