import React, { useState } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, FlatList } from 'react-native';
import { data } from '../../../images';

const SPACING = 12;



interface CarouselProps {
  onSelectAvatar: (avatar: string) => void;
}


const Carousel = ({
  onSelectAvatar
}: CarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={true}
        renderItem={({ item, index }) => {
          const isSelected = index === selectedIndex;
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setSelectedIndex(index);
                onSelectAvatar(item.image);
              }}
              style={[styles.item, isSelected && styles.itemSelected]}
            >
              <Image source={item.image} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  listContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 0,
  },
  item: {
    width: 160,
    height: 160,
    padding: 5,
    marginHorizontal: SPACING / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 160,
    borderWidth: 0,
    backgroundColor: '#fff',
  },
  itemSelected: {
    borderWidth: 3,
    borderColor: '#2196f3',
    backgroundColor: '#f0f8ff',
    zIndex: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Carousel;
