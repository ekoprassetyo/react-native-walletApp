import React from 'react'
import {TextStyle, ViewStyle, StyleProp, GestureResponderEvent, } from 'react-native';


export interface ButtonProps {
    btnStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    onPress?: (event: GestureResponderEvent) => void | undefined;
    children: React.ReactNode;
}