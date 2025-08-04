import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const useLogout = () => {
    const { setUser } = useContext(AuthContext);
    const navigation = useNavigation();

    const logout = async () => {
        setUser(null);
        await AsyncStorage.removeItem('user');
        navigation.navigate('Splash');
    }

    return { logout };
}

export default useLogout;