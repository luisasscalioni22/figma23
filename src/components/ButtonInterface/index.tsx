import { TouchableOpacity, TouchableOpacityProps, Text} from 'react-native'
import { styles } from './styles'
import React from 'react'

export interface IBInterface {
    onPressI: () => void
    title: string
    type:'primary' | 'secondary' | 'third' | 'thirdLight' | 'white' | 'black'
}
export function ButtonInterface({ onPressI, title, type, ...rest}: IBInterface) {
    return (
        <TouchableOpacity style ={
            type == 'primary' ? styles.buttonPrimary :
            type == 'secondary' ? styles.buttonPrimary :
            type == 'third' ? styles.buttonPrimary :
            type == 'thirdLight' ? styles.buttonPrimary :
            type == 'white' ? styles.buttonPrimary :
            styles.buttonBlack

        } onPress={onPressI}
            {...rest}
            >
            <Text style= {styles.text}>{title}</Text>
        </TouchableOpacity> 
    )
}
