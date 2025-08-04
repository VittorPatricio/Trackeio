import React, { ReactNode } from "react";
import {View, StyleSheet,} from "react-native";
import colors from "../../../colors";

interface SettingsProps {
    children: ReactNode;
}


const Settings = ({children}: SettingsProps) => {
    return (
        <View style={styles.settingsContainer}>
            {children}
        </View>
    );
}


const styles = StyleSheet.create({
    settingsContainer: {
        position: 'absolute',
        top: '12.85%',
        right: 32,
        width: 160,
        height: 100,
        backgroundColor: colors.white,
        borderRadius: 10,
        zIndex: 1000,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

export default Settings;