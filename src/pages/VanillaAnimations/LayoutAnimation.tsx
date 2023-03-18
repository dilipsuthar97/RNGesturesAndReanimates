import {Text} from 'moti';
import React, {memo, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';

const LayoutAnimationPage = () => {
  const [data, setData] = useState([1, 1, 1, 1, 1, 1, 1]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                LayoutAnimation.configureNext({
                  duration: 500,
                  update: {type: 'easeOut', property: 'opacity'},
                  delete: {type: 'easeOut', property: 'opacity'},
                });
                const newData = data.filter((_, i) => i !== index);
                setData(newData);
              }}>
              <View style={styles.item}>
                <Text>{index + 1}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(_, index) => `item-${index}`}
        ItemSeparatorComponent={() => {
          return <View style={{height: 20}} />;
        }}
        contentContainerStyle={{
          padding: 20,
        }}
      />
    </View>
  );
};
export default memo(LayoutAnimationPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    height: 80,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
