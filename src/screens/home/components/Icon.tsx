import { ImageSourcePropType, StyleSheet, View, Image, TouchableOpacity } from "react-native"
import colors from "../../../colors"

interface IconProps{
    icon: ImageSourcePropType
    onPress: () => void
}

export const Icon = ({icon, onPress}: IconProps) =>{
    return (
        <TouchableOpacity onPress={onPress} style={styles.iconArea}>
            <Image source={icon} resizeMode="contain" style={styles.icon} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    iconArea: {
        height: 45,
        width: 45,
        borderRadius: 45/2,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        height: 30,
        width: 30,
    },
})