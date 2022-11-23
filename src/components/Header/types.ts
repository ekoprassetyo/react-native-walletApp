import { StyleProp, TextStyle, ImageSourcePropType, GestureResponderEvent, ImageStyle, ViewStyle } from 'react-native';

export interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyle?: StyleProp<TextStyle>;
    subTextStyle?: StyleProp<TextStyle>;
}

export interface ProfileProps {
    image: ImageSourcePropType;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    imageStyle?: StyleProp<ImageStyle>;
    imageContainerStyle?: StyleProp<ViewStyle>;
}