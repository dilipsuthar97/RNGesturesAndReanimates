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

type MotiAnimationsPageProps = NativeStackScreenProps<
  RootStackParamList,
  'MotiAnimations'
>;

const DATA: Data[] = [
  {
    id: 0,
    title: 'Switch',
    navigateTo: 'SwitchMotiAnimation',
  },
  {
    id: 1,
    title: 'Loading',
    navigateTo: 'LoadingMotiAnimation',
  },
];

const MotiAnimationsPage: React.FC<MotiAnimationsPageProps> = ({
  navigation,
}) => {
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
export default memo(MotiAnimationsPage);

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
