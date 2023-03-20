import { TouchableOpacity } from 'react-native/types'
import { styles } from './styles'
import React from 'react'

export interface IBSlider {
    onPressI: () => void
}
export function ButtonSlider({ onPressI }: IBSlider) {
    return (
        <TouchableOpacity style = {styles.ball} onPress={onPressI} />
    )
}