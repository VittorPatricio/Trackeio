import { ImageSourcePropType } from "react-native";

export interface Card {
    title: string;
    value: string;
    icon: ImageSourcePropType;
    color: string;
}