import React from "react"
import { View, Text, Image, StyleSheet, ImageSourcePropType, TouchableOpacity } from 'react-native'
import colors from "../../../colors"

interface SideBarItemProps {
    icon: ImageSourcePropType;
    title: string;
    selected?: boolean;
    onPress?: () => void;
}

export const SideBarItem = ({icon, title, selected, onPress}: SideBarItemProps) => {
    return (
        <TouchableOpacity
            style={[
                styles.itemContainer,
                selected && styles.selectedItem
            ]}
            onPress={onPress}
        >
           <View style={styles.itemArea}>
           <Image source={icon} resizeMode="contain" style={styles.itemIcon} />
           <Text style={styles.itemTitle}>{title}</Text>
           </View>
           <View style={{width:180, borderRadius: 10, backgroundColor: colors.backgroundDark, height: 2, position: 'absolute', bottom: 0}} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        maxHeight: 100,
        height: '45%',
        width: 180,
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 12
    },
    selectedItem: {
        backgroundColor: colors.backgroundDark,
        borderColor: colors.primary,
        borderWidth: 2,
    },
    itemArea: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    itemTitle: {
        fontSize: 16,
        color: colors.textLight
    },
    itemIcon: {
        width: 35,
        height: 35,
        marginRight: '12%'
    },
});