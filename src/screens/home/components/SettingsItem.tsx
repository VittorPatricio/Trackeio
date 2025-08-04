import React from "react";
import {View, Text, StyleSheet, ImageSourcePropType, TouchableOpacity, Image} from "react-native";
import colors from "../../../colors";

interface SettingsItemProps {
    icon: ImageSourcePropType;
    title: string;
    onPress?: () => void;
}


const SettingsItem = ({icon, title, onPress}: SettingsItemProps) => {
    return (
        <TouchableOpacity
            style={
                styles.itemContainer}
            onPress={onPress}
        >
           <Image source={icon} resizeMode="contain" style={styles.itemIcon} />
           <Text style={styles.itemTitle}>{title}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    itemContainer: {
        height: 50,
        width: '95%',
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.neutral,
        borderRadius: 12,
        flexDirection: 'row',
        borderColor: colors.textDark,
        borderBottomWidth: 2,
    },
    selectedItem: {
        backgroundColor: colors.backgroundDark,
        borderColor: colors.primary,
        borderWidth: 2,
    },
    itemTitle: {
        fontSize: 16,
        color: colors.textLight
    },
    itemIcon: {
        width: 25,
        height: 25,
    },
});

export default SettingsItem;