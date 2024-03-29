import { Text, View } from 'react-native';
import { Marker } from '../Marker';
import { styles } from './styles';
import React from 'react';
export interface ITextMarker {
    textMarker: string
}

export function ListMarker({ textMarker}: ITextMarker) {
    return (
        <View style = {styles.ListMarker}>
            <Marker />
            <Text style = {styles.textMarker} >{textMarker}</Text>
        </View>
    )
}