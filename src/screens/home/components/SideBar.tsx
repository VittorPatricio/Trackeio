import React, { ReactNode, useContext } from "react"
import { Image, StyleSheet, View, Text, ScrollView } from "react-native"
import colors from "../../../colors";
interface SideBarProps {
    children: ReactNode;
    user: any;
}

export const SideBar = ({children, user}: SideBarProps) =>{

    if (!user) {
        return null;
    }

    return (
        <View style={styles.sideContainer}>
            <View style={{height: '100%', backgroundColor: colors.backgroundDark, width: 2, position: 'absolute', right: 0}} />
            <View style={styles.topArea}>
                <Image source={user.avatar} style={styles.avatarImage} resizeMode="contain"/>
                <Text style={styles.topTextArea}>Olá {user.name} 👋</Text>
                <View style={{width: '100%', backgroundColor: colors.backgroundDark, height: 2, position: 'absolute', bottom: 0}} />
            </View>
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} contentContainerStyle={styles.scrollContainer}>
           <Text style={styles.optionText}>Opções:</Text>
           {children}
           </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    sideContainer: {
        maxWidth: 280,
        width: '15.75%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        backgroundColor: colors.secondary,
        zIndex: 1000
    },
    topArea: {
        flexDirection: 'column',
        width: '100%',
        maxHeight: 120,
        height: '25%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    avatarImage:{
        marginTop: 5,
        width: 62,
        height: 62,
    },
    topTextArea:{
        color: colors.textLight,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    optionText:{
        position: 'absolute',
        top: 20,
        left: 15,
        color: colors.textLight,
        fontSize: 16,
        fontWeight: 'bold',
    },
    scrollContainer: {
        flex: 1,
        paddingVertical: 5,
        backgroundColor: 'transparent'
    }
});