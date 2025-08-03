import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TextInput, Alert, TouchableOpacity} from 'react-native';
import colors from '../../../colors';
import {Icon} from './Icon';

interface AreaTopProps {
  search: string;
  setSearch: (text: string) => void;
  isFocus: boolean;
  setIsFocus: (focus: boolean) => void;
  sideBarOpen: boolean;
  setSideBarOpen: (open: boolean) => void;
}

export const AreaTop = ({
  search,
  setSearch,
  isFocus,
  setIsFocus,
  sideBarOpen,
  setSideBarOpen,
}: AreaTopProps) => {
  return (
    <View
      style={
        styles.areaTop}
    >
      <View style={styles.left}>
       <TouchableOpacity onPress={() => setSideBarOpen(!sideBarOpen)}>
       <Image
          source={require('../../../../assets/icons/menu.png')}
          resizeMode="contain"
          style={styles.areaTopIcon}
        />
       </TouchableOpacity>
        <Text style={styles.areaTopTitle}>Dashboard</Text>
      </View>
      <View style={styles.right}>
        <View style={[styles.searchContainer, {
            borderWidth: isFocus ? 2 : 3
        }]}>
          <TextInput
            placeholder="Digite seu nome"
            placeholderTextColor={colors.textLight}
            keyboardType="default"
            style={
              styles.textField}
            value={search}
            onChangeText={setSearch}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
          />
          <Image
            source={require('../../../../assets/icons/search.png')}
            style={styles.searchIcon}
            resizeMode="contain"
          />
        </View>

        <Icon onPress={()=>{
            Alert.alert("notificação");
        }} icon={require('../../../../assets/icons/notification.png')} />
        <Icon  onPress={()=>{
            Alert.alert("setting");
        }}  icon={require('../../../../assets/icons/setting.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  areaTop: {
    height: 125,
    position: 'absolute',
    top: 0,
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  areaTopTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.textLight,
    textAlign: 'center',
  },
  areaTopIcon: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
  left: {
    width: '40%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  right: {
    width: '60%',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchContainer: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 12,
    height: 35,
    borderColor: colors.textLight,
  },
  textField: {
    flex: 1,
    height: '100%',
    paddingLeft: 10,
    color: colors.textLight,
    borderWidth: 0,
    paddingTop: 5
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginRight: 8,
    tintColor: colors.textLight,
  },
});
